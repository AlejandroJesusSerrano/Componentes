import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsFormsModule } from './forms/students-forms/students-forms.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AsideComponent,
    HomeComponent,
    PageWrapperComponent,
    StudentsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
