import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any;

  constructor(private _http: HttpService,
              private _router: Router) { }

  ngOnInit(): void {
    this.user = {name: "", username: "", password: ""}
  }

  registerUser() {
    console.log("User passed-", this.user)
    this._http.registerThisUser(this.user).subscribe(data => {
      console.log("User has been registered!", data)
      this._router.navigate(["home"])
    })
  }

}
