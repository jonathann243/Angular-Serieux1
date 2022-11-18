import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  color=["green","blue","yellow","pink","purple","orange","brown","black","white"];

  constructor() { }
    ngOnInit(): void {
  }


}
