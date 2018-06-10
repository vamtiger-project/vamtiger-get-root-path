import { sep } from 'path';

const separator = new RegExp(sep, 'g');

export default (params: Params) => {
    const paths = params.paths;
    const pathLength = {} as PathLength;

    let currentPathLength: number;
    let minPathLength = 0;
    let rootPath;
    
    paths.forEach(currentPath => {
        currentPathLength = currentPath.split(separator).length;

        if (!minPathLength || currentPathLength < minPathLength)
            minPathLength = currentPathLength;

        if (!pathLength[currentPathLength])
            pathLength[currentPathLength] = [currentPath];
        else
            pathLength[currentPathLength].push(currentPath);
    });

    if (pathLength[minPathLength].length > 1)
        throw new Error(`${ErrorMessage.multipleRootPaths}: ${pathLength[minPathLength].length} (${JSON.stringify(pathLength[minPathLength])})`);
    
    rootPath = pathLength[minPathLength][0];

    return rootPath;
};

export interface Params {
    paths: string[];
}

export interface PathLength {
    [key: number]: string[];
}

export enum ErrorMessage {
    multipleRootPaths = 'Multiple root paths'
}