import { Component, forwardRef } from '@angular/core';

import { WizardStepService } from '../../services/wizard-step.service';

@Component({
  selector: 'app-wizzard-template',
  templateUrl: './wizzard-template.component.html',
  styleUrls: ['./wizzard-template.component.scss'],
  providers: [
    { provide: WizardStepService, useExisting: forwardRef(() => WizzardTemplateComponent) }
  ]
})
export class WizzardTemplateComponent implements WizardStepService {
  hidden = true;
  show(): void {
    this.hidden = false;
  }
  hide(): void {
    this.hidden = true;
  }
}
