import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../shared/services/document.service';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  document: string = '';
  annotations: any[] = [];
  selectedAnnotation: any;
  zoomLevel = 1;

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.documentService.getDocument().subscribe(imageData => {
      this.document = imageData;
    });
  }

  addAnnotation(event: MouseEvent): void {
    const annotation = {
      x: event.clientX,
      y: event.clientY,
      content: 'New Annotation'
    };
    this.annotations.push(annotation);
  }

  selectAnnotation(annotation: any): void {
    this.selectedAnnotation = annotation;
  }

  moveAnnotation(event: MouseEvent): void {
    if (this.selectedAnnotation) {
      this.selectedAnnotation.x = event.clientX;
      this.selectedAnnotation.y = event.clientY;
    }
  }

  deleteAnnotation(): void {
    if (this.selectedAnnotation) {
      const index = this.annotations.indexOf(this.selectedAnnotation);
      this.annotations.splice(index, 1);
      this.selectedAnnotation = null;
    }
  }

  zoomIn(): void {
    this.zoomLevel += 0.1;
  }

  zoomOut(): void {
    this.zoomLevel -= 0.1;
  }

  saveAnnotations(): void {
    const data = this.annotations.map(annotation => {
      return {
        page: 1, // Replace with the actual page number
        x: annotation.x,
        y: annotation.y,
        size: annotation.size, // Add size property if needed
        content: annotation.content
      };
    });
    console.log(JSON.stringify(data));
  }
}
