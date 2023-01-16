import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine.model';
@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  medicines: Medicine[] = [
    new Medicine('Test medicine','this is a test medicine','https://medlineplus.gov/images/Medicines_share.jpg')
    ,
  ];
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
