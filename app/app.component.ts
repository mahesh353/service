import { Component, OnInit } from '@angular/core'
import { StudentListService } from './student-list.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers : [StudentListService] // Here we have registered the service at the component level.
})

export class AppComponent implements OnInit{

    public students: any = [] ;// this variable holds the list of students that we will get from the service

    //In constuctor we are injecting the service using typescripts shorthand syntax
    //we will talk about dependancy injection in separate article
    constructor(private _studentListService : StudentListService) {
        
    }
    //This is lifecycle hook method of angular which fires after the constructor 
    ngOnInit(){
        //here i am calling the services and assingning the returned student list to the students variable
        this.students = this._studentListService.getAllStudents();
    }

}