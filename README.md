# Mostly AI Task
- E2E tests have been implemented using WebdriverIO framework
- More info the framework here: https://webdriver.io/docs/gettingstarted/

### System requirements
- Install at least v16.x or higher version of Node.js
- Install Chrome browser

### How to execute all the tests
- Clone the project in your system from the Github repo.
- From the project folder in your terminal, install all the dependencies by executing `npm install`
- Execute following command to run all the tests:
```
npm run wdio
```

### How to executed a specific test suite
- Execute following command to run all the tests:
```
npm run wdio -- --suite <suite name>
```
- For example
```
npm run wdio -- --suite search
```



