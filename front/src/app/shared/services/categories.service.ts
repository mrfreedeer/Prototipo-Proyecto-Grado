import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  headers = {'Access-Control-Allow-Origin': '*', 
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers' : '*',
                'Access-Control-Alllow-Credentials': 'true'}
  constructor(private http: HttpClient) { }

  public getCategories(){
    try {
     return this.http.get(environment.apiUrl + 'categories/', {
       headers:this.headers});
    } catch (error) { 
      console.error(error);
    }
  }
}
