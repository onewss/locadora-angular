import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ModeloDto} from '../../model/modelo-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  constructor(
    private httpC: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  modelos: ModeloDto[];

  listAll(): Observable<ModeloDto[]> {
    const url = `${environment.config.URL_API}/modelo/` ;
    return this.httpC.get<ModeloDto[]>(url).pipe(
      map((modelos) => modelos)
    );
  }
  save(modelo: ModeloDto): Observable<ModeloDto>{
    const url = `${environment.config.URL_API}/modelo/add` ;
    return this.httpC.post<ModeloDto>(url, modelo).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }

  edit(modelo: ModeloDto): Observable<ModeloDto>{
    const url = `${environment.config.URL_API}/modelo/edit` ;
    return this.httpC.put<ModeloDto>(url, modelo).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true );
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  findById(id: number): Observable<ModeloDto> {
    const url = `${environment.config.URL_API}/modelo/` ;
    return this.httpC.get<ModeloDto>(url + id).pipe(
      map((modelo) => modelo),
      catchError( (e) => this.errorHandler(e))
    );
  }

  destroy(id: number): void {
    const url = `${environment.config.URL_API}/modelo/delete/` ;
    this.httpC.delete<ModeloDto>(url + id).pipe(
      map((modelo) => modelo),
      catchError( (e) => this.errorHandler(e))
    );
  }

}
