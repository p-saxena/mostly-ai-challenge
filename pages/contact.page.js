import Page from './page';

class ContactPage extends Page {
  /**
   * define selectors using getter methods
   */
  get firstNameInput() {
    return $('input[name="firstname"]');
  }

  get lastNameInput() {
    return $('input[name="lastname"]');
  }

  get emailInput() {
    return $('input[name="email"]');
  }

  get mobilePhoneInput() {
    return $('input[name="mobilephone"]');
  }

  get organizationInput() {
    return $('input[name="company"]');
  }

  get countryDropdown() {
    return $('select[name="country"]');
  }

  get marketingDropdown() {
    return $('select[name="how_did_you_hear_about_mostly_ai_"]');
  }

  get messageTextAreaInput() {
    return $('textarea[name="message"]');
  }

  get marketingOffersCheckbox() {
    return $('input[type="checkbox"]');
  }

  get sendMessageButton() {
    return $('.hs_submit input[value="SEND MESSAGE"]');
  }

  /**
   * override specific options to adapt it to page object
   */

  async enterFirstName(firstName) {
    await this.firstNameInput.waitForClickable();
    await this.firstNameInput.setValue(firstName);
  }

  async enterLastName(lastName) {
    await this.lastNameInput.waitForClickable();
    await this.lastNameInput.setValue(lastName);
  }

  async enterEmail(email) {
    await this.emailInput.waitForClickable();
    await this.emailInput.setValue(email);
  }

  async enterMobilePhone(phoneNumber) {
    await this.mobilePhoneInput.waitForClickable();
    await this.mobilePhoneInput.setValue(phoneNumber);
  }

  async enterOrganization(organization) {
    await this.organizationInput.waitForClickable();
    await this.organizationInput.setValue(organization);
  }

  async selectCountryFromDropdown(country) {
    await this.countryDropdown.selectByVisibleText(country);
  }

  async selectMarketingOptionFromDropdown(option) {
    await this.marketingDropdown.waitForDisplayed();
    await this.marketingDropdown.waitForClickable();
    await this.marketingDropdown.selectByVisibleText(option);
  }

  async enterMessgae() {
    await this.messageTextAreaInput.waitForClickable();
    await this.messageTextAreaInput.setValue(
      'test message part of interview process at Mostly AI'
    );
  }

  async optForMarketingOffers() {
    await this.marketingOffersCheckbox.scrollIntoView();
    await this.marketingOffersCheckbox.waitForClickable();
    await this.marketingOffersCheckbox.click();
  }

  async sendMessage() {
    await this.sendMessageButton.waitForClickable();
    await this.sendMessageButton.click();
  }

  async fillContactForm() {
    await this.enterFirstName('Jöhn');
    await this.enterLastName('Doe');
    await this.enterEmail('joehn.doe@mostlyai.com');
    await this.enterMobilePhone('017456378921');
    await this.enterOrganization('Root');
    await this.selectCountryFromDropdown('Germany');
    await this.selectMarketingOptionFromDropdown('Facebook');
    await this.enterMessgae();
    await this.optForMarketingOffers();
    await this.sendMessageButton.waitForExist();
    await this.sendMessageButton.waitForEnabled();
    return this.sendMessageButton.moveTo();
  }
}

export default new ContactPage();
