import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public register(registerForm){
    try {
      console.log({form: registerForm});  
     return this.http.get(environment.apiUrl + 'users/register', {
       headers:{'Access-Control-Allow-Origin': '*', 
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers' : '*',
                'Access-Control-Alllow-Credentials': 'true'}, 
       params : {form: registerForm}});
    } catch (error) { 
      console.error(error);
    }
  }
  public updateInfo(updateform){
    try {
      console.log({form: updateform});  
     return this.http.get(environment.apiUrl + 'users/updateinfo', {
       headers:{'Access-Control-Allow-Origin': '*', 
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers' : '*',
                'Access-Control-Alllow-Credentials': 'true'}, 
       params : {form: updateform}});
    } catch (error) { 
      console.error(error);
    }
  }

  public getUserInfo(userid){
    try {
      console.log({id: userid});  
     return this.http.get(environment.apiUrl + 'users/getinfo', {
       headers:{'Access-Control-Allow-Origin': '*', 
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers' : '*',
                'Access-Control-Alllow-Credentials': 'true'}, 
       params : {id: userid}});
    } catch (error) { 
      console.error(error);
    }
  }

  public servicesearch(filter){
    try {
      console.log({searchFilter: filter});  
     return this.http.get(environment.apiUrl + 'users/search', {
       headers:{'Access-Control-Allow-Origin': '*', 
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers' : '*',
                'Access-Control-Alllow-Credentials': 'true'}, 
       params : {service: filter}});
    } catch (error) { 
      console.error(error);
    }
  }

}