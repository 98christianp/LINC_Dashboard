import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInstanceComponent } from './table-instance.component';

describe('TableInstanceComponent', () => {
  let component: TableInstanceComponent;
  let fixture: ComponentFixture<TableInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
