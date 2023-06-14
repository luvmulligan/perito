import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css'],
})
export class InformeComponent implements OnInit {
  informe: FormGroup;
  lesionados: any = [];
  selectedLesionado: any;
  currentForm: any;
  editarPressed: boolean = false;
  @Output() emitId = new EventEmitter<number>();
  @Input() lesionadoId: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.informe = this.fb.group({});
  }

  ngOnInit() {
    if (sessionStorage.getItem('FormData') !== null) {
      let storage = sessionStorage.getItem('FormData');
      if (storage !== null) {
        let form = JSON.parse(storage);
        this.informe = this.fb.group({
          documento: [form.documento, Validators.required],
          pedido: [form.pedido, Validators.required],
          solicitado: [form.solicitado, Validators.required],
          solicito: ['', Validators.required],
          lesionados: this.fb.array(form.lesionados),
        });
      }
    } else {
      sessionStorage.clear();
      this.informe = this.fb.group({
        documento: [0, Validators.required],
        pedido: ['', Validators.required],
        solicitado: ['', Validators.required],
        solicito: ['', Validators.required],
        lesionados: this.fb.array([]),
      });
      console.log(this.informe.controls.lesionados);
    }
  }
  onSelect(lesionado: any): void {
    this.selectedLesionado = lesionado;
  }
  cargarLesionado() {
    this.lesionados = this.informe.controls.lesionados as FormArray;
    this.lesionados.push(this.crearLesionado());
    this.guardarEnSessionStorage();
  }
  eliminar(i: number) {
    this.lesionados = this.informe.controls.lesionados as FormArray;
    this.lesionados.removeAt(i);
    this.guardarEnSessionStorage();
  }

  guardarEnSessionStorage() {
    let formValue = this.informe.value;
    formValue.lesionados = this.lesionados.value;
    sessionStorage.setItem('FormData', JSON.stringify(formValue));
  }
  crearLesionado(): FormGroup {
    return new FormGroup({});
  }
  editar(i: any) {
    this.editarPressed = true;
    this.emitId.emit(i);
    // this.router.navigate(['/lesionado', i]);
  }
  mostrarInforme() {
    this.editarPressed = false;
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.form.value);
  }
}
