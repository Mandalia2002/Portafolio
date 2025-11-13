import { Routes } from '@angular/router';
import { Presentation } from './presentation/presentation';
import { Resume } from './resume/resume';
import { Portafolio } from './portafolio/portafolio';
import { Comissions } from './comissions/comissions';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path: '', component: Presentation},
    {path: 'resume', component: Resume},
    {path: 'portafolio', component: Portafolio},
    {path: 'comissions', component: Comissions},
    {path: 'contact', component: Contact}
];
