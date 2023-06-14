import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-datos-lesionado',
  templateUrl: './datos-lesionado.component.html',
  styleUrls: ['./datos-lesionado.component.css'],
})
export class DatosLesionadoComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  @Input() lesionadoForm: any;

  ngOnInit() {
    console.log(this.lesionadoForm.value);
    // this.datosLesionado = this.fb.group({ nombre: [''] });
  }
}
