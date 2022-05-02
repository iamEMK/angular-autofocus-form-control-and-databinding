import { Component, VERSION } from '@angular/core';
import {ApiService} from './api.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  input='';
  dataSource : any[] = [];
  sampleArray : any[] = [];
  
  constructor(private service : ApiService){
    this.service.getData().then(datas => {
      this.dataSource = datas;
      console.log(this.dataSource)
    });
}
arraypush(){
  this.sampleArray.push(this.input);
  console.log(this.sampleArray);
}

}