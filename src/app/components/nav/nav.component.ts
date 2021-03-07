import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  communityMenuItems = [
    {'link': 'air', 'text': 'Air'},
    {'link': 'biodiversity', 'text': 'Biodiversity'},
    {'link': 'carbon', 'text': 'Carbon'},
    {'link': 'culture', 'text': 'Culture'},
    {'link': 'foodsecurity', 'text': 'Food Security'},
    {'link': 'soil', 'text': 'Soil'},
    {'link': 'water', 'text': 'Water'}];


  menuItems = ['personal', 'marketplace', 'proposals', 'members', 'settings'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
