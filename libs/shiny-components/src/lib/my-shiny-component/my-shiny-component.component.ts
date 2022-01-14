import { Component, OnInit } from '@angular/core';
import {MyCommonService} from '@rob/common-components'

@Component({
  selector: 'rob-my-shiny-component',
  templateUrl: './my-shiny-component.component.html',
  styleUrls: ['./my-shiny-component.component.scss']
})
export class MyShinyComponentComponent implements OnInit {

  message = '';
  constructor(private commonService: MyCommonService) { }

  ngOnInit(): void {
    this.message = this.commonService.doStuff();
  }

}
