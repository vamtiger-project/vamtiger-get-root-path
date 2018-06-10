"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const separator = new RegExp(path_1.sep, 'g');
exports.default = (params) => {
    const paths = params.paths;
    const pathLength = {};
    let currentPathLength;
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
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["multipleRootPaths"] = "Multiple root paths";
})(ErrorMessage = exports.ErrorMessage || (exports.ErrorMessage = {}));
//# sourceMappingURL=index.js.map