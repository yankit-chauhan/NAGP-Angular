import { Component, OnInit } from '@angular/core';
import { ILatestNews } from 'src/app/model/ILatestNews';
import { LatestNewsService } from 'src/app/services/latest-news.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  pageTitle: string = "Add New News";
  newsForm: FormGroup;

  constructor(public fb: FormBuilder, private latestNewsService: LatestNewsService, private route: Router, private _snackBar: MatSnackBar) {
    this.newsForm = this.fb.group({
      heading: ['', Validators.required],
      news: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  save(newNews: ILatestNews) {
    this.latestNewsService.addNews(newNews).subscribe();
    this._snackBar.open('Admin Portal', 'News added successfully!', {
      duration: 4000,
    });
    this.route.navigate(['/admindashboard']);
  }

  getHeadingErrorMessage() {
    return this.newsForm.get('heading').hasError('required') ? 'Please give a heading for news.' : '';
  }

  getNewsErrorMessage() {
    return this.newsForm.get('news').hasError('required') ? 'Please add some News content.' : '';
  }

}
