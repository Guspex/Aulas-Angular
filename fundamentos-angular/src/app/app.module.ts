import { NgModule } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiplicaporPipe } from './multiplicapor.pipe';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { RenderListasComponent } from './render-listas/render-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicaporPipe,
    PipeCustomComponent,
    TwoWayComponent,
    RenderListasComponent,
    ComponentePersonalizadoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
