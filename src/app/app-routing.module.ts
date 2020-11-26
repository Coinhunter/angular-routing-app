import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// First level
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

// Second level components
import { FirstFirstComponent } from './first-first/first-first.component';
import { SecondFirstComponent } from './second-first/second-first.component';

import { FirstSecondComponent } from './first-second/first-second.component';
import { SecondSecondComponent } from './second-second/second-second.component';

// Third level components
import { FirstSecondSecondComponent } from './first-second-second/first-second-second.component';
import { SecondSecondSecondComponent } from './second-second-second/second-second-second.component';

const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
    data: {
      breadcrumb: '1-Component',
    },
    children: [
      {
        path: 'first-first-component',
        component: FirstFirstComponent,
        data: {
          breadcrumb: '1-1-Component',
        },
      },
      {
        path: 'second-first-component',
        component: SecondFirstComponent,
        data: {
          breadcrumb: '1-2-Component',
        },
      },
    ],
  },
  {
    path: 'second-component',
    component: SecondComponent,
    data: {
      breadcrumb: '2-Component',
    },
    children: [
      {
        path: 'first-second-component',
        component: FirstSecondComponent,
        data: {
          breadcrumb: '2-1-Component',
        },
      },
      {
        path: 'second-second-component',
        component: SecondSecondComponent,
        data: {
          breadcrumb: '2-2-Component',
        },
        children: [
          {
            path: 'first-second-second-component',
            component: FirstSecondSecondComponent,
            data: {
              breadcrumb: '2-2-1-Component',
            },
          },
          {
            path: 'second-second-second-component',
            component: SecondSecondSecondComponent,
            data: {
              breadcrumb: '2-2-2-Component',
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
