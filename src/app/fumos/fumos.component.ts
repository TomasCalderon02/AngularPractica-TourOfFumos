import { Component, OnInit } from '@angular/core';
import { Fumos } from '../Fumos';
import { FumoServiceService } from '../fumo-service.service';

@Component({
  selector: 'app-fumos',
  templateUrl: './fumos.component.html',
  styleUrls: ['./fumos.component.css']
})
export class FumosComponent implements OnInit {
  fumos: Fumos[] = [];

  constructor(private fumoService: FumoServiceService) { }

  ngOnInit(): void {
    this.getFumos();
  }

  getFumos(): void {
    this.fumoService.getFumos().subscribe(fumos => this.fumos = fumos);
  }
  
  add(name: string, img:string, gSearch:string){
    name = name.trim();
    img = img.trim();
    gSearch = img.trim();

    /* preguntar porque funciona si agrega name y img */
    if (!name || !img || !gSearch) {
      return alert('Name, img or search are empty ᗜˬᗜ');
    }else{
      this.fumoService.addFumo({name, img, gSearch} as Fumos)
      .subscribe(fumo => {this.fumos.push(fumo)});
    }
  }

  delete(fumo:Fumos): void{
    this.fumos = this.fumos.filter(f => f !== fumo);
    this.fumoService.deleteFumo(fumo.id).subscribe();
  } 

  

}

