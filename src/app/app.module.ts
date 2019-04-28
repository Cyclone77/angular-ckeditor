import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { FormsModule } from '@angular/forms';
import { CkeditorPtComponent } from './ckeditor-pt/ckeditor-pt.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CkeditorComponent,
    CkeditorPtComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
