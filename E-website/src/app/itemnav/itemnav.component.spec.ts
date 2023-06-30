import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemnavComponent } from './itemnav.component';

describe('ItemnavComponent', () => {
  let component: ItemnavComponent;
  let fixture: ComponentFixture<ItemnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemnavComponent]
    });
    fixture = TestBed.createComponent(ItemnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
