import {AfterViewInit, Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
  providers: [LoginService]
})
export class PagesTopComponent implements AfterViewInit {
  @Output()
  searchEvent = new EventEmitter<string>();
  
  
  avatarImgSrc: string = 'assets/images/avatar.png';
  arrowImage: string = 'assets/images/yellow-arrow.png';
  userName: string = 'Trouce';
  userPost: string = 'Búsqueda de servicios';
  askService = "";
  sidebarToggle: boolean = true;
  tip = {ring: true, email: true};
  isLoggedIn = false;
  userInfo: any;

  constructor(private _globalService: GlobalService,
    private router: Router,
    private loginService: LoginService
    ) {
  }

  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }

  searchService(){
    if (this.askService) {
      this.router.navigate(['/pages/index/search', {'searchString': this.askService}])
    }
  }

  ngAfterViewInit(): void {
    this.sidebarToggle = window.innerWidth >= 970;
    setTimeout(() => {
      this.isLoggedIn = this.loginService.isLogged();
      this.userInfo = this.loginService.getUserInfo();
    }, 500);
  }
}
