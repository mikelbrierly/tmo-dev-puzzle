import { $, browser, ExpectedConditions } from 'protractor';

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });

  it('Then: I should be able to mark books as read', async () => {

    const button = await $('[aria-label="mark Star Wars: Ahsoka as read"]');

    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        button
      )
    );
    await button.click();

    const dd = new Date().getDate();
    const mm = new Date().getMonth()+1;
    const yyyy = new Date().getFullYear();

    const currentDate = `${mm}/${dd}/${yyyy}`;
    const readDate = await $('[aria-label="Star Wars: Ahsoka marked as read"]');

    await browser.wait(
      ExpectedConditions.presenceOf(readDate), 5000, 'Took too long to load element'
    );

    expect(ExpectedConditions.textToBePresentInElement(readDate, 'Finished ' + currentDate));
  });
});
