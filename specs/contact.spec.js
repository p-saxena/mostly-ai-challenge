import HomePage from '../pages/home.page';
import ContactPage from '../pages/contact.page';

describe('Contact feature -,', () => {
  before(async () => {
    await HomePage.open('/');
    await HomePage.acceptPrivacyPreference();
  });
  it('should allow user to open contact form under the company bookmark', async () => {
    await HomePage.openContactForm();
    await expect(browser).toHaveUrlContaining('/contact/');
  });
  it('should allow user fill contact form data', async () => {
    const dataSubmission = await ContactPage.fillContactForm();
    await expect(dataSubmission).toEqual(undefined);
  });
});
