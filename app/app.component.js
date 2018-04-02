"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var student_list_service_1 = require('./student-list.service');
var AppComponent = (function () {
    //In constuctor we are injecting the service using typescripts shorthand syntax
    //we will talk about dependancy injection in separate article
    function AppComponent(_studentListService) {
        this._studentListService = _studentListService;
        this.students = []; // this variable holds the list of students that we will get from the service
    }
    //This is lifecycle hook method of angular which fires after the constructor 
    AppComponent.prototype.ngOnInit = function () {
        //here i am calling the services and assingning the returned student list to the students variable
        this.students = this._studentListService.getAllStudents();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html',
            providers: [student_list_service_1.StudentListService] // Here we have registered the service at the component level.
        }), 
        __metadata('design:paramtypes', [student_list_service_1.StudentListService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map