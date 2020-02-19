import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// DATA interface
// {
//   "group": [
//       {
//           "id": "1",
//           "title": "ДІАГНОЗИ",
//           "subgroup": [
//               {
//                   "id": "1.1",
//                   "title": "АРТЕРІЇ",
//                   "elements": [
//                       {
//                           "id": "",
//                           "title": "",
//                           "value": ""
//                       }
//                   ]
//               }
//           ]
//       }
//   ]
// }