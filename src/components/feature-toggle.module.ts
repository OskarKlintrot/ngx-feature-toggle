import { NgModule } from '@angular/core';

import { FeatureToggleProviderComponent } from './feature-toggle-provider.component';
import { FeatureToggleComponent } from './feature-toggle.component';

const ANGULAR_FEATURE_TOGGLE_DIRECTIVES: any[] = [
  FeatureToggleProviderComponent,
  FeatureToggleComponent
];

const ANGULAR_FEATURE_TOGGLE_PROVIDERS: any[] = [
];

@NgModule({
  declarations: ANGULAR_FEATURE_TOGGLE_DIRECTIVES,
  exports: ANGULAR_FEATURE_TOGGLE_DIRECTIVES,
  providers: ANGULAR_FEATURE_TOGGLE_PROVIDERS
})

export class FeatureToggleModule { }
