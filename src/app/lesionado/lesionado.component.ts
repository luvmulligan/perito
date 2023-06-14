import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  lesionadoForm: any;
  data: any;
  storage: any;
  currentLesionado: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.lesionadoForm = this.fb.group({});
  }
  lesionadoId: any;

  ngOnInit() {
    this.storage = sessionStorage.getItem('FormData');
    if (this.storage !== null) {
      this.data = JSON.parse(this.storage);
      this.lesionadoId = this.data.lesionados[0];
      this.lesionadoForm = this.fb.group({
        nombre: [this.data.lesionados[this.lesionadoId].nombre],
      });
    } else {
      sessionStorage.clear();
      this.lesionadoForm = this.fb.group({
        nombre: [''],
      });
    }
    this.currentLesionado = this.data.lesionados[this.lesionadoId];
  }
  guardar() {
    this.currentLesionado = this.lesionadoForm.value;
    this.data.lesionados[this.lesionadoId] = this.lesionadoForm.value;
    console.log(this.data);
    sessionStorage.setItem('FormData', JSON.stringify(this.data));
    this.mostrarInforme.emit(true);
  }

  volver() {
    sessionStorage.setItem('FormData', JSON.stringify(this.data));
    this.mostrarInforme.emit(true);

    // this.router.navigate(['/informe']);
  }
}
