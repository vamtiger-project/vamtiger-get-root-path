declare const _default: (params: Params) => string;
export default _default;
export interface Params {
    paths: string[];
}
export interface PathLength {
    [key: number]: string[];
}
export declare enum ErrorMessage {
    multipleRootPaths = "Multiple root paths"
}
