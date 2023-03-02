import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact.page',
  templateUrl: './contact.page.component.html',
  styleUrls: ['./contact.page.component.css'],

})
export class ContactPageComponent implements OnInit {
  numero = 0;
  binding = null;
  ngOnInit(): void {
    this.numero = 0;
  }


  clickMe() {
    this.numero++;
  }
}
