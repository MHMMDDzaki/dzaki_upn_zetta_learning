import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ContentChild, ElementRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.css']
})

export class TodoElementComponent implements OnInit, OnChanges, OnDestroy {

  @Input('toDoElement') element: { // custom property binding
    doList: string;
  };
  @Input('toDo') doList: string
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef

  constructor() {
    console.log("constructor called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges Called')
    // console.log(changes)
  }

  ngOnInit(): void {
    // console.log("ngOnInit called")
    console.log(this.paragraph.nativeElement)
  }

  ngOnDestroy(): void {
    alert(this.paragraph.nativeElement.textContent)
  }
}
