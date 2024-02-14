import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users?: User[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<User[]>(`http://localhost:8082/users`).subscribe({
      next: data =>  this.users = data,
      error: err=> console.log(err)
    })
  }

}
