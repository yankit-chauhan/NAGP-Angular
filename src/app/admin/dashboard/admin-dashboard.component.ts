import { Component } from '@angular/core';
import { ILatestNews } from 'src/app/model/ILatestNews';
import { LatestNewsService } from 'src/app/services/latest-news.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./admin-dashboard.component.html",
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
    pageTitle: string = "Admin Dashboard";
    latestNews: ILatestNews[];

    constructor(private latestNewsService: LatestNewsService, private _snackBar: MatSnackBar, private route: Router) {

    }

    ngOnInit(): void {
        this.getAllLatestNews();
    }

    getAllLatestNews() {
        this.latestNewsService.getLatestNews().subscribe(news => {
            this.latestNews = news;
        })
    }

    deleteNews(id: number) {
        let index: number = this.latestNews.findIndex(news => news.id == id);
        if (index != -1) {
            this.latestNewsService.deleteNews(id).subscribe();
            this._snackBar.open('Admin Portal', 'Record Deleted!', {
                duration: 2000,
            });
            this.getAllLatestNews();
        }
    }

}