import { Routes } from '@angular/router';
import { Presentation } from './presentation/presentation';
import { Resume } from './resume/resume';
import { Portafolio } from './portafolio/portafolio';
import { Comissions } from './comissions/comissions';
import { Contact } from './contact/contact';
import { Skills } from './skills/skills';

export const routes: Routes = [
    {path: '', component: Presentation},
    {path: 'resume', component: Resume},
    {path: 'skills', component: Skills},
    {path: 'portafolio', component: Portafolio},
    {path: 'comissions', component: Comissions},
    {path: 'contact', component: Contact}
];
