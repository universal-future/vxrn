import type { VXRNOptionsFilled } from '../utils/getOptionsFilled';
export declare function reactNativeHMRPlugin({ root, assetExts, }: VXRNOptionsFilled & {
    assetExts: string[];
}): {
    name: string;
    handleHotUpdate(this: void, { read, modules, file, server }: import("vite").HmrContext): Promise<void>;
};
//# sourceMappingURL=reactNativeHMRPlugin.d.ts.map