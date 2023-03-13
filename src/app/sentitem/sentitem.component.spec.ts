import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentitemComponent } from './sentitem.component';

describe('SentitemComponent', () => {
  let component: SentitemComponent;
  let fixture: ComponentFixture<SentitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
