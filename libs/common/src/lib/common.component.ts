import { Component } from '@angular/core';

@Component({
  selector: 'transloco-with-libs-common',
  template: `
    <p>Inside common component {{ 'common.required' | transloco }}</p>
  `
})
export class CommonComponent {}
