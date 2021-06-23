import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {CategoriaDto} from '../../model/categoria-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private httpC: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  categorias: CategoriaDto[];

  listAll(): Observable<CategoriaDto[]> {
    const url = `${environment.config.URL_API}/categoria/` ;
    return this.httpC.get<CategoriaDto[]>(url).pipe(
      map((categorias) => categorias)
    );
  }
  save(categoria: CategoriaDto): Observable<CategoriaDto>{
    const url = `${environment.config.URL_API}/categoria/add` ;
    return this.httpC.post<CategoriaDto>(url, categoria).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }

  edit(categoria: CategoriaDto): Observable<CategoriaDto>{
    const url = `${environment.config.URL_API}/categoria/edit` ;
    return this.httpC.put<CategoriaDto>(url, categoria).pipe(
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

  findById(id: number): Observable<CategoriaDto> {
    const url = `${environment.config.URL_API}/categoria/` ;
    return this.httpC.get<CategoriaDto>(url + id).pipe(
      map((categoria) => categoria),
      catchError( (e) => this.errorHandler(e))
    );
  }

  destroy(id: number): void {
    const url = `${environment.config.URL_API}/categoria/delete/` ;
    this.httpC.delete<CategoriaDto>(url + id).pipe(
      map((categoria) => categoria),
      catchError( (e) => this.errorHandler(e))
    );
  }

}
