import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferedservicesService {

  headers = {'Access-Control-Allow-Origin': '*', 
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Headers' : '*',
  'Access-Control-Alllow-Credentials': 'true'}

constructor(private http: HttpClient) { }

  public createService(service){
    try {
      return this.http.get(environment.apiUrl + 'services/newservice', {
        headers: this.headers,
        params: {form: service}
      });
    } catch (error) {
      console.error(error);
    }
  }

  public getServices(){
    try {
      return this.http.get(environment.apiUrl + 'services/getservices', {
        headers: this.headers,
        params: {id: localStorage.getItem("userid")}
      });
    } catch (error) {
      console.error(error);
    }
  }

  public updateService(service){
    try {
      return this.http.get(environment.apiUrl + 'services/updateservice', {
        headers: this.headers,
        params: {form: service}
      });
    } catch (error) {
      console.error(error);
    }
  }

  public deleteService(service){
    try {
      return this.http.get(environment.apiUrl + 'services/deleteservice', {
        headers: this.headers,
        params: {form: service}
      });
    } catch (error) {
      console.error(error);
    }
  }

}
