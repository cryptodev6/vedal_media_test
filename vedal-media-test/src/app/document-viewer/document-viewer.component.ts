import { Component, HostListener, OnInit } from '@angular/core';
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
  annotations: { x: number, y: number, text: string, file?: File }[] = [];
  file: any = '';
  positionBeforePopupClosed: { x: number, y: number } = { x: 0, y: 0 };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    /*if (this.isPopupOpen) {
      const popup = document.querySelector('.popup') as HTMLElement;
      const isClickInsidePopup = popup.contains(event.target as Node);

      if (!isClickInsidePopup) {
        this.closePopup();
      }
    }*/
  }

  showPopup(event: MouseEvent) {
    this.position.x = event.clientX;
    this.position.y = event.clientY;
    this.isPopupOpen = true;
    this.isPicturePopupOpen = false;
    this.isInscriptionPopupOpen = false;
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
      x: this.position.x,
      y: this.position.y,
      text: text
    };
    this.annotations.push(annotation);
    this.isInscriptionPopupOpen = false;
  }

  closePopup(file?: File) {
    this.isPopupOpen = false;
    this.isPicturePopupOpen = false;
    this.isInscriptionPopupOpen = false;
    
    if (!!this.file && !!file) {
      const annotation = {
        x: this.positionBeforePopupClosed.x,
        y: this.positionBeforePopupClosed.y,
        text: file.name,
        file: file
      };
      this.annotations.push(annotation);
    }
    
    this.file = undefined;
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
