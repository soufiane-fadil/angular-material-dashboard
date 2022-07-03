import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  file:any;
  tweet;
  tweet_id;
  comments;
  likes;
  retweeters;

  fileChanged(e) {
      this.file = e.target.files[0];
      this.uploadDocument(this.file)
  }

  uploadDocument(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      //console.log(fileReader.result);
      this.storeResults(fileReader.result)
    }
    fileReader.readAsText(this.file);
}
 storeResults(result) {
  let json = JSON.parse(result);
  console.log(json)
  this.tweet = json.tweet;
  this.tweet_id = json.tweet_id;
  this.retweeters = Object.keys(json.retweeters).length;
  this.comments = Object.keys(json.comments).length;
  this.likes = Object.keys(json.likes).length;
}
}
