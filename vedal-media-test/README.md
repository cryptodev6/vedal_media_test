# Document Viewer Component
The Document Viewer component is an Angular component that allows you to view documents and add annotations to them. It provides the following functionalities:

 - Zoom In: Increases the zoom level of the document.
- Zoom Out: Decreases the zoom level of the document.
- Add Annotation: Allows you to add an annotation to the document. When you click on the document, a popup appears that lets you choose whether to add a picture or an inscription. If you choose to add an inscription, a text input appears where you can type the text of the annotation. If you choose to add a picture, a file input appears where you can choose a picture file from your computer. After you add an annotation, it appears on the document with a small "X" button next to it. You can drag the annotation to move it around the document. You can click on the "X" button to delete the annotation.
- Save: Allows you to save the added annotations to a JSON format. When you click on the "Save" button, the component generates a JSON output with the parameters of the added annotations and outputs it to the console.

#Installation
To use the Document Viewer component in your Angular project, you can install it via NPM by running the following command:
