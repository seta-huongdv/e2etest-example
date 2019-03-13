
Feature('Example test.js');

Scenario('test something', (I) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
    I.wait(5);
    I.see('xxxxxxxxxxxx');
    I.wait(10);
});
