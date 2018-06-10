import {expect} from 'chai';
import {default as getRootPath, Params} from '../..';
import paths from './mock-data';

describe("vamtiger-get-root-path vamtiger: should get throw an error for", function () {
    it("multiple root paths", async function () {
        const result = await test({ paths }).catch(error => error) as TestRestult;

        expect(result).to.be.an('Error');
    });
});

async function test(params: Params) {
    const rootPath = getRootPath(params) as TestRestult;

    return rootPath;
}

type TestRestult = string|Error;