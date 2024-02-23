import { Component, Input, OnInit } from '@angular/core';
import { DeliveryBoy } from 'src/app/shared/interfaces/delivery-boy';
import { ZoneUser } from 'src/app/shared/interfaces/hour';

@Component({
  selector: 'app-delivery-hours',
  templateUrl: './delivery-hours.component.html',
  styleUrls: ['./delivery-hours.component.scss']
})
export class DeliveryHoursComponent implements OnInit {
  @Input() hour: ZoneUser[];
  @Input() dBoys: DeliveryBoy[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.hour)
  }

}
