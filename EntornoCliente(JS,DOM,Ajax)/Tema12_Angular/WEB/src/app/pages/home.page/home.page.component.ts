import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home.page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.css'],
})
export class HomePageComponent implements OnInit {
  hack = new String("Hola");
  data = new Array();
  ngOnInit(): void {
    this.hack = "UnDosTres";
    this.data = ["empty", "dos", "tres"];
  }

}
