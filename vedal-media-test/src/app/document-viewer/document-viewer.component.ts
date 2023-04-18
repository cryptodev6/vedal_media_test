import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  position: { x: number, y: number } = { x: 0, y: 0 };
  isPopupOpen = false;
  isPicturePopupOpen = false;
  isInscriptionPopupOpen = false;
  annotations: { id: number, x: number, y: number, text: string, file?: File }[] = [];
  file: any = '';
  positionBeforePopupClosed: { x: number, y: number } = { x: 0, y: 0 };
  selectedImageFile: any;
  nextId = 1;
  selectedAnnotation: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  showPopup(event: MouseEvent, annotation: any) {
    this.position.x = event.clientX;
    this.position.y = event.clientY;
    this.isPopupOpen = true;
    this.isPicturePopupOpen = false;
    this.isInscriptionPopupOpen = false;
    this.selectedAnnotation = annotation;
  }


  showPicturePopup() {
    this.positionBeforePopupClosed = { ...this.position };
    this.isPopupOpen = false;
    this.isPicturePopupOpen = true;
  }

  showInscriptionPopup() {
    this.isPopupOpen = false;
    this.isInscriptionPopupOpen = true;
  }

  addAnnotation(text: string) {
    const annotation = {
      id: this.nextId++,
      x: this.position.x,
      y: this.position.y,
      text: text
    };
    this.annotations.push(annotation);
    this.isInscriptionPopupOpen = false;
  }

  onAnnotationDragEnd(annotation: any, event: any) {
    const newX = event.clientX;
    const newY = event.clientY;
    const index = this.annotations.findIndex(a => a.id === annotation.id);
    if (index !== -1) {
      this.annotations[index].x = newX;
      this.annotations[index].y = newY;
    }
  }

  removeAnnotation(annotation: any) {
    const index = this.annotations.findIndex(a => a.id === annotation.id);
    if (index !== -1) {
      // Check if the annotation being deleted is the same one that was last clicked to open the popup
      if (annotation === this.selectedAnnotation) {
        this.isPopupOpen = false;
        this.isPicturePopupOpen = false;
        this.isInscriptionPopupOpen = false;
        this.selectedAnnotation = null;
      }
      this.annotations.splice(index, 1);
    }
  }

  closePopup(file?: File) {
    this.isPopupOpen = false;
    this.isPicturePopupOpen = false;
    this.isInscriptionPopupOpen = false;

    if (file) {
      const annotation = {
        id: this.nextId++,
        x: this.positionBeforePopupClosed.x,
        y: this.positionBeforePopupClosed.y,
        text: file.name,
        file: file
      };
      this.annotations.push(annotation);

      // Set the selected image file to the selected file
      this.selectedImageFile = file;

      // Read the contents of the file and convert it to a data URL
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        this.selectedImageFile = event?.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.closePopup(this.file);
  }


  zoomIn() {
    const currentZoom = parseFloat(getComputedStyle(document.body).getPropertyValue('zoom'));
    document.body.style.setProperty('zoom', `${currentZoom + 0.1}`);
  }

  zoomOut() {
    const currentZoom = parseFloat(getComputedStyle(document.body).getPropertyValue('zoom'));
    if (currentZoom > 0.1) {
      document.body.style.setProperty('zoom', `${currentZoom - 0.1}`);
    }
  }

}
