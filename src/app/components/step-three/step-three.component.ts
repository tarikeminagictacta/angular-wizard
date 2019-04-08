import { Component, forwardRef } from '@angular/core';

import { WizardStepService } from '../../wizzard/services/wizard-step.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: [],
  providers: [
    { provide: WizardStepService, useExisting: forwardRef(() => StepThreeComponent) }
  ]
})
export class StepThreeComponent implements WizardStepService {
  hidden = true;
  show(): void {
    this.hidden = false;
  }
  hide(): void {
    this.hidden = true;
  }
}
