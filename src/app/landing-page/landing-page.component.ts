import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

toggleForm = false;
formToggle() {
  this.toggleForm = !this.toggleForm;
}
  constructor() { }

  ngOnInit() {
  }

}
