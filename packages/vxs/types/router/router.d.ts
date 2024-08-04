import { type NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { type ComponentType } from 'react';
import type { RouteNode } from '../Route';
import { type ExpoLinkingOptions } from '../getLinkingConfig';
import type { VXSRouter } from '../interfaces/router';
import type { RequireContext } from '../types';
import { type UrlObject } from './getNormalizedStatePath';
export declare let routeNode: RouteNode | null;
export declare let rootComponent: ComponentType;
export declare let linking: ExpoLinkingOptions | undefined;
export declare let hasAttemptedToHideSplash: boolean;
export declare let initialState: VXSRouter.ResultState | undefined;
export declare let rootState: VXSRouter.ResultState | undefined;
export declare let routeInfo: UrlObject | undefined;
export declare let navigationRef: VXSRouter.NavigationRef;
export declare function initialize(context: RequireContext, ref: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>, initialLocation?: URL): void;
export declare function navigate(url: VXSRouter.Href, options?: VXSRouter.LinkToOptions): Promise<void>;
export declare function push(url: VXSRouter.Href, options?: VXSRouter.LinkToOptions): Promise<void>;
export declare function dismiss(count?: number): void;
export declare function replace(url: VXSRouter.Href, options?: VXSRouter.LinkToOptions): Promise<void>;
export declare function setParams(params?: Record<string, string | number>): void | undefined;
export declare function dismissAll(): void;
export declare function goBack(): void;
export declare function canGoBack(): boolean;
export declare function canDismiss(): boolean;
export declare function getSortedRoutes(): RouteNode[];
export declare function updateState(state: VXSRouter.ResultState, nextStateParam?: VXSRouter.ResultState): void;
export declare function getRouteInfo(state: VXSRouter.ResultState): UrlObject;
export declare function subscribeToRootState(subscriber: VXSRouter.RootStateListener): () => void;
export declare function subscribeToStore(subscriber: () => void): () => void;
export declare function subscribeToLoadingState(subscriber: VXSRouter.LoadingStateListener): () => void;
export declare function setLoadingState(state: VXSRouter.LoadingState): void;
export declare function snapshot(): {
    linkTo: typeof linkTo;
    routeNode: RouteNode | null;
    rootComponent: ComponentType;
    linking: ExpoLinkingOptions | undefined;
    hasAttemptedToHideSplash: boolean;
    initialState: VXSRouter.ResultState | undefined;
    rootState: VXSRouter.ResultState | undefined;
    nextState: VXSRouter.ResultState | undefined;
    routeInfo: UrlObject | undefined;
    splashScreenAnimationFrame: number | undefined;
    navigationRef: VXSRouter.NavigationRef;
    navigationRefSubscription: () => void;
    rootStateSubscribers: Set<VXSRouter.RootStateListener>;
    storeSubscribers: Set<() => void>;
};
export declare function rootStateSnapshot(): VXSRouter.ResultState;
export declare function routeInfoSnapshot(): UrlObject;
export declare function useVXSRouter(): {
    linkTo: typeof linkTo;
    routeNode: RouteNode | null;
    rootComponent: ComponentType;
    linking: ExpoLinkingOptions | undefined;
    hasAttemptedToHideSplash: boolean;
    initialState: VXSRouter.ResultState | undefined;
    rootState: VXSRouter.ResultState | undefined;
    nextState: VXSRouter.ResultState | undefined;
    routeInfo: UrlObject | undefined;
    splashScreenAnimationFrame: number | undefined;
    navigationRef: VXSRouter.NavigationRef;
    navigationRefSubscription: () => void;
    rootStateSubscribers: Set<VXSRouter.RootStateListener>;
    storeSubscribers: Set<() => void>;
};
export declare function useStoreRootState(): VXSRouter.ResultState;
export declare function useStoreRouteInfo(): UrlObject;
export declare function cleanup(): void;
export declare const preloadingLoader: {};
export declare function preloadRoute(href: string): void;
export declare function linkTo(href: string, event?: string, options?: VXSRouter.LinkToOptions): Promise<void>;
//# sourceMappingURL=router.d.ts.map