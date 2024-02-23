import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Permissons } from 'src/app/shared/service/permissions';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { AddCityComponent } from './cities/add-city/add-city.component';
import { CitiesComponent } from './cities/cities.component';
import { HomeSettingsComponent } from './home-settings/home-settings.component';
import { AddSliderComponent } from './slider/add-slider/add-slider.component';
import { AddTownComponent } from './towns/add-town/add-town.component';
import { TownsComponent } from './towns/towns.component';



const routes: Routes = [
  {
    path: 'app-settings',
    component: AppSettingsComponent,
    canActivate:[Permissons],
    data: {
      permission: '"update_setting":true',
      title: "App Setting",
      breadcrumb: "app-Setting"
    }
  },{
    path: 'home-settings',
    component: HomeSettingsComponent,
    canActivate:[Permissons],
    data: {
      permission: '"update_setting":true',
      title: "Home Setting",
      breadcrumb: "home-Setting"
    }
  }
  ,{
    path: 'add-slider',
    component: AddSliderComponent,
    canActivate:[Permissons],
    data: {
      permission: '"update_setting":true',
      title: "Add Slider",
      breadcrumb: "Add Slider"
    }
  },{
    path: 'add-town',
    component: AddTownComponent,
    canActivate:[Permissons],
    data: {
      permission: '"update_setting":true',
      title: "Add Town",
      breadcrumb: "Add Town"
    }
  },{
    path: 'edit-town',
    component: AddTownComponent,
    canActivate:[Permissons],
    data: {
      permission: '"update_setting":true',
      title: "Edit Town",
      breadcrumb: "Edit Town"
    }
  },{
    path: 'towns',
    component: TownsComponent,
    canActivate:[Permissons],
    data: {
      permission: '"update_setting":true',
      title: "Towns",
      breadcrumb: "Towns"
    }
  },{
    path: 'add-state',
    component: AddCityComponent,
    canActivate:[Permissons],
    data: {
      permission: '"update_setting":true',
      title: "Add State",
      breadcrumb: "Add state"
    }
  },{
    path: 'edit-state',
    component: AddCityComponent,
    canActivate:[Permissons],
    data: {
      permission: '"update_setting":true',
      title: "Edit State",
      breadcrumb: "Edit state"
    }
  },{
    path: 'states',
    component: CitiesComponent,
    canActivate:[Permissons],
    data: {
      permission: '"update_setting":true',
      title: "States",
      breadcrumb: "States"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
