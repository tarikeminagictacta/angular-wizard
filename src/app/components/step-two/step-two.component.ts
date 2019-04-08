import { Component, forwardRef } from '@angular/core';

import { WizardStepService } from '../../wizzard/services/wizard-step.service';


@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: [],
  providers: [
    { provide: WizardStepService, useExisting: forwardRef(() => StepTwoComponent) }
  ]
})
export class StepTwoComponent implements WizardStepService {
  hidden = true;
  show(): void {
    this.hidden = false;
  }
  hide(): void {
    this.hidden = true;
  }
}
