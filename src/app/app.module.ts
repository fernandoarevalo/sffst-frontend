import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { PolizaComponent } from './polizas/poliza.component';
import { ConfigService } from "./config/config.service";
import { PolizaService } from "./polizas/poliza.service";

@NgModule({
  declarations: [
    AppComponent,
    PolizaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfigService,
    PolizaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
