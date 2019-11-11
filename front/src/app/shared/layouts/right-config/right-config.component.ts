import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserTypeEnum } from '../../enums/UserType.enum';

@Component({
  selector: 'right-config',
  templateUrl: './right-config.component.html',
  styleUrls: ['./right-config.component.scss'],
  providers: [LoginService]
})
export class RightConfigComponent implements OnInit {
  
  searchString: string;
  isConfigToggle: boolean = false;
  askService: any;
  isLogged: boolean;
  userInfo: any;
  userType: number;
  userTypeEnum = UserTypeEnum;


  constructor(
    private _globalService: GlobalService,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.isLogged = this.loginService.isLogged();
    this.userInfo = this.loginService.getUserInfo();     
    this.userType = +this.loginService.userType;
   }

  searchService(){
    if (this.askService) {
      this.router.navigate(['/pages/index/search', {'searchString': this.askService}])
      this.isConfigToggle = false; 
    }
  }

  configToggle() {
    this.isConfigToggle = !this.isConfigToggle;
    //this._globalService._sidebarToggleState(!this.isConfigToggle);
    this._globalService.dataBusChanged('sidebarToggle', !this.isConfigToggle);
  }

  logOut() {
    this.loginService.logOut();
  }
}
