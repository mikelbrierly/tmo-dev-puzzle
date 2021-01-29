import { $, $$, browser, element, ExpectedConditions } from 'protractor';

describe('When: Before I use the reading list feature', () => {
  it('Then: I should have a book added to my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('ahsoka');
    await form.submit();
    
    const button = await $('[aria-label="want to read Star Wars: Ahsoka"]');

    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        button
      )
    );
    await button.click();

    const removeButton = await $('[aria-label="Remove Star Wars: Ahsoka from reading list"]');
    await browser.wait(
      ExpectedConditions.presenceOf(removeButton), 5000, 'Took too long to load element'
    );
    expect(ExpectedConditions.presenceOf(removeButton))

  });
});

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });

  it('Then: I should be able to delete items from my reading list', async () => {

    const removeButton = await $('[aria-label="Remove Star Wars: Ahsoka from reading list"]');
    await removeButton.click();

    expect(ExpectedConditions.not(ExpectedConditions.presenceOf(removeButton)))
  });

  it('Then: I should be able to undo deletions', async () => {

    const undoButton = await $('[aria-label="Undo removal of Star Wars: Ahsoka"]');

    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        undoButton
      )
    );
    await undoButton.click();

    const removeButton = await $('[aria-label="Remove Star Wars: Ahsoka from reading list"]');
    await browser.wait(
      ExpectedConditions.presenceOf(removeButton), 5000, 'Took too long to load element'
    );
    expect(ExpectedConditions.presenceOf(removeButton))

  });
});
