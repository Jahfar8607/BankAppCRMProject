import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add FormsModule for ngModel binding
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component'; // Import LoginComponent

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, // Add LoginComponent to declarations
  ],
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule for two-way data binding with ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
