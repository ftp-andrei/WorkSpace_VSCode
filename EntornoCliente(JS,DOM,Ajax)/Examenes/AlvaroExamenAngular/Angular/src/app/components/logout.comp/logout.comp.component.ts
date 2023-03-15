import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-logout-comp',
  templateUrl: './logout.comp.component.html',
  styleUrls: ['./logout.comp.component.css']
})
export class LogoutCompComponent implements OnInit{

  constructor(private localStorage: LocalStorageService){};

  ngOnInit(): void {
    this.localStorage.removeData('tokenjwt');
    this.localStorage.clearData();
  }
}
