import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('toDoCreated') toDoListCreated = new EventEmitter<{doList:string}>();
  @ViewChild('toDoContent',{static:true}) toDoContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddToDoList(nameInput: HTMLInputElement) {
    console.log(this.toDoContent)
    this.toDoListCreated.emit({
      doList: this.toDoContent.nativeElement.value
    });
  }

}
