import { type NavigationContainerProps, type NavigationContainerRef } from '@react-navigation/core';
import { type DocumentTitleOptions, type LinkingOptions, type Theme } from '@react-navigation/native';
import * as React from 'react';
type Props<ParamList extends object> = NavigationContainerProps & {
    theme?: Theme;
    linking?: LinkingOptions<ParamList>;
    fallback?: React.ReactNode;
    documentTitle?: DocumentTitleOptions;
    onReady?: () => void;
};
declare const NavigationContainer: <RootParamList extends object = ReactNavigation.RootParamList>(props: Props<RootParamList> & {
    ref?: React.Ref<NavigationContainerRef<RootParamList>>;
}) => React.ReactElement;
export default NavigationContainer;
//# sourceMappingURL=NavigationContainer.d.ts.map