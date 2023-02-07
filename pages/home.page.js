import Page from './page';

class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get platformMenu() {
    return $('.main-menu li:nth-child(1) a');
  }

  get syntheticDataMenu() {
    return $('.main-menu li:nth-child(2) a');
  }

  get resourcesMenu() {
    return $('.main-menu li:nth-child(3) a');
  }

  get companyMenu() {
    return $('.main-menu li:nth-child(4) a');
  }

  get searchIcon() {
    return $('.oxy-header-search_toggle');
  }

  get searchInput() {
    return $('input[type="search"]');
  }

  get acceptCookiesButton() {
    return $('#CookieBoxSaveButton');
  }

  get noResultsHeadline() {
    return $('h1.ct-headline');
  }

  get noResultsSearchText() {
    return $('h1.ct-code-block');
  }

  get contactItem() {
    return $('div=Contact');
  }

  /**
   * override specific options to adapt it to page object
   */

  async isPlatformMenuDisplayed() {
    return this.platformMenu.waitForDisplayed();
  }

  async isSyntheticDataMenuDisplayed() {
    return this.syntheticDataMenu.waitForDisplayed();
  }

  async isResourcesMenuDisplayed() {
    return this.resourcesMenu.waitForDisplayed();
  }

  async isCompanyMenuDisplayed() {
    return this.companyMenu.waitForDisplayed();
  }

  async acceptPrivacyPreference() {
    if (await this.acceptCookiesButton.waitForDisplayed()) {
      await this.acceptCookiesButton.waitForClickable();
      await browser.execute(() => {
        document.querySelector('#CookieBoxSaveButton').click();
      });
    }
  }

  async search(input) {
    await this.searchIcon.waitForDisplayed();
    await this.searchIcon.waitForClickable();
    await this.searchIcon.click();
    await this.searchInput.setValue(input);
    await browser.keys('Return');
  }

  async getNoResultsHeadline() {
    await this.noResultsHeadline.waitForDisplayed();
    return this.noResultsHeadline.getText();
  }

  async getNoResultsSearchText() {
    await this.noResultsSearchText.waitForDisplayed();
    return this.noResultsSearchText.getText();
  }

  async openContactForm() {
    await this.companyMenu.waitForDisplayed();
    await this.companyMenu.moveTo();
    await this.contactItem.waitForDisplayed();
    await this.contactItem.waitForClickable();
    await this.contactItem.click();
  }
}

export default new HomePage();
