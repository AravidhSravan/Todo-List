import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    title = 'to-do-list';
    isContent:boolean=true;
    public items : any = [];
    public addTask:any;
    public addList() {
        if (this.addTask == '') 
        {
            this.isContent=false;
        }
        else 
        {
            this.items.push(this.addTask);
            this.addTask = '';
        }
    }
}
