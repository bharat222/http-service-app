import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myusers = [];

  constructor(private myUserServe: UserService) { }

  ngOnInit() {
    return this.myUserServe.getallUsers()
      .subscribe(result =>
        // console.log(result)
        this.myusers = result
      )
  }
}
