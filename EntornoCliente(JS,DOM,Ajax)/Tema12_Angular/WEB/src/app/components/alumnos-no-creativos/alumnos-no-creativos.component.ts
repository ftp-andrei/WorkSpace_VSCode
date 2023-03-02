import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos-no-creativos',
  templateUrl: './alumnos-no-creativos.component.html',
  styleUrls: ['./alumnos-no-creativos.component.css']
})
export class AlumnosNoCreativosComponent implements OnInit, OnDestroy {

  value = "no funciona";
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
    this.value = "dos";
  }
}
