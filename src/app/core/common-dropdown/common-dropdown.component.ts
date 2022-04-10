import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-dropdown',
  templateUrl: './common-dropdown.component.html',
  styleUrls: ['./common-dropdown.component.scss']
})
export class CommonDropdownComponent implements OnInit {

  @Input() selectFC = new FormControl;
  @Input() options: any = [];
  @Input() classList: any = '';


  constructor() { }

  ngOnInit(): void {
  }

}
