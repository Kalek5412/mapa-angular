import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if(!navigator.geolocation){
  alert('Navegador no ssoporta ña geo');
  throw new Error('Navegador mp soport la geolocaion');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
