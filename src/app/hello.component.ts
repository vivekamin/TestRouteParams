import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, RouterStateSnapshot}         from '@angular/router';

@Component({

  templateUrl: 'hello.component.html',
})
export class HelloComponent implements OnInit {
  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    if(this.route.snapshot.params.lenghth>0){
      let id = +this.route.snapshot.params['tenantid'];
      let id1 = +this.route.snapshot.params['empid'];
      console.log(this.route.snapshot);
      console.log("tenant Id "+id + "  EmployeeId "+ id1);

    }



  }
}
