import type { Plugin } from 'vite';
type Options = {
    root: string;
    routesDir: string;
};
export declare function createFileSystemRouter(options: Options): Plugin;
export declare function getHtml({ template, props, appHtml, headHtml, css, }: {
    css?: string;
    template: string;
    props: Object;
    appHtml: string;
    headHtml: string;
}): string;
export {};
//# sourceMappingURL=vite.d.ts.map