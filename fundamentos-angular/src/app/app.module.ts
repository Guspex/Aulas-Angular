import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaporPipe } from './multiplicapor.pipe';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    SegundoComponenteComponent,
    MultiplicaporPipe,
    PipeCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
