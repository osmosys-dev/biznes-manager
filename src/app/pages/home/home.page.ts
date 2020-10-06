import { Component, OnInit } from '@angular/core';
import {
  faWarehouse,
  faUserAstronaut,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  warehouse = faWarehouse;
  userAstronaut = faUserAstronaut;
  projectDiagram = faProjectDiagram;

  ngOnInit() {}
}
