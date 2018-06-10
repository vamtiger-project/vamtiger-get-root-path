"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const __1 = require("../..");
const mock_data_1 = require("./mock-data");
describe("vamtiger-get-root-path vamtiger: should get throw an error for", function () {
    it("multiple root paths", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield test({ paths: mock_data_1.default }).catch(error => error);
            chai_1.expect(result).to.be.an('Error');
        });
    });
});
function test(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const rootPath = __1.default(params);
        return rootPath;
    });
}
//# sourceMappingURL=index.spec.js.map