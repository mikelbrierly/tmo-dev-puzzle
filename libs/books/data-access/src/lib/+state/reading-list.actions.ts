import { createAction, props } from '@ngrx/store';
import { Book, ReadingListItem } from '@tmo/shared/models';

export const init = createAction('[Reading List] Initialize');

export const loadReadingListSuccess = createAction(
  '[Reading List API] Load list success',
  props<{ list: ReadingListItem[] }>()
);
export const loadReadingListError = createAction(
  '[Reading List API] Load list error',
  props<{ error: string }>()
);

export const addToReadingList = createAction(
  '[Books Search Results] Add to list',
  props<{ book: Book }>()
);

export const failedAddToReadingList = createAction(
  '[Reading List API] Failed add to list',
  props<{ book: Book }>()
);

export const confirmedAddToReadingList = createAction(
  '[Reading List API] Confirmed add to list',
  props<{ book: Book }>()
);

export const removeFromReadingList = createAction(
  '[Books Search Results] Remove from list',
  props<{ item: ReadingListItem }>()
);

export const failedRemoveFromReadingList = createAction(
  '[Reading List API] Failed remove from list',
  props<{ item: ReadingListItem }>()
);

export const confirmedRemoveFromReadingList = createAction(
  '[Reading List API] Confirmed remove from list',
  props<{ item: ReadingListItem }>()
);

export const undoAddToReadingList = createAction(
  '[Reading List API] Undo add to list',
  props<{ item: ReadingListItem }>()
)

export const failedUndoAddToReadingList = createAction(
  '[Reading List API] Failed undo add to list',
  props<{ item: ReadingListItem }>()
)

export const confirmedUndoAddToReadingList = createAction(
  '[Reading List API] Confirmed undo add to reading list',
  props<{ item: ReadingListItem }>()
)


export const undoRemoveFromReadingList = createAction(
  '[Books Search Results] Undo add to list',
  props<{ book: Book }>()
)

export const failedUndoRemoveFromReadingList = createAction(
  '[Books Search Results] Failed undo add to list',
  props<{ item: Book }>()
)

export const confirmedUndoRemoveFromReadingList = createAction(
  '[Books Search Results] Confirmed undo add to reading list',
  props<{ item: Book }>()
)
