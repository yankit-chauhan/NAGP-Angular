import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  /**
   * Method that takes user to dashboard when logged in.
   * Otherwise redirectes to lgin page.
   */
  goBack(): void {
    if (localStorage.getItem('TOKEN') !== null) {
      this.route.navigate(['/admindashboard']);
    } else {
      this.route.navigate(['/dashboard']);
    }
  }

}
