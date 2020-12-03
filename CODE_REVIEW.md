# Code Review

* Could we make some component names more generic for reusability? For example change `book-search` to just `search` in case we wanted to be able to search users in the future?
* `feature` is where the components live, could that directory be named `components` to make the structure and location more clear?
* We aren't loading that much data in this app, but could we use lazy loading for images?

### Questions
* Is it our standard to keep unit tests paired with the components instead of in their own directory?
* Support for browsers that can't interpret es6? ("target" in tsconfig.base)
* Is `+state` an ngrx pattern for directory naming?
  * Should the `+state` directory be more organized breaking out reducers, selectors, actions, etc?
* I don't understand how the exported reading-list actions (wrapped in createAction ngrx method) relate to and work with reading-list.reducer
  * this syntax - `'[Reading List API] Failed remove from list'` to this - `on(ReadingListActions.removeFromReadingList, (state, action) => {`

# Lighthouse
* First report came back 39 on performance, and 87 on a11y. (incogneto showed same results)
  * FCP very slow
  * TTI very slow
  * 5,600 KiB network payload is way over the recommended 1600

### A11y issues
* Buttons do not have an accessible name. (fixed)
* "search" and "close" icon buttons are not aria-labeled for screen readers. (fixed)
* The user's focus is directed to new content added to the page (fixed)
* Page load on 3G is over 6 minutes. (minify bundle?)
* When "Want to Read" is clicked (and dimmed) on a book, it is no longer focusable.
  * Should disabled buttons be focusable by a screen reader?
* Images are unlabeled. (fixed, generic "book front cover" alt text added)
* Button focus outline hidden, making it difficult for keyboard users to see where they are. (fixed, brought back default browser outline)
* "Want to Read" button doesn't give any contextual info for screen readers when tabbing. (fixed)

---