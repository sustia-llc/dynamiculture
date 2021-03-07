This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

# Update
https://github.com/nvm-sh/nvm
get latest nvm


## Creation Steps
nvm install node

npm install -g @angular/cli typescript eslint webpack

ng new beeso
  NO stricter type checking angularCompilerOptions
  angular routing
  SCSS

cd beeso

ng add @angular/material

npm install ng2-charts --save

npm install chart.js --save

add to appmodule.ts
```
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
   …
   ChartsModule,
   …
]
})
```

npm install --save-dev ng2-charts-schematics

npm update

update package.json
    "ts-node": "~9.1.1",
    "typescript": "~4.1.3"
    remove: tslint

rm -rf node_modules

npm i

ng update


ng generate @angular/material:navigation nav

add to NavComponent in navcomponent.ts
```
menuItems = ['dashboard', 'settings'];
```

modify mat-nav-list in nav.component.html
```
<a *ngFor="let item of menuItems" mat-list-item [routerLink]="'/'+item"> {{item | titlecase}} </a>
```

remove everything from app.component.html and add this:
```
<app-nav></app-nav>
```

replace <--Add Content ...> in nav.component.html with:
```
<router-outlet></router-outlet>
```

# Create Community Dashboard

ng generate @angular/material:dashboard components/community


modify app-routing.module.ts with
```
import { CommunityComponent } from './components/community/community.component';

const routes: Routes = [{ path: 'community', component: CommunityComponent }];
```
# Create Air Dashboard

ng generate @angular/material:dashboard components/air


modify app-routing.module.ts with
```
{ path: 'air', component: AirComponent }
```

# Create Water Dashboard

ng generate @angular/material:dashboard components/water


modify app-routing.module.ts with
```
{ path: 'water', component: WaterComponent }
```

# Create Carbon Dashboard

ng generate @angular/material:dashboard components/carbon


modify app-routing.module.ts with
```
{ path: 'carbon', component: CarbonComponent }
```

# Create Plants Dashboard

ng generate @angular/material:dashboard components/plants


modify app-routing.module.ts with
```
{ path: 'plants', component: PlantsComponent }
```

# Create Animals Dashboard

ng generate @angular/material:dashboard components/animals


modify app-routing.module.ts with
```
{ path: 'animals', component: AnimalsComponent }
```

# Create Soil Dashboard

ng generate @angular/material:dashboard components/soil


modify app-routing.module.ts with
```
{ path: 'soil', component: SoilComponent }
```

# Create Personal Dashboard

ng generate @angular/material:dashboard components/personal


modify app-routing.module.ts with
```
{ path: 'personal', component: PersonalComponent }
```

# Create Members Dashboard

ng generate @angular/material:dashboard components/members


modify app-routing.module.ts with
```
{ path: 'members', component: MembersComponent }
```


# Create Card Component

ng g c card -m app --style css   ## QUESTION HERE?

edi card.component.html
```
<mat-card class="dashboard-card">
    <mat-card-header>
        <mat-card-title>
            {{title}}
            <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" aria-label="Toggle menu">
                <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #menu="matMenu" xPosition="before">
                <button mat-menu-item>Expand</button>
                <button mat-menu-item>Remove</button>
            </mat-menu>
        </mat-card-title>
    </mat-card-header>
    <mat-card-content class="dashboard-card-content">
        <ng-content></ng-content>
    </mat-card-content>
 </mat-card>
```

edit card.component.ts and add
```
@Input() title: string;
```
and to the constructor:
```
this.title = '';
```

edit card.component.css
```
/*card.component.css*/
.more-button {
   position: absolute;
   top: 5px;
   right: 10px;
}

.dashboard-card {
   position: absolute;
   top: 15px;
   left: 15px;
   right: 15px;
   bottom: 15px;
}


.dashboard-card-content {
   text-align: center;
   flex-grow: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   max-height: 100%;
   justify-content: center;
   align-items: stretch;
}

mat-card {
   display: flex;
   flex-direction: column;
}
```

replace cards with below in personal.component.ts:
```
cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
   map(({ matches }) => {
     if (matches) {
       return {
         columns: 1,
         miniCard: { cols: 1, rows: 1 },
         chart: { cols: 1, rows: 2 },
         table: { cols: 1, rows: 4 },
       };
     }

    return {
       columns: 4,
       miniCard: { cols: 1, rows: 1 },
       chart: { cols: 2, rows: 2 },
       table: { cols: 4, rows: 4 },
     };
   })
 );
 ```

 replace personal.component.html with
 ```
 <div class="grid-container">
  <h1 class="mat-h1">Dashboard</h1>
  <mat-grid-list cols="{{ ( cardLayout | async )?.columns }}" rowHeight="350px"> <!--QUESTION ABOUT 350 or 200 here-->
    <mat-grid-tile *ngFor="let i of [1, 2, 3, 4]" [colspan]="( cardLayout | async )?.miniCard.cols"
    [rowspan]="( cardLayout | async )?.miniCard.rows">
      <app-card title="Card {{i}}"><div>Mini Card Content Here</div></app-card>
    </mat-grid-tile>
    <!--Charts-->
    <mat-grid-tile *ngFor="let i of [5, 6, 7, 8]" [colspan]="( cardLayout | async )?.chart.cols"
    [rowspan]="( cardLayout | async )?.chart.rows">
    <app-card title="Card {{i}}"><div>Chart Content Here</div></app-card>
    </mat-grid-tile>
    <!--Table-->
    <mat-grid-tile [colspan]="( cardLayout | async )?.table.cols" [rowspan]="( cardLayout | async )?.table.rows">
      <app-card title="Card 9"><div>Table Content Here</div></app-card>
    </mat-grid-tile>
  </mat-grid-list>
</div>
```

generate charts
```
ng generate ng2-charts-schematics:radar charts/income-source-coin-chart
ng generate ng2-charts-schematics:pie charts/coin-allocation-chart
ng generate ng2-charts-schematics:line charts/annual-income-chart
ng generate ng2-charts-schematics:bar charts/income-source-chart
```

add `class="chartContainer"` top-level div in *-chart.component.html and remove display block

add to styles.scss
```
.chartContainer canvas {
    max-height: 250px;
    width: auto;
}

.chartContainer{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
```

ng generate @angular/material:table transactions

add small table to div in table.component.html
```
<div class="mat-elevation-z8 small-table">
```

add to table.component.scss
```
.small-table{
  overflow-x: scroll !important;
}
```

ng g c mini-card -m app --style scss

ng generate class StoreSummary

ng generate service StoreSummary

ng generate @angular/material:table tables/reminders


# References
https://www.smashingmagazine.com/2020/07/responsive-dashboard-angular-material-ng2-charts-schematics/
