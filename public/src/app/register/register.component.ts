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
  error_messages: any = [];

  constructor(private _http: HttpService,
              private _router: Router) { }

  ngOnInit(): void {
    this.user = {name: "", username: "", password: ""}
  }

  registerUser() {
    this._http.registerThisUser(this.user).subscribe(data => {
      console.log("data",data)
      if (data['errors']) {
        console.log(data['errors'])
        this.error_messages.push(data['errors'])
      } else {
        this._router.navigate(["home"])
      }
    })
  }

}
