import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElectronService } from 'ngx-electron';
import { Router } from '@angular/router';
import 'jquery';
const adbs: any = require('ad-bs-converter');

declare global {
  interface JQuery {
    nepaliDatePicker({ }): JQuery;
  }
}

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
  selector: 'app-add-chalani',
  templateUrl: './add-chalani.component.html',
  styleUrls: ['./add-chalani.component.css']
})
export class AddChalaniComponent implements OnInit {
  errAlert = "तपाइले दिएको विवरण मिलेन | कृपया ( * ) भएका ठाउँलाई सच्याउनुहोस् | ";
  star = "*";
  chalaniForm: FormGroup;
  _chalaniDate: any;

  constructor(private fb: FormBuilder, private _electron: ElectronService, private router: Router) {

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


  addChalani(val) {
    var _dd, _ddd, _dpd;
    _dd = jQuery("#chalaniDate").val();
    _ddd = jQuery("#chalaniDeptDate").val();
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
    this._electron.ipcRenderer.send('newChalani', _val);
    this._electron.ipcRenderer.on('success', (event, arg) => {
      console.log(arg);
    })
    this.chalaniForm.reset();
    this.router.navigate(['chalani']);
  }

  ngOnInit() {
    jQuery('#chalaniDate').nepaliDatePicker({
      dateFormat: "%y-%m-%d",
      closeOnDateSelect: true
    });
    jQuery('#chalaniPagesDate').nepaliDatePicker({
      dateFormat: "%y-%m-%d",
      closeOnDateSelect: true
    });
  }
}