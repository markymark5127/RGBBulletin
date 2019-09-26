import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { consoleInfo, Console, Company, ConsoleType } from '../objects/consoleInfo';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {

  console: Console;
  company: Company;
  routeCon: string;
  routeComp: string;
  type: string;
  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe( paramMap => {
      this.routeComp = paramMap.get('company');
      this.type = paramMap.get('type');
      this.routeCon = paramMap.get('console');
      this.company = consoleInfo.find( co => {
        return co.id === this.routeComp;
      });
      if ( ConsoleType.HANDHELD === this.type) {
        this.console = this.company.handheldConsoles.find( co => {
        return co.id === this.routeCon;
        });
      }
      if ( ConsoleType.HOME === this.type) {
        this.console = this.company.homeConsoles.find( co => {
        return co.id === this.routeCon;
        });
      }
    });


  }

}
