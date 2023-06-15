import { Component } from '@angular/core';
import { FormDataService } from './form-data.service';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mostrarInforme: boolean = true;
  currentLesionadoId: any;
  formData: any;
  constructor(private formDataService: FormDataService) {
    this.formDataService.initForm();
  }
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }
  getId(event: any) {
    this.currentLesionadoId = event;
    console.log(this.currentLesionadoId);
  }
  getForm(event: any) {
    this.formData = event;
    console.log(this.formData);
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
