import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../route-animation';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
  animations: [ slideInAnimation ]
})
export class VerificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
