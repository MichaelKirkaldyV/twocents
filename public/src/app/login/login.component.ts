import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  session_id: string;
  token: string = "Acess_token"
  session: any

  constructor(private _http: HttpService,
              private _router: Router) { }

  ngOnInit(): void {
    this.user = {name: "", username: "", password: ""}
  }

  loginUser() {
    this._http.loginThisUser(this.user).subscribe(data => {
      localStorage.setItem(this.token, JSON.stringify(data))
      this.session = localStorage.getItem(this.token)
      this._router.navigate(['dashboard/', this.session])
    })
  }

}
