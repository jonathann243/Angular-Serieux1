import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public buttonGenerateText = "";
  public name="Jonathan"
  constructor() { }
    ngOnInit(): void {
  }

  onClick(myInput: HTMLInputElement) {
    //console.log(myInput);
    console.log(myInput.value);
  }
}
