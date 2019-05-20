import {Component, Input, OnInit} from '@angular/core';
import {headerNavbar} from '../../../../mocks/header.mocks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerNavbar = headerNavbar;

  @Input() carousel: any;

  constructor() {
  }

  ngOnInit() {
  }

}
