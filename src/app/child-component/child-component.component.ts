import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  //there is two way declare Input variable
  //first on
  //@Input() item='';
  //second one
  @Input('item') name="";
  constructor() { }

  ngOnInit(): void {
  }

}
