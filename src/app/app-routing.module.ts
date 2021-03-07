import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './components/personal/personal.component';
import { CommunityComponent } from './components/community/community.component';
import { AirComponent } from './components/air/air.component';
import { BiodiversityComponent } from './components/biodiversity/biodiversity.component';
import { CarbonComponent } from './components/carbon/carbon.component';
import { WaterComponent } from './components/water/water.component';
import { SoilComponent } from './components/soil/soil.component';
import { ProposalsComponent } from './components/proposals/proposals.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { MembersComponent } from './components/members/members.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CultureComponent } from './components/culture/culture.component';
import { FoodsecurityComponent } from './components/foodsecurity/foodsecurity.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'community', component: CommunityComponent},
  { path: 'air', component: AirComponent },
  { path: 'biodiversity', component: BiodiversityComponent },
  { path: 'carbon', component: CarbonComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'foodsecurity', component: FoodsecurityComponent },
  { path: 'soil', component: SoilComponent },
  { path: 'water', component: WaterComponent },

  { path: 'personal', component: PersonalComponent},
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'proposals', component: ProposalsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'settings', component: SettingsComponent },
];
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
