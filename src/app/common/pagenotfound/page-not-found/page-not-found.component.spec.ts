import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Page Note Found'`, () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    const component = fixture.componentInstance;
    expect(component.pageTitle).toEqual('Page Note Found');
  });

  it(`should have h1 tag`, () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    const component = fixture.debugElement.query(By.css('h1'));
    expect(component.nativeElement.textContent).not.toBeNull();
  });
});
