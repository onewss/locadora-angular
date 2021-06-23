import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {GrupoDto} from '../../model/grupo-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(
    private httpC: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  grupos: GrupoDto[];

  listAll(): Observable<GrupoDto[]> {
    const url = `${environment.config.URL_API}/grupo/` ;
    return this.httpC.get<GrupoDto[]>(url).pipe(
      map((grupos) => grupos)
    );
  }
  save(grupo: GrupoDto): Observable<GrupoDto>{
    const url = `${environment.config.URL_API}/grupo/add` ;
    return this.httpC.post<GrupoDto>(url, grupo).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }

  edit(grupo: GrupoDto): Observable<GrupoDto>{
    const url = `${environment.config.URL_API}/grupo/edit` ;
    return this.httpC.put<GrupoDto>(url, grupo).pipe(
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

  findById(id: number): Observable<GrupoDto> {
    const url = `${environment.config.URL_API}/grupo/` ;
    return this.httpC.get<GrupoDto>(url + id).pipe(
      map((grupo) => grupo),
      catchError( (e) => this.errorHandler(e))
    );
  }

  destroy(id: number): void {
    const url = `${environment.config.URL_API}/grupo/delete/` ;
    this.httpC.delete<GrupoDto>(url + id).pipe(
      map((grupo) => grupo),
      catchError( (e) => this.errorHandler(e))
    );
  }

}
