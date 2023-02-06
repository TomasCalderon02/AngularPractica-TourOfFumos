import { Component,OnInit } from '@angular/core';
import { Fumos } from '../Fumos';
import { FumoServiceService } from '../fumo-service.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-fumos',
  templateUrl: './fumos.component.html',
  styleUrls: ['./fumos.component.css']
})
export class FumosComponent implements OnInit {
selectedFumo?: Fumos;
fumos : Fumos[] = [];

constructor(private fumoService: FumoServiceService){

}

ngOnInit(): void{
  this.getFumos();
}

getFumos(): void{
  this.fumoService.getFumos().subscribe(fumos => this.fumos=fumos);
}
}

