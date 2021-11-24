import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    });
  }

  public save() {
    console.log(this.form);

    const user = {
      first_name: this.form.value.firstName,
      last_name: this.form.value.lastName,
      email: this.form.value.email // this.form.controls.email.value
    };

    this.userService.create(user).subscribe( (result) => { 
      console.log(result);
      alert("Usuário salvo com sucesso!");
      this.router.navigate(['app/user']);
    } );

  }
}
