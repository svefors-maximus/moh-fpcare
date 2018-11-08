import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {
  REGISTRATION_PATH,
  REGISTRATION_STATUS_PATH,
  REPRINT_LETTERS_PATH,
  STANDALONE_CALCULATOR
} from './models/route-paths.constants';


const routes: Routes = [


  // ----- New Routes
  {
    path: '',
    component: HomePageComponent,
    data: { breadcrumb: 'Home'}
  },
  {
    path: 'demo',
    component: DemoPageComponent,
    data: {
      breadcrumb: 'Demo'
    }
  },

  // Lazy loading modules below
  {
    path: REGISTRATION_PATH,
    loadChildren: 'app/modules/registration/registration.module#RegistrationModule'
  },
  {
    path: REGISTRATION_STATUS_PATH,
    loadChildren: 'app/modules/registration-status/registration-status.module#RegistrationStatusModule'
  },
  {
    path: REPRINT_LETTERS_PATH,
    loadChildren: 'app/modules/reprint-letters/reprint-letters.module#ReprintLettersModule'
  },
  {
    path: STANDALONE_CALCULATOR,
    loadChildren: 'app/modules/financial-calculator/standalone-calculator-page/standalone-calculator-page.module#StandaloneCalculatorPageModule'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
