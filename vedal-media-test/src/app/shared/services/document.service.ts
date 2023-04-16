import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentFolder = 'assets/documents'; // Replace with the actual folder name where the document is stored

  constructor() { }

  getDocument(id: string): Observable<any> {
    const filename = `${id}.pdf`; // Replace with the actual filename of the document
    const filepath = `${this.documentFolder}/${filename}`;
    return of(filepath);
  }
}
