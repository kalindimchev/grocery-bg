import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private arePasswordsMatch = true;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log('register submit');
  }

}
