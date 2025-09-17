import { Routes } from '@angular/router';
import { ArViewComponent } from './ar-view/ar-view.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }, 
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'ar',
        component: ArViewComponent
    }

];
