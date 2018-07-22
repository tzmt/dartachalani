import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import 'jquery';

interface userListSchema{
  username : string,
  password: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _username;
  _password;
  _oldpassword;
  _newpassword1;
  _newpassword2;
  _oldusername;
  errAlert= "Username or Password Invalid. Please try again!";
  errAlertPass = "Incorrect old password and/or new passwords did not match.";
  title = 'app';
  userList;
  flag: boolean = false;  
  loginFlag: boolean = false;
  changePasswordFlag:boolean = false;
  toggleClassLogIn(){
    $('#pre-login').addClass('hide');
    $('#post-login').removeClass('hide');
    $('#changePassword').addClass('hide');
    console.log("Login valid");
    this.loginFlag = false;
    this.changePasswordFlag = false;
    

  }
  toggleClassLogOut(){
    $('#pre-login').removeClass('hide');
    $('#post-login').addClass('hide');
    $('#changePassword').addClass('hide');
    console.log("Logged Out");
    this.loginFlag = false;
  }
  togglePasswordChange(){
    $('#pre-login').addClass('hide');
    $('#post-login').addClass('hide');
    $('#changePassword').removeClass('hide');
  }
  
  onSignIn(){
    let i;
    // $('#pre-login').toggleClass('hide');
    // $('#post-login').toggleClass('hide');
    for (i in this.userList) {
      if (this._username === this.userList[i].username && this._password === this.userList[i].password) {
        this.toggleClassLogIn();
        $("loginForm").trigger("reset");
        return false;
      }
      else
        console.log("Login invalid");
        this.loginFlag = true;
    }
  }

  constructor(private _electron: ElectronService){

  }
  
  ngOnInit(){
    this.getUsers();
    setTimeout(function () {
      console.log("abcd" + this.flag);
    }, 400); 
  }

  getUsers(){
    this._electron.ipcRenderer.send('listUsers', 'listUsers');
    this._electron.ipcRenderer.on('usersListReceived', (event, arg) => {
      this.userList = arg;
      console.log(this.userList);
      this.flag = true;
    }); 
  }

  logOut(){
    this.getUsers();
    setTimeout(function () {
      console.log("abcd" + this.flag);
    }, 400);
    this.toggleClassLogOut();
    this.loginFlag = false;
    this.changePasswordFlag = false;
  }

  changePassword() {
    for (let i in this.userList) {
      if (this._oldusername === this.userList[i].username && this._oldpassword === this.userList[i].password && this._newpassword1 === this._newpassword2) {
        this._electron.ipcRenderer.send('updatePassword', this._newpassword1);
        this.logOut();

      }
      else {
        console.log("Incorrect old password and/or new passwords did not match.");
        this.changePasswordFlag = true;
      }
    }
  }
}