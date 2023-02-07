import HomePage from '../pages/home.page';

describe('Bookmarks menu -,', () => {
  before(async () => {
    await HomePage.open('/');
    await HomePage.acceptPrivacyPreference();
  });
  it('should display Platform menu', async () => {
    const platformMenu = await HomePage.isPlatformMenuDisplayed();
    await expect(platformMenu).toEqual(true);
    await expect(HomePage.platformMenu).toHaveHref(
      'https://mostly.ai/synthetic-data-platform/'
    );
  });
  it('should display Synthetic data menu', async () => {
    const syntheticDataMenu = await HomePage.isSyntheticDataMenuDisplayed();
    await expect(syntheticDataMenu).toEqual(true);
    await expect(HomePage.syntheticDataMenu).toHaveHref(
      'https://mostly.ai/synthetic-data/'
    );
  });
  it('should display Resources menu', async () => {
    const resourcesMenu = await HomePage.isResourcesMenuDisplayed();
    await expect(resourcesMenu).toEqual(true);
    await expect(HomePage.resourcesMenu).toHaveHref(
      'https://mostly.ai/resources/'
    );
  });
  it('should display Company menu', async () => {
    const companyMenu = await HomePage.isCompanyMenuDisplayed();
    await expect(companyMenu).toEqual(true);
    await expect(HomePage.companyMenu).toHaveHref(
      'https://mostly.ai/about-us/'
    );
  });
});
