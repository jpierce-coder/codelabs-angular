import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwComponent } from './child-tw/child-tw.component';
import { ChildThreeComponent } from './child-three/child-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwComponent,
    ChildThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
