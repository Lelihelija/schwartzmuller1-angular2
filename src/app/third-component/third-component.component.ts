import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent implements OnInit {
  @Input() text2: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('ThirdComponentComponent: ', this.text2);
  }

}
