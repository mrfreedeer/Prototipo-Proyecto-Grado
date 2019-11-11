import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';
import { Router } from '@angular/router';
import { Globals } from '../../shared/global';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService, Globals]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;
  invalidLogin : boolean = this.globals.invalidLogin;


  public AnimationBarOption;

  constructor(
    private _chartsService: ChartsService,
    private router: Router,
    private globals: Globals) { }

  ngOnInit() {
    this.router.navigate(['/pages/index/ini']);
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
  }
}
