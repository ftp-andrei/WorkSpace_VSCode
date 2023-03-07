import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Input() title: string = 'Login';

  login = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,private route: Router) {

  }
  ngOnInit(): void {}

  onSubmit() {
      this.route.navigateByUrl("/productos");
  }

}
