import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Grinberg';

  public calenderDayList: any[] = [
    { displayText: 1, value: 1 },
    { displayText: 2, value: 2 },
    { displayText: 3, value: 3 },
    { displayText: 4, value: 4 },
    { displayText: 5, value: 5 },
    { displayText: 6, value: 6 },
    { displayText: 7, value: 7 },
    { displayText: 8, value: 8 },
    { displayText: 9, value: 9 },
    { displayText: 10, value: 10 },
    { displayText: 11, value: 11 },
    { displayText: 12, value: 12 },
    { displayText: 13, value: 13 },
    { displayText: 14, value: 14 },
    { displayText: 15, value: 15 },
    { displayText: 16, value: 16 },
    { displayText: 17, value: 17 },
    { displayText: 18, value: 18 },
    { displayText: 19, value: 19 },
    { displayText: 20, value: 20 },
    { displayText: 21, value: 21 },
    { displayText: 22, value: 22 },
    { displayText: 23, value: 23 },
    { displayText: 24, value: 24 },
    { displayText: 25, value: 25 },
    { displayText: 26, value: 26 },
    { displayText: 27, value: 27 },
    { displayText: 28, value: 28 },
    { displayText: 29, value: 29 },
    { displayText: 30, value: 30 },
    { displayText: 31, value: 31 }
  ];

  public calenderMonthList: any[] = [
    { displayText: 'January', value: 'January' },
    { displayText: 'February', value: 'February' },
    { displayText: 'March', value: 'March' },
    { displayText: 'April', value: 'April' },
    { displayText: 'May', value: 'May' },
    { displayText: 'June', value: 'June' },
    { displayText: 'July', value: 'July' },
    { displayText: 'August', value: 'August' },
    { displayText: 'September', value: 'September' },
    { displayText: 'October', value: 'October' },
    { displayText: 'November', value: 'November' },
    { displayText: 'December', value: 'December' }
  ];

  public calenderYearList: any[] = [
    { displayText: 1992, value: 1992 },
    { displayText: 1993, value: 1993 },
    { displayText: 1994, value: 1994 },
    { displayText: 1995, value: 1995 },
    { displayText: 1996, value: 1996 },
    { displayText: 1997, value: 1997 },
    { displayText: 1998, value: 1998 },
    { displayText: 1999, value: 1999 },
    { displayText: 2000, value: 2000 },
    { displayText: 2001, value: 2001 },
    { displayText: 2002, value: 2002 },
    { displayText: 2003, value: 2003 },
    { displayText: 2004, value: 2004 },
    { displayText: 2005, value: 2005 },
    { displayText: 2006, value: 2006 },
    { displayText: 2007, value: 2007 },
    { displayText: 2008, value: 2008 },
    { displayText: 2009, value: 2009 },
    { displayText: 2010, value: 2010 },
    { displayText: 2011, value: 2011 },
    { displayText: 2012, value: 2012 },
    { displayText: 2014, value: 2014 },
    { displayText: 2015, value: 2015 },
    { displayText: 2016, value: 2016 },
    { displayText: 2017, value: 2017 },
    { displayText: 2018, value: 2018 },
    { displayText: 2019, value: 2019 },
    { displayText: 2020, value: 2020 },
    { displayText: 2021, value: 2021 },
    { displayText: 2022, value: 2022 }
  ];

  public roleList = [
    { displayText: 'CEO', value: 25 },
    { displayText: 'Director', value: 20 },
    { displayText: 'Manager', value: 15 },
    { displayText: 'Lead Developer', value: 10 },
    { displayText: 'Senior Developer', value: 5 },
    { displayText: 'Developer', value: 0 }
  ];

  month = 'January';
  year = ['', 2020.2, '2021', 2022];

  public dayFormControl: any = new FormControl();
  public myForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      day: new FormControl(1),
      month: new FormControl('January'),
      year: new FormControl(1992),
      role: new FormControl(0),
    });

    this.myForm.valueChanges.subscribe(data => console.log(data));
  }
}
