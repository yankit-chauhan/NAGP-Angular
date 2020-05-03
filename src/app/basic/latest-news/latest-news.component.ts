import { Component, OnInit } from '@angular/core';
import { ILatestNews } from 'src/app/model/ILatestNews';
import { LatestNewsService } from 'src/app/services/latest-news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  latestNews: ILatestNews[];
  pageTitle: string = "Latest News";

  constructor(private latestNewsService: LatestNewsService) {

  }

  ngOnInit(): void {
    this.getAllLatestNews();
  }

  getAllLatestNews() {
    this.latestNewsService.getLatestNews().subscribe(news => {
      this.latestNews = news;
    });
  }

}
