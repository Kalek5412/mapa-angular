import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { LoadingComponent } from './screens/loading/loading.component';
import { MapViewComponent } from './screens/map-view/map-view.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    LoadingComponent,
    MapViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MapScreenComponent,
    LoadingComponent,
    MapViewComponent
  ]
})
export class MapsModule { }
