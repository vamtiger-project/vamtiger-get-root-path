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
describe("vamtiger-get-root-path vamtiger: should get", function () {
    it("root", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const expected = mock_data_1.default[0];
            const rootPath = yield __1.default({ paths: mock_data_1.default });
            chai_1.expect(rootPath).to.be.ok;
            chai_1.expect(rootPath).to.equal(expected);
        });
    });
});
//# sourceMappingURL=index.spec.js.map