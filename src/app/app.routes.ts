import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route (Home)
    { path: 'contact', component: ContactComponent },
    {path:'experience', component:ExperienceComponent},
    { path: 'project', component: ProjectComponent },
    { path: 'about', component: AboutMeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown routes to Home
];
