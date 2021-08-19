import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-success-alert',
  template: `<p class="success">{{text}}</p>`,
  styles: [`
    .success {
      color: green;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {
  text = 'Hello! I am a success message!';
  constructor() { }

  ngOnInit(): void { }

}
