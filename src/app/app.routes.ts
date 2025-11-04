import { Routes } from '@angular/router';
import { CertificadosComponent } from './pages/certificados/certificados';
import { CertificadoFormComponent } from './pages/certificado-form/certificado-form';
import { CertificadoComponent } from './pages/certificado/certificado';

export const routes: Routes = [
  {
    path: "",
    component: CertificadosComponent,
  },
  {
    path: 'certificados/novo',
    component: CertificadoFormComponent,
  },
  {
    path: 'certificados/:id',
    component: CertificadoComponent
  }

];
