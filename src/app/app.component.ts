import { Component } from '@angular/core';
// decorateur for telling complilator  this is not plane class this is conponet
@Component({
  selector: 'app-root',  // tag html representing this component (use in index html)
  templateUrl: './app.component.html',//pointe html file
  styleUrls: ['./app.component.css']// point css file
})
export class AppComponent {
  title = 'Titre de la questisvsvsfuons';
  id=45;
  proof =45;

}
