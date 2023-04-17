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
}
