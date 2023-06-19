import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default (esImportMeta) => {
    return dirname(fileURLToPath(esImportMeta.url));
};
