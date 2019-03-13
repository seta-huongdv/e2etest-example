
Feature('Test Case');

Scenario('test something 1', (I) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
    I.wait(5);
});

Scenario('test something 2', (I) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
    I.wait(5);
    I.see('xxxxxxxxxxxx');
    I.wait(10);
});
