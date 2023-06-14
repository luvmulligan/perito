import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hechos',
  templateUrl: './hechos.component.html',
  styleUrls: ['./hechos.component.css'],
})
export class HechosComponent implements OnInit {
  @Input() lesionadoForm: any;

  constructor() {}

  ngOnInit() {
    console.log(this.lesionadoForm.value);
  }
}
