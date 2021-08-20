import { Component } from '@angular/core';
import { Route } from './core/enums/routes.enum';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  menuRoutes = [Route.Home, Route.History];

  constructor() {}
}
