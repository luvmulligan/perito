import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hechos',
  templateUrl: './hechos.component.html',
  styleUrls: ['./hechos.component.css'],
})
export class HechosComponent implements OnInit {
  @Input() lesionadoId: any;
  @Input() informe: any;
  hechos: any;

  constructor(private fb: FormBuilder) {
    this.hechos = this.fb.group({ vehiculo: [''] });
  }

  ngOnInit() {
    this.informe.controls.lesionados.addControl(this.lesionadoId, this.hechos);
  }
}
