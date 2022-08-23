import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { PrimeiraPaginaComponentComponent } from './primeira-pagina-component/primeira-pagina-component.component';
import { SegundapaginaComponent } from './segundapagina/segundapagina.component';

const routes: Routes = [
  { path: "Primeira-pagina", component: PrimeiraPaginaComponentComponent},
  { path: "segunda-pagina", component: SegundapaginaComponent},
  { path: "pagina-com-parametros/:id", component: PaginaComParametrosComponent},
  { path: "login", component: LoginComponent},
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  { path: "pagina-protegida", component: PaginaProtegidaComponent, canActivate: [AllGuard]},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
