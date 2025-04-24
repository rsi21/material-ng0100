import { AfterViewInit, Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-tab-group',
  imports: [MatTabGroup, MatTab],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.scss'
})
export class TabGroupComponent  implements AfterViewInit{

  testId: string = 'first value'

  ngAfterViewInit(): void {
    this.testId = 'second value';
  }
}
