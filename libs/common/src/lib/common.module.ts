import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

import en from './i18n/en.json';
import es from './i18n/es.json';
import { CommonComponent } from './common.component';

@NgModule({
  declarations: [CommonComponent],
  imports: [CommonModule, TranslocoModule],
  exports: [TranslocoModule, CommonComponent]
})
export class CommonsModule {
  constructor(private _translate: TranslocoService) {
    this._translate.setTranslation(
      {
        common: en
      },
      'en'
    );

    this._translate.setTranslation(
      {
        common: es
      },
      'es'
    );
  }
}
