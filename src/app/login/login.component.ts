import { Component, OnInit } from '@angular/core';
declare var FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '162232362177643',
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
      FB.AppEvents.logPageView();
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  submitLogin() {
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        console.log("Successfull login");
        FB.api('/me/permissions ', function (response) {
          console.log(JSON.stringify(response));
        });
      }
      else {
        console.log('User login failed');
      }
    }, { scope: 'email' });
  }
}
