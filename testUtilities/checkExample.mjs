import fs from 'fs';
import { resolve, basename } from 'path';
import prettier from 'prettier';
import getDirname from './getDirname.mjs';

function getTestName(esImportMeta) {
    const testFileName = basename(esImportMeta.url);
    const match = testFileName.match(/(.+)\.test\.(mjs|js)/);
    return match[1];
}

export default async (esImportMeta, exampleName) => {
    const testName = getTestName(esImportMeta);
    const exampleFilePath = resolve(getDirname(esImportMeta), `${testName}.example.${exampleName}.js`);
    const prettierOptions = await prettier.resolveConfig(exampleFilePath);
    const exampleCode = fs.readFileSync(exampleFilePath, { encoding: 'utf-8' });

    return prettier.check(exampleCode, {
        parser: 'babel',
        ...prettierOptions,
    });
};
