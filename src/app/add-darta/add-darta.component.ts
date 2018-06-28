import { Component, OnInit,OnChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ElectronService} from 'ngx-electron';
import { Router } from '@angular/router';
import 'jquery';
const adbs: any = require('ad-bs-converter');


declare global {
  interface JQuery {
    nepaliDatePicker({}): JQuery;
  }
}
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

@Component({
  selector: 'app-add-darta',
  templateUrl: './add-darta.component.html',
  styleUrls: ['./add-darta.component.css']
})



export class AddDartaComponent implements OnInit {

  errAlert = "तपाइले दिएको विवरण मिलेन | कृपया ( * ) भएका ठाउँलाई सच्याउनुहोस् | ";
  star = "*";
  dartaForm : FormGroup;
  _dartaDate:any;
  
  constructor( private fb: FormBuilder, private _electron: ElectronService, private router: Router ) {
    
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
      dartaPages: [0,Validators.compose([Validators.required, Validators.min(1), Validators.max(999)])],
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

  
   addDarta(val){
    var _dd, _ddd, _dpd;
    _dd = jQuery("#dartaDate").val();
    _ddd = jQuery("#dartaDeptDate").val();
    _dpd = jQuery("#dartaPagesDate").val();
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
      dartaDate: _dd,
      dartaPagesDate: _dpd,
      dartaDeptDate: _ddd,
    }
    console.log("Hello from addDarta");
    console.log(_val);
    this._electron.ipcRenderer.send('newDarta', _val);
    this._electron.ipcRenderer.on('success', (event, arg) => {
      console.log(arg);
    })
    this.dartaForm.reset();
    this.router.navigate(['darta']);
  }

  ngOnInit() {
    jQuery('#dartaDate').nepaliDatePicker({
      dateFormat: "%y-%m-%d",
      closeOnDateSelect: true
    });
    jQuery('#dartaPagesDate').nepaliDatePicker({
      dateFormat: "%y-%m-%d",
      closeOnDateSelect: true
    });
    jQuery('#dartaDeptDate').nepaliDatePicker({
      dateFormat: "%y-%m-%d",
      closeOnDateSelect: true
    });
  }
}