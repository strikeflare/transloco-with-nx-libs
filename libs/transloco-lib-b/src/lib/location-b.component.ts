import { Component, OnInit } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { scopeLoader } from 'scoped-translations';

@Component({
  selector: 'transloco-with-libs-b',
  template: `
    <ng-container *transloco="let t">
      <p>where am I? {{ t('compB.gpsb') }}</p>
    </ng-container>

    <!-- newly added -->
    <p>Inside lib-b: {{ 'common.required' | transloco }}</p>
    <ng-container *transloco="let t">
      <p>Inside lib-b: {{ t('common.required') }}</p>
    </ng-container>

    <!-- common component added -->
    <transloco-with-libs-common></transloco-with-libs-common>
  `,
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'compB',
        loader: scopeLoader((lang, root) => import(`./${root}/${lang}.json`))
      }
    }
  ]
})
export class LocationBComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
