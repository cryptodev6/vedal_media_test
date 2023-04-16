import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private document: string = 'data:image/png;base64,iVBORw0KG...'; // Replace with your PNG data

  constructor() { }

  getDocument(): Observable<string> {
    return of(this.document);
  }
}
