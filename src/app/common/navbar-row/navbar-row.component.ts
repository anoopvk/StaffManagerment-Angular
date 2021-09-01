import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-row',
  templateUrl: './navbar-row.component.html',
  styleUrls: ['./navbar-row.component.css']
})
export class NavbarRowComponent implements OnInit {
  @Input() rLink: string | undefined;
  @Input() title: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
