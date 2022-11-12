import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name="Jonathan"
  siteUrl=window.location.href;
  myId='testId';
  hasError=false;//or true
  titreStyle={
    color:'blue',
    fontStyle:'italic',
    fontSize:'30px'
  };
  constructor() { }


  ngOnInit(): void {
  }
  getName(){
    return "hello "+this.name;
  }
}
