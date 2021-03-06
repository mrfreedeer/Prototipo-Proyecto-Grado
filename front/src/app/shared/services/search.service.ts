import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor(private http: HttpClient) { }
  
  headers = {'Access-Control-Allow-Origin': '*', 
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Headers' : '*',
  'Access-Control-Alllow-Credentials': 'true'}

  public search(filter){
    try {
        let a = filter;
        console.log('searching: ', filter);
        return this.http.get(environment.apiUrl + 'users/search', {
          headers: this.headers, 
          params : {searchFilter: filter}});
    } catch (error) { 
      console.error(error);
    }
  }
  public searchCategory(category){
    try {
        let a = category;
        console.log('searching: ', category);
        return this.http.get(environment.apiUrl + 'users/searchCategory', {
          headers: this.headers, 
          params : {service: a}});
    } catch (error) { 
      console.error(error);
    }
  }
}
