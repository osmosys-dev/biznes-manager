import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'suppliers',
        pathMatch: 'full',
      },
      {
        path: 'suppliers',
        loadChildren: () =>
          import('../suppliers/suppliers.module').then(
            (m) => m.SuppliersPageModule
          ),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('../customers/customers.module').then(
            (m) => m.CustomersPageModule
          ),
      },
      {
        path: 'business',
        loadChildren: () =>
          import('../business/business.module').then(
            (m) => m.BusinessPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
