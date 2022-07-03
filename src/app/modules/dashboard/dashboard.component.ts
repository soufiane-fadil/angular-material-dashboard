import { Component, OnInit, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { DashboardService } from '../dashboard.service';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource, MatPaginator, MatButton } from '@angular/material';
import { Router } from '@angular/router';
import { ShareDataService } from '../share-data.service';
import { FetchDataService } from '../fetch-data.service';

export interface PeriodicElement {
  tweet: string;
  time: string;
  user: number;
  hashTag: string;
  matchedKeywords: string;
  reusedImages:string;
  manipulatedImage: string;
  botAnalysis: string;
  fakeAnalysis: string;
  status: string;
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   { time: '13:00', tweet: 'Hydrogen', user: 1.0079, hashTag: 'H' , matchedKeywords:'injured',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Helium', user: 4.0026, hashTag: 'He' , matchedKeywords:'killed',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Lithium', user: 6.941, hashTag: 'Li' , matchedKeywords:'injured' ,reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Beryllium', user: 9.0122, hashTag: 'Be'  , matchedKeywords:'killed',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Boron', user: 10.811, hashTag: 'B'  , matchedKeywords:'killed',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Carbon', user: 12.0107, hashTag: 'C'  , matchedKeywords:'injured',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Nitrogen', user: 14.0067, hashTag: 'N'  , matchedKeywords:'slaughtered',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Oxygen', user: 15.9994, hashTag: 'O'  , matchedKeywords:'slaughtered',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Fluorine', user: 18.9984, hashTag: 'F' , matchedKeywords:'injured' ,reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Neon', user: 20.1797, hashTag: 'Ne' , matchedKeywords:'killed' ,reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Sodium', user: 22.9897, hashTag: 'Na'  , matchedKeywords:'slaughtered',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Magnesium', user: 24.305, hashTag: 'Mg'  , matchedKeywords:'slaughtered',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Aluminum', user: 26.9815, hashTag: 'Al'  , matchedKeywords:'injured',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Silicon', user: 28.0855, hashTag: 'Si' , matchedKeywords:'injured',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Phosphorus', user: 30.9738, hashTag: 'P'  , matchedKeywords:'slaughtered',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Sulfur', user: 32.065, hashTag: 'S'  , matchedKeywords:'killed',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Chlorine', user: 35.453, hashTag: 'Cl'  , matchedKeywords:'injured',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Argon', user: 39.948, hashTag: 'Ar'  , matchedKeywords:'injured',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Potassium', user: 39.0983, hashTag: 'K'  , matchedKeywords:'injured',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
//   { time: '13:00', tweet: 'Calcium', user: 40.078, hashTag: 'Ca'  , matchedKeywords:'injured',reusedImages:'https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png',manipulatedImage:'manipulation type',botAnalysis:'74% bot',status:'ready',fakeAnalysis:'fake'},
// ];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];
  tweets: any = [];
  displayedColumns: string[] = ['time','user','tweet', 'hashTags','matchedKeywords', 'reusedImages','manipulationType','botAnalysis', 'fakeAnalysis','status','details'];

  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private fetchData: FetchDataService, private dashboardService: DashboardService ,private shareData: ShareDataService,private _liveAnnouncer: LiveAnnouncer,private router:Router) { }
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  ngOnInit() {
    this.fetchTweets();
    // this.bigChart = this.dashboardService.bigChart();
    // this.cards = this.dashboardService.cards();
    //this.pieChart = this.dashboardService.pieChart();

  }

  fetchTweets(){
      this.fetchData.getTweets()
        .subscribe((success) => {
          console.log(success);
          this.tweets = success;
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.tweets);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          },
          (err)=>{
            console.log(err);
          });
  }

  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  onGetReport(name){
    console.log(name);
    this.shareData.set(name);
    this.router.navigateByUrl('/reports');
  }
    ngAfterViewInit() {
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
