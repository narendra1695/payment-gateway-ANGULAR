import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingCompComponent } from './layouts/landing-comp/landing-comp.component';
import { PlansComponent } from './layouts/normal-pay/plans/plans.component';
import { BasicPlanComponent } from './layouts/normal-pay/basic-plan/basic-plan.component';
import { StandardPlanComponent } from './layouts/normal-pay/standard-plan/standard-plan.component';
import { AdvancePlanComponent } from './layouts/normal-pay/advance-plan/advance-plan.component';
import { EnhancedPlanComponent } from './layouts/normal-pay/enhanced-plan/enhanced-plan.component';
import { ProfessionalPlanComponent } from './layouts/normal-pay/professional-plan/professional-plan.component';
import { BusinessPlanComponent } from './layouts/normal-pay/business-plan/business-plan.component';
import { CustomPlanComponent } from './layouts/normal-pay/custom-plan/custom-plan.component';
import { PolicyComponent } from './layouts/static/policy/policy.component';
import { RefundComponent } from './layouts/static/refund/refund.component';
import { ECheckPlanComponent } from './layouts/e-pay/e-check-plan/e-check-plan.component';
import { BasicEPlanComponent } from './layouts/e-pay/basic-eplan/basic-eplan.component';
import { StandardEPlanComponent } from './layouts/e-pay/standard-eplan/standard-eplan.component';
import { AdvanceEPlanComponent } from './layouts/e-pay/advance-eplan/advance-eplan.component';
import { EnhancedEPlanComponent } from './layouts/e-pay/enhanced-eplan/enhanced-eplan.component';
import { ProfessionalEPlanComponent } from './layouts/e-pay/professional-eplan/professional-eplan.component';
import { BusinessEPlanComponent } from './layouts/e-pay/business-eplan/business-eplan.component';
import { CustomEPlanComponent } from './layouts/e-pay/custom-eplan/custom-eplan.component';

const routes: Routes = [
  {
    path: "",
    component: LandingCompComponent
  },
  {
    path: "plans",
    component: PlansComponent,
    children: [
      {
        path: "basicPlan",
        component: BasicPlanComponent
      },
      {
        path: "standardPlan",
        component: StandardPlanComponent
      },
      {
        path: "advancePlan",
        component: AdvancePlanComponent
      },
      {
        path: "enhancedPlan",
        component: EnhancedPlanComponent
      },
      {
        path: "professionalPlan",
        component: ProfessionalPlanComponent
      },
      {
        path: "businessPlan",
        component: BusinessPlanComponent
      },
      {
        path: "customPlan",
        component: CustomPlanComponent
      }
    ]
  },
  {
    path: "eCheck",
    component: ECheckPlanComponent,
    children: [
      {
        path: "basicEPlan",
        component: BasicEPlanComponent
      },
      {
        path: "standardEPlan",
        component: StandardEPlanComponent
      },
      {
        path: "advanceEPlan",
        component: AdvanceEPlanComponent
      },
      {
        path: "enhancedEPlan",
        component: EnhancedEPlanComponent
      },
      {
        path: "professionalEPlan",
        component: ProfessionalEPlanComponent
      },
      {
        path: "businessEPlan",
        component: BusinessEPlanComponent
      },
      {
        path: "customEPlan",
        component: CustomEPlanComponent
      }
    ]
  },
  {
    path: "policy",
    component: PolicyComponent
  },
  {
    path: "refund",
    component: RefundComponent
  },
  {
    path: "**",
    component: LandingCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
