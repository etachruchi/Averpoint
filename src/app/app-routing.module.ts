import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from "@angular/compiler/src/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from './component/header/header.component';
import { CollectionNameComponent } from './collection-name/collection-name.component';
export const routes: Routes = [
  { path: "", redirectTo: "collection-name", pathMatch: "full" },
  { path: "collection-name", component: CollectionNameComponent },
  { path: "header", component: HeaderComponent },
 

]
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })]
})
export class AppRoutingModule {

}
