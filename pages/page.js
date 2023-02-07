/**
 * main page object class containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  async open(path) {
    await browser.url(path);
  }
}
