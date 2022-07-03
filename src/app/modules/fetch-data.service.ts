import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getTweets(){
    return this.http.get(environment.API_END_POINT + '/tweets');
  }
}
