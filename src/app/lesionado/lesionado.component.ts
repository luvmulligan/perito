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
  // @Output() mostrarInforme = new EventEmitter<boolean>();
  lesionadoForm: any;
  data: any;
  storage: any;
  currentLesionado: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private fb: FormBuilder
  ) {}
  lesionadoId: any;

  ngOnInit() {
    this.lesionadoForm = this.fb.group({
      nombre: [''],
    });
    this.lesionadoId = this.route.snapshot.params.id;
    this.storage = sessionStorage.getItem('FormData');
    if (this.storage !== null) {
      this.data = JSON.parse(this.storage);
    }
    this.currentLesionado = this.data.lesionados[this.lesionadoId - 1];
  }
  guardar() {
    this.currentLesionado = this.lesionadoForm.value;
    this.data.lesionados[this.lesionadoId - 1] = this.lesionadoForm.value;
  }

  volver() {
    this.router.navigate(['/informe']);
  }
}
