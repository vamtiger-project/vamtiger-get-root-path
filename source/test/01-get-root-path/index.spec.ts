import {expect} from 'chai';
import getRootPath from '../..';
import paths from './mock-data';

describe("vamtiger-get-root-path vamtiger: should get", function () {
    it("root", async function () {
        const expected = paths[0];
        const rootPath = await getRootPath({ paths });

        expect(rootPath).to.be.ok;
        expect(rootPath).to.equal(expected);
    })
})