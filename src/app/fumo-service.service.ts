import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Fumos } from './Fumos';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class FumoServiceService {

  /* Cadena de conexion al servidor externo, mediante la API
   In-Memory Web se conecta a la const Fumos=[(datos)] dentro
   del metodo createDb en in-memory-data.service.ts */
  private fumosUrl = 'api/fumos';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  
  /* Muestra un mensaje error si falla algo, 
  recibe el nombre de la operacion que fallo */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /* Funcionalidad basica de cada metodo
    pipe: recibe el error
    tap: envia mensajes

    nombreMetodo(variable:TipoDeVariable): Observable<TipoDeVariable>{
      return this.http.(request)<tipo>(datos varios, depende)
      .pipe(tap(mensaje de log,
      catchError(this.handleError<TipoDeVariable>('mensaje de error')))
      );
    }
  */

  /* POST: Agregar Fumo en el servidor */
  addFumo(fumo:Fumos): Observable<Fumos>{
    return this.http.post<Fumos>(this.fumosUrl, fumo, this.httpOptions)
    .pipe(tap((newFumo:Fumos) => this.log(`added Fumo with ID=${newFumo.id}`)),
    catchError(this.handleError<Fumos>('addFumo'))
    );
  }


  /* PUT: Modificar Fumo en el servidor */
  updateFumo(fumo:Fumos):Observable<any>{
    return this.http.put(this.fumosUrl, fumo, this.httpOptions)
    .pipe(tap(_ => this.log(`updated Fumo ID=${fumo.id}`)),
    catchError(this.handleError<any>('updateHero'))
    );
  }

  /* DELETE: Eliminar Fumo en el servidor */
  deleteFumo(id: number): Observable<Fumos>{
    const url = `${this.fumosUrl}/${id}`;

    return this.http.delete<Fumos>(url, this.httpOptions)
    .pipe(tap(_ => this.log(`deleted Fumo ID=${id}`)),
    catchError(this.handleError<Fumos>('deleteFumo'))
    );
  }

  /* GET: Buscar Fumo por su nombre en el servidor */
  searchFumos(busqueda:string):Observable<Fumos[]>{
    if (!busqueda.trim()){
      return of([]);
    }else{
      return this.http.get<Fumos[]>(`${this.fumosUrl}/?name=${busqueda}`)
      .pipe(tap(x => x.length ?
        this.log(`found Fumos matching "${busqueda}"`):
        this.log(`no fumos matching "${busqueda}"`)
        ),
        catchError(this.handleError<Fumos[]>('searchFumos'))
        );
    }
  }

  /*GET: Buscar Fumo por ID */
  getFumo(id: number):Observable<Fumos>{
    const url = `${this.fumosUrl}/${id}`;

    return this.http.get<Fumos>(url).pipe(
      tap(_ => this.log(`fetched Fumo ID=${id}`)),
      catchError(this.handleError<Fumos>(`getFumo id=${id}`))
    );
  }

  /*GET: Obtener todos los Fumos del servidor*/
  getFumos(): Observable<Fumos[]>{
    return this.http.get<Fumos[]>(this.fumosUrl)
    .pipe(tap(_ => this.log('fetched Fumos')),
    catchError(this.handleError<Fumos[]>('getFumos', []))
    );
  }

  /* Buscar por ID Alternativo */
  getFumoNo404<Data>(id: number): Observable<Fumos> {
    const url = `${this.fumosUrl}/?id=${id}`;
    return this.http.get<Fumos[]>(url)
      .pipe(
        map(fumos => fumos[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Fumos>(`getHero id=${id}`))
      );
  }

  /* Enviar mensajes por messageService */
  private log(message:string){
    this.messageService.add(`FumoService:${message}`);
  }
}
