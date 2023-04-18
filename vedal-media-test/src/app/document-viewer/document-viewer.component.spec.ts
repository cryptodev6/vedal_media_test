import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DocumentViewerComponent } from './document-viewer.component';

describe('DocumentViewerComponent', () => {
  let component: DocumentViewerComponent;
  let fixture: ComponentFixture<DocumentViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentViewerComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: {
              subscribe: (fn: (value: any) => void) => fn({ id: 123 }) // Mock the params observable with a fake value
            }
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the component with the correct id', () => {
    expect(component.id).toEqual(123);
  });

  it('should add an annotation with the correct properties when addAnnotation is called', () => {
    component.position = { x: 100, y: 200 };
    component.addAnnotation('test');
    expect(component.annotations.length).toEqual(1);
    expect(component.annotations[0].text).toEqual('test');
    expect(component.annotations[0].x).toEqual(100);
    expect(component.annotations[0].y).toEqual(200);
  });

  it('should remove an annotation when removeAnnotation is called', () => {
    component.annotations = [
      { id: 1, x: 100, y: 200, text: 'test1' },
      { id: 2, x: 300, y: 400, text: 'test2' }
    ];
    component.removeAnnotation(component.annotations[0]);
    expect(component.annotations.length).toEqual(1);
    expect(component.annotations[0].text).toEqual('test2');
  });

  it('should update an annotation when onAnnotationDragEnd is called', () => {
    component.annotations = [
      { id: 1, x: 100, y: 200, text: 'test1' },
      { id: 2, x: 300, y: 400, text: 'test2' }
    ];
    const event = { clientX: 500, clientY: 600 };
    component.onAnnotationDragEnd(component.annotations[0], event);
    expect(component.annotations[0].x).toEqual(500);
    expect(component.annotations[0].y).toEqual(600);
  });

  it('should save the annotations as JSON when save is called', () => {
    spyOn(console, 'log'); // Spy on console.log to check the output
    component.annotations = [
      { id: 1, x: 100, y: 200, text: 'test1' },
      { id: 2, x: 300, y: 400, text: 'test2' }
    ];
    component.save();
    expect(console.log).toHaveBeenCalledWith(JSON.stringify(component.annotations));
  });
});
