import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../shared/services/document.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
    });
  }

  ngOnInit(): void {

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
