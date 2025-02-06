import { Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { AboutComponent } from './admin/about/about.component';
import { WorksComponent } from './admin/works/works.component';
import { ContactComponent } from './admin/contact/contact.component';

export const routes: Routes = [
    {path : 'home', component : HomeComponent, pathMatch: 'full'},
    {path : 'about', component : AboutComponent},
    {path : 'works', component : WorksComponent},
    {path : 'contact', component : ContactComponent},
];