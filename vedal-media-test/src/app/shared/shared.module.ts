import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentService } from './services/document.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [DocumentService],
  exports: [DocumentService]
})
export class SharedModule { }
