import { Component } from '@angular/core';
// how can we use the MatSnackBar component from books-feature.module without having to create a third shared components file?
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';
import { UndoActionComponent } from '../undo-action/undo-action.component';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(
    private readonly store: Store,
    private snackBar: MatSnackBar
  ) {}

  removeFromReadingList(item: ReadingListItem) {
    this.store.dispatch(removeFromReadingList({ item }));

    this.snackBar.openFromComponent(UndoActionComponent, {
      data: {book: item, addingBook: false}
    });
  }
}
