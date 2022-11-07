import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDoElements = [];

  onToDoListAdded(toDoData:{doList:string}) {
    this.toDoElements.push({
      doList: toDoData.doList
    });
  }

  onChangeFirst(){
    this.toDoElements[0].doList = "changed"
  }

  onDestroy(param){
    this.toDoElements.splice(param,1)
  }
}
