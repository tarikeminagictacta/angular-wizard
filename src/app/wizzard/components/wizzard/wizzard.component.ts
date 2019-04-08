import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';

import { WizzardStepDirective } from '../../directives/wizzard-step.directive';

@Component({
  selector: 'app-wizzard',
  templateUrl: './wizzard.component.html',
  styleUrls: ['./wizzard.component.scss']
})
export class WizzardComponent implements AfterContentInit {
  private _activeStepId: string;

  @ContentChildren(WizzardStepDirective)
  steps: QueryList<WizzardStepDirective>;

  stepDictionary = new Map<string, WizzardStepDirective>();

  set activeStepId(stepName: string) {
    if (this._activeStepId) {
      this.stepDictionary.get(this._activeStepId).host.hide();
    }
    this._activeStepId = stepName;
    this.stepDictionary.get(this._activeStepId).host.show();
  }
  get activeStepId(): string {
    return this._activeStepId;
  }
  get enabledSteps() {
    return this.steps.filter(x => !x.disabled);
  }
  get enabledStepIds() {
    return this.enabledSteps.map(x => x.stepId);
  }
  get last() {
    const lastStepId = this.enabledSteps.pop().stepId;
    return this._activeStepId === lastStepId;
  }
  get first() {
    const firstStep = this.enabledSteps.shift().stepId;
    return this._activeStepId === firstStep;
  }

  constructor() {}

  ngAfterContentInit() {
    this.steps.forEach((step, index, steps) => {
      step.nextId = steps[index + 1] && steps[index + 1].stepId;
      step.previousId = steps[index - 1] && steps[index - 1].stepId;
      this.stepDictionary.set(step.stepId, step);
    });
    this.activeStepId = this.steps.first.stepId;
  }

  goToStep(stepId: string) {
    if (this.enabledStepIds.indexOf(stepId) !== -1) {
      this.activeStepId = stepId;
    }
  }

  next() {
    let nextStepCandidate = this.stepDictionary.get(this.activeStepId).nextId;
    while (nextStepCandidate && this.enabledStepIds.indexOf(nextStepCandidate) === -1) {
      nextStepCandidate = this.stepDictionary.get(nextStepCandidate).nextId;
    }
    if (nextStepCandidate) {
      this.activeStepId = nextStepCandidate;
    }
  }

  previous() {
    let previousStepCandidate = this.stepDictionary.get(this.activeStepId).previousId;
    while (previousStepCandidate && this.enabledStepIds.indexOf(previousStepCandidate) === -1) {
      previousStepCandidate = this.stepDictionary.get(previousStepCandidate).previousId;
    }
    if (previousStepCandidate) {
      this.activeStepId = previousStepCandidate;
    }
  }
}
