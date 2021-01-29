import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { getReadingList, undoAddToReadingList, undoRemoveFromReadingList } from '@tmo/books/data-access';
import { Book, ReadingListItem } from '@tmo/shared/models';

@Component({
  selector: 'tmo-undo-action',
  templateUrl: './undo-action.component.html',
  styleUrls: ['./undo-action.component.scss']
})
export class UndoActionComponent implements OnInit {
  readingList: ReadingListItem[];

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data,
    private readonly store: Store,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.store.select(getReadingList).subscribe(books => {
      this.readingList = books;
    });
  }

  undoRemove(item) {
    const book: Book = item.book;
    this.store.dispatch(undoRemoveFromReadingList({ book }));
    this.snackBar.dismiss();
  }

  undoAdd(itm) {
    const item: ReadingListItem = itm.book;
    this.store.dispatch(undoAddToReadingList({ item }));
    this.snackBar.dismiss();
  }

  close() {
    this.snackBar.dismiss();
  }
}
