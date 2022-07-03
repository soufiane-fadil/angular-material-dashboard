import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { DashboardService } from '../dashboard.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  pieChart = [];
  cards = [];
  fontStyleControl = new FormControl('');
  fontStyle?: string;
  constructor(private shareData:ShareDataService,private dashboardService: DashboardService) { }
  info;
  ngOnInit() {
    this.info = this.shareData.get();
    console.log(this.info)
    this.pieChart = this.dashboardService.pieChart();
    this.cards = this.dashboardService.cards();
  }

}
