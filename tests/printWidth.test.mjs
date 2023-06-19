import checkExample from '../testUtilities/checkExample.mjs';

describe('printWidth', () => {
    it('should not allow code lines longer than 120 characters', async () => {
        expect(await checkExample(import.meta, 'shortLines')).toBe(true);
        expect(await checkExample(import.meta, 'longLines')).toBe(false);
    });
});
