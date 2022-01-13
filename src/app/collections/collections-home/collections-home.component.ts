import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {
      name: 'Abhishek',
      age: 24,
      job: 'Full Stack Developer'
    },
    {
      name: 'Divisht',
      age: 25,
      job: 'UI/UX Designer'
    },
    {
      name: 'Tushar',
      age: 26,
      job: 'Tester'
    },
    {
      name: 'James',
      age: 30,
      job: 'Data Analyst'
    },
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
