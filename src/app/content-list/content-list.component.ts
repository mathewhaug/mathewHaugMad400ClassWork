import { Component, OnInit } from '@angular/core';
import {IContent } from

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent implements OnInit {
  themeContent: IContent[] = [

  ];

  constructor() {  }

  ngOnInit():void {
  }

}
