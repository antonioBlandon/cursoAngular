import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMaterialAngular2Component } from './table-material-angular2.component';

describe('TableMaterialAngular2Component', () => {
  let component: TableMaterialAngular2Component;
  let fixture: ComponentFixture<TableMaterialAngular2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMaterialAngular2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMaterialAngular2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
