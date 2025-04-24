import { Routes } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { TabGroupComponent } from './tab-group/tab-group.component';

export const routes: Routes = [

  {
    path: 'simple',
    component: SimpleComponent,
  },
  { path: 'mat-group', component: TabGroupComponent },
];
