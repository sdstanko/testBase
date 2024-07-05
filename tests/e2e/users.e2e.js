import UsersPage from '../../test/pageobjects/users.page.js';

describe('Users page', () => {
    it('load data', async () => {
        await UsersPage.loadData();
    });

	it('delete user', async () => {
		await UsersPage.loadData()
		await UsersPage.deleteUser()
	})
});
