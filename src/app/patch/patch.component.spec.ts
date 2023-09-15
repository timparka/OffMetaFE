import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchComponent } from './patch.component';

describe('PatchComponent', () => {
  let component: PatchComponent;
  let fixture: ComponentFixture<PatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatchComponent]
    });
    fixture = TestBed.createComponent(PatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
