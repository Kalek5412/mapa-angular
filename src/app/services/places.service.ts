import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  public useLocation?: [number,number];

  get isUserLocationReady(): boolean{
    return !!this.useLocation;
  }

  constructor() {
    this.getUserLocation();
   }

  public async getUserLocation():Promise<[number,number]>{
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=>{
          this.useLocation=[coords.longitude, coords.latitude];
          resolve(this.useLocation);
        },
        (err)=>{
          alert('no se pudo obetenr lsito');
          console.log(err);
          reject();
        }
      );
    });
  }
}
