import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizzardComponent } from './components/wizzard/wizzard.component';
import { WizzardStepDirective } from './directives/wizzard-step.directive';
import { WizzardTemplateComponent } from './components/wizzard-template/wizzard-template.component';

@NgModule({
  declarations: [WizzardComponent, WizzardStepDirective, WizzardTemplateComponent],
  imports: [CommonModule],
  exports: [WizzardComponent, WizzardStepDirective, WizzardTemplateComponent]
})
export class WizzardModule {}
