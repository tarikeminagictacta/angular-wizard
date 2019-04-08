import { Directive, Input } from '@angular/core';
import { WizardStepService } from '../services/wizard-step.service';

@Directive({
  selector: '[appWizzardStep]'
})
export class WizzardStepDirective {
  @Input() stepName: string;
  @Input() stepId: string = Math.random().toString(36).replace('0.', '');
  @Input() disabled = false;

  nextId: string;
  previousId: string;

  constructor(public host: WizardStepService) { }

}
