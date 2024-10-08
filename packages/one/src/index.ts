export type { OneRouter, One } from './interfaces/router'
import type { OneRouter } from './interfaces/router'

export type Href = OneRouter.Href
export type LinkProps<T extends string | object = string> = OneRouter.LinkProps<T>

export type { Endpoint, LoaderProps } from './types'

export * from '@vxrn/universal-color-scheme'

export { Root } from './Root'
export { render } from './render'

export { Stack } from './layouts/Stack'
export { Tabs } from './layouts/Tabs'

// TODO breaking due to react-native-gesture-handler
// export { Drawer } from './layouts/Drawer'

export { SafeAreaView } from 'react-native-safe-area-context'
export { Navigator, Slot } from './views/Navigator'
export { ErrorBoundary } from './views/ErrorBoundary'
// export { Unmatched } from './fallbackViews/Unmatched'
export { ScrollRestoration } from './views/ScrollRestoration'
export { LoadProgressBar } from './views/LoadProgressBar'

export { createApp } from './createApp'
export { createRoute, route } from './createRoute'
export { onClientLoaderResolve } from './clientLoaderResolver'

export { isResponse } from './utils/isResponse'
export { getURL } from './getURL'
export { redirect } from './utils/redirect'

export { useLinkTo } from './link/useLinkTo'

export {
  useRouter,
  useUnstableGlobalHref,
  usePathname,
  useNavigationContainerRef,
  useParams,
  useActiveParams,
  useSegments,
  useRootNavigationState,
} from './hooks'

// for easier expo-router migration
export {
  useLocalSearchParams,
  useGlobalSearchParams,
} from './hooks'

export * as routerStore from './router/router'

export { router } from './imperative-api'

export { Link } from './link/Link'
export { Redirect } from './link/Redirect'

export { Head } from './head'

export { withLayoutContext } from './layouts/withLayoutContext'

// React Navigation
export { useFocusEffect } from './useFocusEffect'
export { useNavigation } from './useNavigation'

export { useLoader } from './useLoader'
