import { Component, HostListener, OnInit } from '@angular/core';
import { DocumentService } from '../shared/services/document.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  position: { x: number, y: number } = { x: 0, y: 0 };
  isPopupOpen = false;

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
    console.log("show popup", event);
    this.position.x = event.clientX;
    this.position.y = event.clientY;
    this.isPopupOpen = true;
    console.log("isPopupOpen", this.isPopupOpen);
  }

  closePopup() {
    this.isPopupOpen = false;
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
