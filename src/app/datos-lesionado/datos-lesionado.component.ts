import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-datos-lesionado',
  templateUrl: './datos-lesionado.component.html',
  styleUrls: ['./datos-lesionado.component.css'],
})
export class DatosLesionadoComponent implements OnInit {
  @Input() lesionadoForm: any;
  @Input() lesionadoId: any;
  @Input() informe: any;
  nombre: any;

  datosLesionado: any;
  storage: any;
  data: any;
  constructor(private fb: FormBuilder) {
    this.datosLesionado = this.fb.group({ nombre: [''] });
    this.nombre = new FormControl('');
  }

  ngOnInit() {
    // this.storage = sessionStorage.getItem('FormData');
    // if (this.storage !== null) {
    //   this.data = JSON.parse(this.storage);
    //   console.log();
    //   let lesionadoData = this.data.lesionados[this.lesionadoId];
    //   this.datosLesionado.setValue({
    //     nombre: [lesionadoData.nombre],
    //   });
    // } else {
    //   this.datosLesionado = this.fb.group({ nombre: [''] });
    // }
  }
  guardar() {
    this.informe.controls.lesionados.controls[this.lesionadoId].addControl(
      'nombre',
      this.nombre
    );
    // this.lesionadoForm.setValue({
    //   nombre: this.datosLesionado.controls.nombre.value,
    // });
    // console.log(this.datosLesionado.value);
    // // this.informe.value.lesionados.push(this.datosLesionado.value);
    // this.informe.controls.lesionados.controls.push(this.datosLesionado.value);
    // // this.informe.controls.lesionados.removeAt(this.lesionadoId);
    // // this.informe.value.lesionados.splice(1, this.lesionadoId);
    // console.log(this.informe.value);
    // sessionStorage.setItem('FormData', JSON.stringify(this.informe.value));
  }
}
