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
  lesionadoForm: any;
  @Input() informe: any;
  @Output() emitForm = new EventEmitter<any>();

  // lesionadoForm: any;
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
  obj1 = { nombre: 'pepe' };
  obj2 = { edad: '20' };

  ngOnInit() {
    let newObj = { ...this.obj1, ...this.obj2 };
    // this.lesionadoForm = this.fb.group({ nombre: [''] });
    // this.storage = sessionStorage.getItem('FormData');
    // if (this.storage !== null) {
    //   this.data = JSON.parse(this.storage);
    //   if (this.data.lesionados[this.lesionadoId] === undefined) {
    //     this.lesionadoForm = this.fb.group({ nombre: [''] });
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
    // this.currentLesionado = this.informe.value;
  }
  guardar() {
    // this.emitForm.emit(this.informe);
    // sessionStorage.setItem('FormData', JSON.stringify(this.informe.value));
    console.log(this.informe.value);
  }

  volver() {
    // sessionStorage.setItem('FormData', JSON.stringify(this.data));

    this.mostrarInforme.emit(true);

    // this.router.navigate(['/informe']);
  }
}
