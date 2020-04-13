import { Component, OnInit } from "@angular/core";
import $ from "jQuery";
@Component({
  selector: "app-classlist",
  templateUrl: "./classlist.component.html",
  styleUrls: ["./classlist.component.scss"],
})
export class ClasslistComponent implements OnInit {

    searchText;
    public people: any;
    p: number = 1;
    viewList: number = 5;
  
    constructor() {}
  
    ngOnInit(): void {
      this.people = [
        {
          Name: "Tiger",
          Position: "System Architect",
          Office: "Edinburgh",
          Age: "61",
          StartDate: "2011/04/25",
          Salary: "$320,800",
        },
        {
          Name: "Lion",
          Position: "System Architect",
          Office: "Edinburgh",
          Age: "61",
          StartDate: "2011/04/25",
          Salary: "$320,800",
        },
        {
          Name: "Tiger",
          Position: "System Architect",
          Office: "Edinburgh",
          Age: "61",
          StartDate: "2011/04/25",
          Salary: "$320,800",
        },
        {
          Name: "Lion",
          Position: "System Architect",
          Office: "Edinburgh",
          Age: "61",
          StartDate: "2011/04/25",
          Salary: "$320,800",
        },
        {
          Name: "Tiger",
          Position: "System Architect",
          Office: "Edinburgh",
          Age: "61",
          StartDate: "2011/04/25",
          Salary: "$320,800",
        },
        {
          Name: "Lion",
          Position: "System Architect",
          Office: "Edinburgh",
          Age: "61",
          StartDate: "2011/04/25",
          Salary: "$320,800",
        },
      ];
    }
  }
  