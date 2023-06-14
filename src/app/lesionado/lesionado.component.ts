import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormDataService } from '../form-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lesionado',
  templateUrl: './lesionado.component.html',
  styleUrls: ['./lesionado.component.css'],
})
export class LesionadoComponent implements OnInit {
  @Output() mostrarInforme = new EventEmitter<boolean>();
  @Input() lesionadoId: any;
  @Input() informe: any;
  lesionadoForm: any;
  data: any;
  storage: any;
  currentLesionado: any;
  lesionados: any = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.lesionadoForm = this.fb.group({});
  }

  ngOnInit() {
    this.lesionadoForm = this.fb.group({ nombre: [''] });

    // this.storage = sessionStorage.getItem('FormData');

    // if (this.storage !== null) {
    //   this.data = JSON.parse(this.storage);
    //   if (this.data.lesionados[this.lesionadoId] === undefined) {
    //     console.log('hola por aca');
    //     this.lesionadoForm = this.fb.group({
    //       nombre: [''],
    //     });
    //   }
    //   if (this.data.lesionados[this.lesionadoId] !== undefined) {
    //     this.lesionadoForm = this.fb.group({
    //       nombre: [this.data.lesionados[this.lesionadoId].nombre],
    //     });
    //   }
    // } else {
    //   sessionStorage.clear();
    //   this.lesionadoForm = this.fb.group({
    //     nombre: [''],
    //   });
    // }
    // this.currentLesionado = this.data.lesionados[this.lesionadoId];
  }
  guardar() {
    console.log(this.lesionadoForm.value);

    this.informe.controls.lesionados.controls.push(this.lesionadoForm);
    this.informe.controls.lesionados.removeAt(this.lesionadoId);

    console.log(this.informe.value);
    sessionStorage.setItem('FormData', JSON.stringify(this.informe));
    // this.data.lesionados.push(this.lesionadoForm.value);
    // let lesionados = JSON.parse(this.lesionados);
    // lesionados.push(this.lesionadoForm.value);
    // let index = lesionados.indexOf(this.lesionadoId);
    // this.data.lesionados[this.lesionsadoId] = this.lesionadoForm.value;
    // let lesionadoValue = this.data.lesionados[this.lesionadoId];
    // this.data.lesionados.push({ lesionadoValue });
    // this.lesionados.push(lesionadoValue);
    // this.data.lesionados = this.lesionados;
    // sessionStorage.setItem('FormData', JSON.stringify(this.data));
    // this.mostrarInforme.emit(true);
  }

  volver() {
    // sessionStorage.setItem('FormData', JSON.stringify(this.data));

    this.mostrarInforme.emit(true);

    // this.router.navigate(['/informe']);
  }
}
