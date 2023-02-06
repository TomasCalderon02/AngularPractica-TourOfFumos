import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Fumos } from './Fumos';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const fumos = [
      {
        id:1,
        name:'Reimu',
        img:'https://i.ebayimg.com/images/g/5WQAAOSw6EVfbIGN/s-l400.jpg',
        gSearch:'https://www.google.com/search?q=reimu+fumo'
    },
    {
        id: 2,
        name: 'Marisa',
        img: 'https://i.ebayimg.com/images/g/kGMAAOSwYxBclJ7o/s-l400.jpg',
        gSearch:'https://www.google.com/search?q=marisa+fumo'
    },
    {
        id: 3,
        name: 'Sakuya',
        img: 'https://i.ebayimg.com/images/g/unQAAOSwadNiL17o/s-l400.jpg',
        gSearch:'https://www.google.com/search?q=sakuya+fumo'
    },
    {
        id: 4,
        name: 'Remilia',
        img: 'https://i.ebayimg.com/images/g/reEAAOSwlIZgjp0-/s-l400.jpg',
        gSearch:'https://www.google.com/search?q=remilia+fumo'
    },
    {
        id: 5,
        name: 'Patchouli',
        img: 'https://i.ebayimg.com/images/g/1J0AAOSwvhRjp2Fv/s-l400.jpg',
        gSearch:'https://www.google.com/search?q=patchouli+fumo'
    },
    {
        id: 6,
        name: 'Flandre',
        img: 'https://i.ebayimg.com/images/g/9f4AAOSwOIdhqOey/s-l400.jpg',
        gSearch:'https://www.google.com/search?q=flandre+fumo'
    },
    {
        id: 7,
        name: 'Yuyuko',
        img: 'https://i.ebayimg.com/images/g/GIUAAOSwalpiaOFg/s-l400.jpg',
        gSearch:'https://www.google.com/search?q=yuyuko+fumo'
    },
    {
        id: 8,
        name: 'Youmu',
        img: 'https://i.ebayimg.com/images/g/zroAAOSwi2Fgp2CY/s-l400.jpg',
        gSearch:'https://www.google.com/search?q=youmu+fumo'
    },
    {
        id: 9,
        name: 'Cirno',
        img: 'https://i.ebayimg.com/images/g/Nn4AAOSwYkxi15YT/s-l400.jpg',
        gSearch:'https://www.google.com/search?q=cirno+fumo'
    },
    {
        id: 10,
        name: 'Alice',
        img: 'https://i.ebayimg.com/images/g/~soAAOSw1dthysVE/s-l400.jpg',
        gSearch:'https://www.google.com/search?q=alice+fumo'
    },
    ];
    return{fumos};
  }
  
  genId(fumos:Fumos[]): number{
    return fumos.length > 0 ? Math.max(...fumos.map(fumo=>fumo.id)) + 1:1;
  }
}
