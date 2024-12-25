//import { ComponentFixture, TestBed } from '@angular/core/testing';

//import { LoginComponent } from './login.component';

//describe('LoginComponent', () => {
//  let component: LoginComponent;
//  let fixture: ComponentFixture<LoginComponent>;

//  beforeEach(async () => {
//    await TestBed.configureTestingModule({
//      imports: [LoginComponent]
//    })
//    .compileComponents();

//    fixture = TestBed.createComponent(LoginComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  });

//  it('should create', () => {
//    expect(component).toBeTruthy();
//  });
//});
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
