import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { AdminLoginComponent } from './admin-login.component';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/model/IUser';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AdminLoginComponent
      ],
      providers: [
        MatSnackBar,
        Overlay,
        FormBuilder,
        UserService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Admin Login'`, () => {
    expect(component.pageTitle).toEqual('Admin Login');
  });
});


