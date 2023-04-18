# Document Viewer Component
The Document Viewer component is an Angular component that allows you to view documents and add annotations to them. It provides the following functionalities:

Zoom In: Increases the zoom level of the document.
Zoom Out: Decreases the zoom level of the document.
Add Annotation: Allows you to add an annotation to the document. When you click on the document, a popup appears that lets you choose whether to add a picture or an inscription. If you choose to add an inscription, a text input appears where you can type the text of the annotation. If you choose to add a picture, a file input appears where you can choose a picture file from your computer. After you add an annotation, it appears on the document with a small "X" button next to it. You can drag the annotation to move it around the document. You can click on the "X" button to delete the annotation.
Save: Allows you to save the added annotations to a JSON format. When you click on the "Save" button, the component generates a JSON output with the parameters of the added annotations and outputs it to the console.
Installation
To use the Document Viewer component in your Angular project, you can install it via NPM by running the following command:

javascript
Copy code
npm install document-viewer
Usage
To use the Document Viewer component in your Angular project, you can import it in your module file and add it to the declarations and exports arrays. Here's an example:

typescript
Copy code
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentViewerComponent } from 'document-viewer';

@NgModule({
  declarations: [
    DocumentViewerComponent
  ],
  exports: [
    DocumentViewerComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule { }
After you import the component, you can use it in your template by adding the following code:

html
Copy code
<app-document-viewer></app-document-viewer>
This will render the Document Viewer component with its default settings.

Options
The Document Viewer component provides the following options:

[annotations]: An array of objects that represent the annotations added to the document. Each annotation object has the following properties:
x: The x-coordinate of the annotation.
y: The y-coordinate of the annotation.
text: The text of the annotation.
file: The file object of the picture file, if the annotation is a picture.
[selectedImageFile]: The file object of the selected picture file.
You can use these options to customize the behavior of the Document Viewer component. For example, you can pass an array of annotations to the component to prepopulate the document with existing annotations.

html
Copy code
<app-document-viewer [annotations]="existingAnnotations"></app-document-viewer>
License
The Document Viewer component is licensed under the MIT License. You can use it for both personal and commercial projects for free.