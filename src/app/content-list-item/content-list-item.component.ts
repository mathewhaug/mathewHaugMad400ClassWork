// src/app/content-list-item/content-list-item.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { IContent } from '../data/mock-content'; // Adjust the path accordingly

@Component({
  selector: 'app-content-list-item',
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css']
})
export class ContentListItemComponent implements OnInit {
  @Input() content: IContent;

  constructor() { }

  ngOnInit(): void {
  }
}
