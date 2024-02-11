import { ExternalRouterComponent } from './components/external-router/external-router.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';

export const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'about',
    component: AboutComponent,
  },
  {
    path:'careers',
    component: CareersComponent,
  },
  {
    path:'admin',
    component: ExternalRouterComponent,
  },
  {
    path:'contactus',
    component: ContactusComponent,
  },
  {
    path:'',redirectTo:'home', pathMatch:'full'
  },
  {
    path:'**',redirectTo:'home', pathMatch:'full'
  }
];
