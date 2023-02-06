import { Component, OnInit } from '@angular/core';
import { Fumos } from '../Fumos';
import { FumoServiceService } from '../fumo-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fumos: Fumos[]=[];

  constructor(private fumoService: FumoServiceService){

  }
  ngOnInit(): void {
    this.getFumos();
  }

  getFumos(): void{
    this.fumoService.getFumos().subscribe(fumos => this.fumos = fumos.slice(1,5))
  }
}
