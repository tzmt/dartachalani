import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ElectronService } from 'ngx-electron';
import { Router, NavigationEnd } from '@angular/router';

import 'jquery';

const adbs: any = require('ad-bs-converter');
declare global {
  interface JQuery {
    nepaliDatePicker({ }): JQuery;
  }
}

interface chalaniListSchema{
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

interface chalani_with_dates {
  chalaniListSchema: {
    chalaniNo: number,
    chalaniDate: string,
    chalaniPages: number,
    chalaniPagesDate: string,
    chalaniDestName: string,
    chalaniDestAddress: string,
    chalaniHulakNo: string,
    chalaniSubject: string,
    chalaniRemarks: string
  },
  chalaniDate,
  chalaniPagesDate
};

@Component({
  selector: 'app-chalani',
  templateUrl: './chalani.component.html',
  styleUrls: ['./chalani.component.css']
})
export class ChalaniComponent implements OnInit {

  errAlert = "तपाइले दिएको विवरण मिलेन | कृपया ( * ) भएका ठाउँलाई सच्याउनुहोस् | ";
  star = "*";

  // Initialize ParsedData
  utsav: string = "Prabesh Chutiya";
  chalaniForm: FormGroup;
  navigationSubscription;
  dtOptions: any = {
    dom: "<'row'<'col-sm-3'l><'col-sm-6 text-center'B><'col-sm-3'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    select: true,
    buttons: [
      'excel',
      'copy',
    ]
  };
  flag: boolean = false;
  chalaniList: chalaniListSchema = null;
  parsedData: chalaniListSchema = {
    chalaniNo: 1, 
    chalaniDate: "a",
    chalaniPages: 1, 
    chalaniPagesDate: "a",
    chalaniDestName: "a", 
    chalaniDestAddress: "a",
    chalaniSubject: "a",
    chalaniHulakNo: "a",
    chalaniRemarks: "a"
  }
  _chalaniDate: any;

  constructor(private fb: FormBuilder, private _electron: ElectronService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    // Set default values and re-fetch any data you need.
    this.getChalani();
    setTimeout(function () {
    }, 400);
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  ngOnInit() {
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

    this.chalaniForm = this.fb.group({
      chalaniNo: 0,
      chalaniDate: convertedDate,
      chalaniPages: [0, Validators.compose([Validators.required, Validators.min(1), Validators.max(999)])],
      chalaniPagesDate: convertedDate,
      chalaniDestName: ['', Validators.required],
      chalaniDestAddress: ['', Validators.required],
      chalaniHulakNo: ['', Validators.required],
      chalaniSubject: ['', Validators.required],
      chalaniRemarks: ''
    })
    console.log(this.chalaniForm.controls);
    this.chalaniForm.valueChanges.subscribe(console.log);
  }

  getChalani() {
    this._electron.ipcRenderer.send('listChalani', 'listchalani');
    this._electron.ipcRenderer.on('chalaniListReceived', (event, arg) => {
      this.chalaniList = arg;
      this.parsedData = arg;
      this.flag = true;
    });
  }

  deleteChalani(data) {
    this._electron.ipcRenderer.send('deleteChalani', data);
    this._electron.ipcRenderer.on('chalaniDeleted', (event, arg) => {
      console.log("deleted chalani");
      // console.log(arg);
    });
    this.router.navigate(['chalani']);
  }

  editChalani(val) {
    var _dd, _dpd;
    _dd = jQuery("#chalaniDate").val();
    _dpd = jQuery("#chalaniPagesDate").val();
    var _val: chalani_with_dates = {
      chalaniListSchema: {
        chalaniNo: val.chalaniNo,
        chalaniDate: val.chalaniDate,
        chalaniPages: val.chalaniPages,
        chalaniPagesDate: val.chalaniPagesDate,
        chalaniDestName: val.chalaniDestName,
        chalaniDestAddress: val.chalaniDestAddress,
        chalaniSubject: val.chalaniSubject,
        chalaniHulakNo: val.chalaniHulakNo,
        chalaniRemarks: val.chalaniRemarks
      },
      chalaniDate: _dd,
      chalaniPagesDate: _dpd,
    }
    console.log("Hello from addchalani");
    console.log(_val);
    console.log("edit");
    console.log(val);
    this._electron.ipcRenderer.send('editChalani', _val);
    this._electron.ipcRenderer.on('chalaniEdited', (event, arg) => {
      console.log("edited chalani");
      // console.log(arg);
    });
    this.router.navigate(['chalani']);
  }

  dataParse(data) {
    jQuery('#chalaniDate').nepaliDatePicker({
      dateFormat: "%y-%m-%d",
      closeOnDateSelect: true
    });
    jQuery('#chalaniPagesDate').nepaliDatePicker({
      dateFormat: "%y-%m-%d",
      closeOnDateSelect: true
    });
    this.parsedData = data;
    // console.log(this.parsedData);
    this.chalaniForm.get('chalaniNo').setValue(this.parsedData.chalaniNo);
    this.chalaniForm.get('chalaniDate').setValue(this.parsedData.chalaniDate);
    this.chalaniForm.get('chalaniPages').setValue(this.parsedData.chalaniPages);
    this.chalaniForm.get('chalaniPagesDate').setValue(this.parsedData.chalaniPagesDate);
    this.chalaniForm.get('chalaniDestName').setValue(this.parsedData.chalaniDestName);
    this.chalaniForm.get('chalaniDestAddress').setValue(this.parsedData.chalaniDestAddress);
    this.chalaniForm.get('chalaniSubject').setValue(this.parsedData.chalaniSubject);
    this.chalaniForm.get('chalaniHulakNo').setValue(this.parsedData.chalaniHulakNo);
    this.chalaniForm.get('chalaniRemarks').setValue(this.parsedData.chalaniRemarks);
  }
}