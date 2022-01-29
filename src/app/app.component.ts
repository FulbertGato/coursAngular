import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-glrs3';
  trouve:boolean = true;
  titleHtml:string ="<span style='color:#210f0f;'>Mon titre </span>" ;
  value:string = "";
  nombre:number=2;
  nombres:number []=[1,2,3,4];
  getValue(event:any){

    this.value=event.target.value;
  }
}
