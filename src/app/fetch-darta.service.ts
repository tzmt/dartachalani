import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable, of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class FetchDartaService {

  constructor(private _electron: ElectronService) { 
    this._electron.ipcRenderer.send('listDarta', 'listDarta');
  }

  fetchdata(){
   
    return new Promise(function(resolve, reject){
      this._electron.ipcRenderer.on('dartaListReceived', (event, arg) => {
        resolve (arg);
      });
    })
  }
}
