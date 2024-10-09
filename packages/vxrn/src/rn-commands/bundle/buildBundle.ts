import path from 'node:path'
import FSExtra from 'fs-extra'
import { fillOptions } from '../../utils/getOptionsFilled'
import { getReactNativeBundle } from '../../utils/getReactNativeBundle'
import { loadEnv } from '../../utils/loadEnv'

export type BundleCommandArgs = {
  assetsDest?: string
  assetCatalogDest?: string
  entryFile: string
  resetCache: boolean
  resetGlobalCache: boolean
  transformer?: string
  minify?: boolean
  config?: string
  platform: string
  dev: boolean
  bundleOutput: string
  bundleEncoding?: 'utf8' | 'utf16le' | 'ascii'
  maxWorkers?: number
  sourcemapOutput?: string
  sourcemapSourcesRoot?: string
  sourcemapUseAbsolutePath: boolean
  verbose: boolean
  unstableTransformProfile: string
  indexedRamBundle?: boolean
  resolverOption?: Array<string>
}

export async function buildBundle(
  _argv: Array<string>,
  ctx: any,
  args: BundleCommandArgs,
  bundleImpl: any
): Promise<void> {
  const {
    platform, // Android is not supported yet.
    dev,
    // bundleEncoding, // Not supported, we are using utf8.
    // sourcemapUseAbsolutePath,
    // unstableTransformProfile,
    // resetCache, // Currently we are not using cache for production builds.
    // readGlobalCache,
    // entryFile, // Not supported. With VxRN, we are using a static entry file.
    bundleOutput,
    assetsDest, // TODO
    // minify, // Minification is not supported.
  } = args

  const { root } = ctx
  if (typeof root !== 'string') {
    throw new Error(`Expected ctx.root to be a string, but got ${typeof root}`)
  }

  await loadEnv(root)

  let nativeEntry: string | undefined = undefined

  // If there's an `app` directory, then we assume that the user is using One.
  const appDir = path.join(root, 'app')
  if (FSExtra.existsSync(appDir) && FSExtra.statSync(appDir).isDirectory()) {
    console.info('One project detected. Using One virtual entry.')
    // TODO: Hardcoded for now to work with one. See `virtualEntryIdNative` in `packages/one/src/vite/virtualEntryPlugin.ts` and also `native: virtualEntryIdNative` in `packages/one/src/cli/run.ts`.
    nativeEntry = 'virtual:one-entry-native'
  }

  const optionsIn = {
    root,
    host: '0.0.0.0', // TODO: Hardcoded for now.
    entries: {
      ...(nativeEntry ? { native: nativeEntry } : {}),
    },
  }

  const options = await fillOptions(optionsIn, { mode: dev ? 'dev' : 'prod' })
  let builtBundle = await getReactNativeBundle(options, {
    mode: dev ? 'dev' : 'prod',
    assetsDest,
    useCache: false,
  })

  // Assuming we are not enabling this on native as it will break anyway.
  builtBundle = builtBundle.replace(/process\.env\.VXRN_REACT_19/g, 'false')

  if (!dev) {
    // TODO: There should be a legitimate way to do this.
    builtBundle = builtBundle.replace(
      '.getEnforcing("DevSettings")',
      '.patched_getEnforcing_DevSettings_will_not_work_in_production'
    )
  }

  console.info(`Writing bundle to ${bundleOutput}...`)
  FSExtra.writeFileSync(bundleOutput, builtBundle, { encoding: 'utf8' })
  console.info('Done.')

  // Prevent the process not getting exited for some unknown reason.
  // If the process is not exited, it might hang the native build process.
  setTimeout(() => {
    process.exit()
  }, 1000)
}
