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
  constructor() {}
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }
  getId(event: any) {
    this.currentLesionadoId = event;
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
