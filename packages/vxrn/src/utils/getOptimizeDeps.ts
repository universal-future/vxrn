import { optimizeDeps, type UserConfig } from 'vite'
import { webExtensions } from '../constants'

export function getOptimizeDeps(mode: 'build' | 'serve') {
  const needsInterop = [
    'react',
    'react/jsx-runtime',
    'react/jsx-dev-runtime',
    'react-native-web-internals',
    'react-dom',
    'react-native-web',
    'react-dom/server',
    'react-dom/client',
    'url-parse',
    '@vxrn/safe-area',
    'query-string',
    'escape-string-regexp',
    'use-latest-callback',
    'react-is',
    'fast-deep-equal',
    'react-native-svg',
    '@supabase/auth-helpers-react',
    'parse-numeric-range',
    'use-sync-external-store',
    'use-sync-external-store/shim',
    'expo-constants',
    'expo-linking',
    'uuid',
    '@react-navigation/core',
    '@react-navigation/native',
    '@react-navigation/elements',
    '@react-navigation/bottom-tabs',
    '@react-navigation/native-stack',
    'inline-style-prefixer',
    '@docsearch/react',
    '@algolia/autocomplete-core',
    '@algolia/autocomplete-plugin-algolia-insights',
    '@algolia/autocomplete-shared',
    'react-native-reanimated',
    'moti',
  ]

  const depsToOptimize = [
    ...needsInterop,
    'requires-port',
    'querystringify',
    'compare-versions',
    'strict-uri-encode',
    'decode-uri-component',
    'split-on-first',
    'filter-obj',
    'scheduler',
    'warn-once',
    '@radix-ui/react-compose-refs',
    '@radix-ui/react-slot',
    'expo-splash-screen',
    'nanoid',
    'swr',
    'refractor/lang/tsx',
    'invariant',
    'tamagui/linear-gradient',
    '@tamagui/linear-gradient',
    '@react-native/normalize-color',
    '@vxrn/router',
    'expo-modules-core',
    'expo-status-bar',
    'react-native-web',
    'react-native-web-lite',
    'react-native',
    '@tamagui/constants',
    '@tamagui/react-native-use-responder-events',
    '@tamagui/alert-dialog',
    '@react-navigation/routers',
    '@tamagui/simple-hash',
    '@tamagui/use-did-finish-ssr',
    '@tamagui/use-event',
    '@tamagui/portal',
    '@tamagui/compose-refs',
    '@tamagui/avatar',
    '@tamagui/core',
    '@tamagui/dialog',
    '@tamagui/group',
    '@tamagui/helpers-icon',
    '@tamagui/helpers',
    '@tamagui/image',
    '@tamagui/lucide-icons',
    '@tamagui/popover',
    '@tamagui/popper',
    '@tamagui/scroll-view',
    '@tamagui/select',
    '@tamagui/sheet',
    '@tamagui/switch',
    '@tamagui/tabs',
    '@tamagui/toast',
    '@tamagui/toggle-group',
    '@tamagui/tooltip',
    '@tamagui/use-window-dimensions',
    '@tamagui/web',
    'tamagui',
    'react-native-web',
    'react-native-web-lite',
    'reforest',
  ]

  if (mode === 'build') {
    // breaks in serve mode
    depsToOptimize.push('@babel/runtime')
  }

  return {
    needsInterop,
    depsToOptimize,
    optimizeDeps: {
      include: depsToOptimize,
      exclude: ['util', '@swc/wasm', '@swc/core-darwin-arm64'],
      needsInterop,
      esbuildOptions: {
        resolveExtensions: webExtensions,
      },
    } satisfies UserConfig['optimizeDeps'],
  }
}