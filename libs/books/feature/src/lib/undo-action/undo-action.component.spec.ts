import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tmo/shared/testing';

import { UndoActionComponent } from './undo-action.component';
import { BooksFeatureModule } from '@tmo/books/feature';

describe('UndoActionComponent', () => {
  let component: UndoActionComponent;
  let fixture: ComponentFixture<UndoActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BooksFeatureModule, SharedTestingModule ],
      declarations: [ UndoActionComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
