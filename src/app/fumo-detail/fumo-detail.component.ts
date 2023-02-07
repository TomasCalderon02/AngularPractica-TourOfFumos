import { Component, Input, OnInit } from '@angular/core';
import { Fumos } from '../Fumos';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FumoServiceService } from '../fumo-service.service';

@Component({
  selector: 'app-fumo-detail',
  templateUrl: './fumo-detail.component.html',
  styleUrls: ['./fumo-detail.component.css']
})
export class FumoDetailComponent implements OnInit {
  fumo: Fumos|undefined;

  constructor(
    private route:ActivatedRoute,
    private fumoService:FumoServiceService,
    private location:Location
    ) {}

    ngOnInit(): void {
      this.getFumo();
    }

    save(): void{
      if (this.fumo){
        this.fumoService.updateFumo(this.fumo)
        .subscribe(() => this.goBack());
      }
    }

    getFumo():void{
      const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
      this.fumoService.getFumo(id)
      .subscribe(fumo => this.fumo=fumo);
    }

    goBack():void{
      this.location.back();
    }
}
