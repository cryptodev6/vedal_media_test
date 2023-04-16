import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentFolder = 'assets/documents'; 

  constructor() { }

  getDocument(id: string): Observable<any> {
    const filename = `${id}.pdf`;
    const filepath = `${this.documentFolder}/${filename}`;
    return of(filepath);
  }
}
