import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public TITLE: String = 'Users';

  
  users = [
    {name: "Ricardo Sobjak", email: "234dfgs@asdfasdf"},
    {name: "Ricardo sdfsdf", email: "asdfaf4234ds@asdfasdf"},
    {name: "Ricardo sdf", email: "23423@adsddfasdf"},
    {name: "Ricardo sd", email: "asdfafdds@fsd323423"},
    {name: "Ricardo sdf", email: "d@asdfasdf"},
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
