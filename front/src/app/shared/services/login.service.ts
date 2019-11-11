import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserTypeEnum } from '../enums/UserType.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  userType: number;
  
  constructor(private http: HttpClient,
    private router: Router) { }
  
  getToken(userinfo){
    try {
      console.log({credentials: userinfo});  
      return this.http.get(environment.apiUrl + 'login', {
        headers:{'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers' : '*',
        'Access-Control-Alllow-Credentials': 'true'}, 
        params : {credentials: userinfo}});
      } catch (error) { 
        console.error(error);
      }
    }
    
    isLogged() {
      const userId = localStorage.getItem('userid');
      this.userType = +localStorage.getItem('usertype');
      return userId !== null;
    }
    getUserInfo(): any {
      if (this.isLogged()) {
        return JSON.parse(localStorage.getItem('userInfo'));
      }
    }
    
    getUserType() {
      return +localStorage.getItem('usertype');
    }

    logOut() {
      localStorage.removeItem
      localStorage.removeItem("clientInfo");
      localStorage.removeItem("providerInfo");
      localStorage.removeItem("userid");
      localStorage.removeItem("usertype");
      localStorage.removeItem("jwt");
      localStorage.removeItem("invalidLogin");
      delete this.userType;
      window.location.reload();
    }
  }
  