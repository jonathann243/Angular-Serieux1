import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  //there is two way declare Input variable
  //first on {{item}} in html file
  //@Input() item='';
  //second one{{name}} in html file
  @Input('item') name="";


  @Output() childEvent=new EventEmitter();
  fireEvent() {
    this.childEvent.emit('Hey code evolution');
  }

  constructor() { }
  ngOnInit(): void {
  }

}
