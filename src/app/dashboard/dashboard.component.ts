import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ElectronService } from 'ngx-electron';
import { Router, NavigationEnd } from '@angular/router';

import 'jquery';

const adbs: any = require('ad-bs-converter');

interface dartaListSchema {
  dartaNo: number,
  dartaDate: string,
  dartaPages: number,
  dartaPagesDate: string,
  dartaAddress: string,
  dartaSubject: string,
  dartaDeptName: string,
  dartaDeptDate: string,
  dartaRemarks: string
};

interface chalaniListSchema {
  chalaniNo: number,
  chalaniDate: string,
  chalaniPages: number,
  chalaniPagesDate: string,
  chalaniDestName: string,
  chalaniDestAddress: string,
  chalaniHulakNo: string,
  chalaniSubject: string,
  chalaniRemarks: string
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dtOptions: any = {
    "dom": "<'myfilter'f><'mylength'l>t",
    "select": false,
    "pageLength":5,
    "lengthMenu": [5],
    "ordering": false,
    "buttons": [
    ]
  };
  flag: boolean = false;
  chalaniList: chalaniListSchema;
  dartaList: dartaListSchema = null;  
  constructor(private fb: FormBuilder, private _electron: ElectronService, private router: Router) {
  }

  ngOnInit() {
    this.getDarta();
    this.getChalani();
    setTimeout(function () {
    }, 400);
    let d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let YY = d.getFullYear();
    let MM = (month < 10 ? '0' : '') + month;
    let DD = (day < 10 ? '0' : '') + day;
    let date = adbs.ad2bs(`${YY}/${MM}/${DD}`);
    let convertedDate = `${date.en.year}-${date.en.month}-${date.en.day}`; 
  }

  getDarta() {
    this._electron.ipcRenderer.send('listDarta', 'listDarta');
    this._electron.ipcRenderer.on('dartaListReceived', (event, arg) => {
      this.dartaList = arg;
      this.flag = true;
    });
  }

  getChalani() {
    this._electron.ipcRenderer.send('listChalani', 'listchalani');
    this._electron.ipcRenderer.on('chalaniListReceived', (event, arg) => {
      this.chalaniList = arg;
      this.flag = true;
    });
  }
}