import { expect } from '@wdio/globals';
import HelloPage from '../../test/pageobjects/hello.page.js';

describe('My hello world page ', () => {
    it('should toggle', async () => {
        await HelloPage.open();
		
        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting();
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting();
    });

    it('should not toggle', async () => {
        await HelloPage.open();
		
        await HelloPage.toggleTitleWithInput('wrong text')
        await expect(HelloPage.helloTitle).not.toBeExisting();
    });
});
