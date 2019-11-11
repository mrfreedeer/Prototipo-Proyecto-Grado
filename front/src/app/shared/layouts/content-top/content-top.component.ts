import { Component, ViewChild, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Modal } from 'ngx-modal';

@Component({
  selector: 'content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss']
})
export class ContentTopComponent implements OnInit {
  @ViewChild('tutorialModal') tutorialModal: Modal;

  routeTitle;

  searchSrc = "assets/images/search.png";
  searchResultSrc = "assets/images/searchresult.png";
  registerSrc1 = "assets/images/reg1.png";
  registerSrc2 = "assets/images/reg2.png";
  firstTime: string;

  constructor(public _globalService: GlobalService) {
    this.getRouteTitle();
  }

  ngOnInit() {
    this.firstTime = localStorage.getItem("first_time");
    if(!this.firstTime) {
      this.tutorialModal.open();
      localStorage.setItem("first_time","1");
    }
  }

  private getRouteTitle() {
    /* this._globalService.isActived$.subscribe(isActived => {
      this.routeTitle = isActived.title;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'isActived') {
        this.routeTitle = data.value.title;
      }
    }, error => {
      console.log('Error: ' + error);
    });
  }

  returnHome() {
    //    this._globalService._isActived({ title: 'Dashboard' });
    this._globalService.dataBusChanged('isActived', { title: 'Dashboard' });
  }

  openModal(modal: Modal) {
    modal.open();
  }

  closeModal(modal: Modal) {
    modal.close();
  }
}
