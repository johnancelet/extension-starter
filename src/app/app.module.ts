// NG
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Vendor
import { NovoElementsModule } from 'novo-elements';
// APP
import { AppComponent } from './app.component';
import { AppBridgeService } from './service/app-bridge.service';

const routes: Routes = [
  { path: '', redirectTo: 'sample', pathMatch: 'full' },
  { path: 'sample', loadChildren: './sample/sample.module#SampleModule' },
];

@NgModule({
  declarations: [
    // Main Entry Component
    AppComponent,
    // Modals/Popovers
  ],
  imports: [
    // NG
    BrowserModule,
    RouterModule.forRoot(routes),
    // Vendor
    NovoElementsModule,
    // APP
  ],
  providers: [
    AppBridgeService,
    // Vendor Overrides
    // APP
  ],
  bootstrap: [
    // Main Entry Component
    AppComponent,
    // Modals/Popovers
  ],
})
export class AppModule {}
