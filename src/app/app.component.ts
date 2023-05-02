import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText: string = faker.random.words(5);
  text: string = '';

  onInput(e: any): void {
    this.text = e.target.value;
    console.log(this.text);
  }
}
