import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: 'document-viewer', pathMatch: 'full' },
  { path: 'document-viewer', component: DocumentViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
