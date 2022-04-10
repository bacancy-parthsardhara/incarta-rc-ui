import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IDropdownOptions } from 'src/app/interface/dropdown-options.interface';

@Component({
  selector: 'app-common-dropdown',
  templateUrl: './common-dropdown.component.html',
  styleUrls: ['./common-dropdown.component.scss']
})
export class CommonDropdownComponent implements OnInit {

  @Input() selectFC = new FormControl;
  @Input() options: IDropdownOptions[] = [];
  @Input() classList: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
