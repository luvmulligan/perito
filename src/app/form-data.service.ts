import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  form: BehaviorSubject<any> = new BehaviorSubject('');

  private formSource = new Subject();
  currentForm = this.formSource.asObservable();
  constructor(private fb: FormBuilder) {}
  changeData(currentForm: FormGroup) {
    this.formSource.next(currentForm);
  }
  formAsObs() {
    return this.form.asObservable();
  }

  updateForm(formGroup: FormGroup, newValue: any) {
    let form = this.form.value;

    this.form.next(form);
  }

  getFormValue() {
    return this.form.value.value;
  }

  resetForm() {
    let form = this.form.value;
    form.reset();
  }
  initForm(value: any = {}) {
    this.form.next(
      this.fb.group({
        // informe: this.fb.group({
        documento: [0, Validators.required],
        pedido: ['', Validators.required],
        solicitado: ['', Validators.required],
        solicito: ['', Validators.required],
        lesionados: this.fb.array([]),
        // }),
      })
    );
  }
}
