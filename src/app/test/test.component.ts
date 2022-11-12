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
  constructor() { }


  ngOnInit(): void {
  }
  getName(){
    return "hello "+this.name;
  }
}
