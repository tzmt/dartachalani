import { Component, OnInit,OnChanges,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ElectronService } from 'ngx-electron';
import { FetchDartaService } from '../fetch-darta.service';
import { Router, NavigationEnd  } from '@angular/router';

import 'jquery';

const adbs: any = require('ad-bs-converter');

declare global {
  interface JQuery {
    nepaliDatePicker({ }): JQuery;
  }
}

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

interface darta_with_dates {
  dartaListSchema: {
    dartaNo: number,
    dartaDate: string,
    dartaPages: number,
    dartaPagesDate: string,
    dartaAddress: string,
    dartaSubject: string,
    dartaDeptName: string,
    dartaDeptDate: string,
    dartaRemarks: string
  },
  dartaDate,
  dartaPagesDate,
  dartaDeptDate
};

// let abc = {
//   dartaNo: 1, dartaDate: "a", dartaPages: 1, dartaPagesDate:"a", dartaAddress:"a", dartaSubject:"a", dartaDeptName:"a", dartaDeptDate:"a",dartaRemarks: "a"
// }

@Component({
  selector: 'app-darta',
  templateUrl: './darta.component.html',
  styleUrls: ['./darta.component.css'],
  providers:[FetchDartaService]
})

export class DartaComponent implements OnInit,OnDestroy {
  
  errAlert = "तपाइले दिएको विवरण मिलेन | कृपया ( * ) भएका ठाउँलाई सच्याउनुहोस् | ";
  star = "*";

  // Initialize ParsedData
  utsav: string = "Prabesh Chutiya";
  dartaForm: FormGroup;
  navigationSubscription;
  dtOptions: any = {
    dom: "<'row'<'col-sm-3'l><'col-sm-6 text-center'B><'col-sm-3'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    select: true,
    buttons: [
      'excel',
      'copy',
    ],
    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
  };
  flag:boolean = false;
  dartaList: dartaListSchema = null;
  parsedData:dartaListSchema = {
    dartaNo: 1, dartaDate: "a", 
    dartaPages: 1, dartaPagesDate: "a", 
    dartaAddress: "a", dartaSubject: "a", 
    dartaDeptName: "a", dartaDeptDate: "a", 
    dartaRemarks: "a"
  }
  _dartaDate: any;

  constructor(private fb: FormBuilder, private _electron: ElectronService, private fetchDarta: FetchDartaService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
        // Set default values and re-fetch any data you need.
    this.getDarta();
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
    this.getDarta();
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

    this.dartaForm = this.fb.group({
      dartaNo: 0,
      dartaDate: convertedDate,
      dartaPages: [0, Validators.compose([Validators.required, Validators.min(1), Validators.max(999)])],
      dartaPagesDate: convertedDate,
      dartaAddress: ['', Validators.required],
      dartaSubject: ['', Validators.required],
      dartaDeptName: ['', Validators.required],
      dartaDeptDate: convertedDate,
      dartaRemarks: '',
    })
    console.log(this.dartaForm.controls);
    this.dartaForm.valueChanges.subscribe(console.log);
  }

  getDarta(){
    this._electron.ipcRenderer.send('listDarta', 'listDarta'); 
    this._electron.ipcRenderer.on('dartaListReceived', (event, arg) => {
        this.dartaList = arg;
        this.parsedData = arg;
        this.flag = true;
    });
  }

  deleteDarta(){
    this._electron.ipcRenderer.send('deleteDarta', this.parsedData);
    this._electron.ipcRenderer.on('dartaDeleted',(event, arg)=>{
      console.log("deleted Darta");
      // console.log(arg);
    });
    this.router.navigate(['darta']);
  }
  
  editDarta(val){
    var _dd1, _ddd1, _dpd1;
    _dd1 = jQuery("#dartaDateEdit").val();
    _ddd1 = jQuery("#dartaDeptDateEdit").val();
    _dpd1 = jQuery("#dartaPagesDateEdit").val();
    console.log("Values from jquery");
    console.log(_dd1);
    console.log(_ddd1);
    console.log(_dpd1);
    var _val: darta_with_dates = {
      dartaListSchema: {
        dartaNo: val.dartaNo,
        dartaDate: val.dartaDate,
        dartaPages: val.dartaPages,
        dartaPagesDate: val.dartaPagesDate,
        dartaAddress: val.dartaAddress,
        dartaSubject: val.dartaSubject,
        dartaDeptName: val.dartaDeptName,
        dartaDeptDate: val.dartaDeptDate,
        dartaRemarks: val.dartaRemarks
      },
      dartaDate: _dd1,
      dartaPagesDate: _dpd1,
      dartaDeptDate: _ddd1,
    }
    console.log("Hello from addDarta");
    console.log(_val);
    console.log("edit");
    console.log(val);
    this._electron.ipcRenderer.send('editDarta', _val);
    this._electron.ipcRenderer.on('dartaEdited', (event, arg) => {
      console.log("edited Darta");
      // console.log(arg);
    });
    this.router.navigate(['darta']);
  }

  dataParse(data){
    jQuery('#dartaDateEdit').nepaliDatePicker({
      dateFormat: "%y-%m-%d",
      closeOnDateSelect: true
    });
    jQuery('#dartaPagesDateEdit').nepaliDatePicker({
      dateFormat: "%y-%m-%d",
      closeOnDateSelect: true
    });
    jQuery('#dartaDeptDateEdit').nepaliDatePicker({
      dateFormat: "%y-%m-%d",
      closeOnDateSelect: true
    });
      this.parsedData = data;
      // console.log(this.parsedData);
      this.dartaForm.get('dartaNo').setValue(this.parsedData.dartaNo);
      this.dartaForm.get('dartaDate').setValue(this.parsedData.dartaDate);
      this.dartaForm.get('dartaPages').setValue(this.parsedData.dartaPages);
      this.dartaForm.get('dartaPagesDate').setValue(this.parsedData.dartaPagesDate);
      this.dartaForm.get('dartaAddress').setValue(this.parsedData.dartaAddress);
      this.dartaForm.get('dartaSubject').setValue(this.parsedData.dartaSubject);
      this.dartaForm.get('dartaDeptName').setValue(this.parsedData.dartaDeptName);
      this.dartaForm.get('dartaDeptDate').setValue(this.parsedData.dartaDeptDate);
      this.dartaForm.get('dartaRemarks').setValue(this.parsedData.dartaRemarks);
  }
}