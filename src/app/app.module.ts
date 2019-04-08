import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { WizzardModule } from './wizzard/wizzard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, StepOneComponent, StepTwoComponent, StepThreeComponent],
  imports: [BrowserModule, NgbModule, WizzardModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
