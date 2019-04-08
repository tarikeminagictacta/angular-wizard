import { Component, forwardRef } from '@angular/core';

import { WizardStepService } from '../../wizzard/services/wizard-step.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: [],
  providers: [
    { provide: WizardStepService, useExisting: forwardRef(() => StepOneComponent) }
  ]
})
export class StepOneComponent implements WizardStepService {
  hidden = true;
  show(): void {
    this.hidden = false;
  }
  hide(): void {
    this.hidden = true;
  }
}
