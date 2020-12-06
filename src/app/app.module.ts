import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MaterialModule,  } from './shared/material/material.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EncomendasComponent } from './encomendas/encomendas.component';
import { ProdutoComponent } from './produtos/produto.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReceitasComponent } from './receita/receita.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EncomendasComponent,
    ProdutoComponent,
    ReceitasComponent,
    ModalComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
