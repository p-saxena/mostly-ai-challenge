import HomePage from '../pages/home.page';

describe('Search feature -,', () => {
  before(async () => {
    await HomePage.open('/');
    await HomePage.acceptPrivacyPreference();
  });
  it('should display information to user in case of no search results', async () => {
    await HomePage.search('sythetic');
    const noResultsHeadline = await HomePage.getNoResultsHeadline();
    const noResultsSearchText = await HomePage.getNoResultsSearchText();
    await expect(`${noResultsHeadline} ${noResultsSearchText}`).toEqual(
      'Sorry, no results for: sythetic'
    );
  });
});
