import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  imports: [],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.scss'
})
export class SimpleComponent implements AfterViewInit{

  testId: string = 'first value'

  ngAfterViewInit(): void {
    this.testId = 'second value';
  }

}
