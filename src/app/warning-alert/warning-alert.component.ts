import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  text = 'Hello! I am a warning message!';
  text2 = 'Hello! I am a third component!';

  constructor() { }

  ngOnInit(): void {
  }

}
