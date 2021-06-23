import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LocacaoDto} from '../../model/locacao-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  constructor(
    private httpC: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  locacoes: LocacaoDto[];

  listAll(): Observable<LocacaoDto[]> {
    const url = `${environment.config.URL_API}/locacao/` ;
    return this.httpC.get<LocacaoDto[]>(url).pipe(
      map((locacoes) => locacoes)
    );
  }
  save(locacao: LocacaoDto): Observable<LocacaoDto>{
    const url = `${environment.config.URL_API}/locacao/add` ;
    return this.httpC.post<LocacaoDto>(url, locacao).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }

  edit(locacao: LocacaoDto): Observable<LocacaoDto>{
    const url = `${environment.config.URL_API}/locacao/edit` ;
    return this.httpC.put<LocacaoDto>(url, locacao).pipe(
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

  findById(id: number): Observable<LocacaoDto> {
    const url = `${environment.config.URL_API}/locacao/` ;
    return this.httpC.get<LocacaoDto>(url + id).pipe(
      map((locacao) => locacao),
      catchError( (e) => this.errorHandler(e))
    );
  }

  destroy(id: number): void {
    const url = `${environment.config.URL_API}/locacao/delete/` ;
    this.httpC.delete<LocacaoDto>(url + id).pipe(
      map((locacao) => locacao),
      catchError( (e) => this.errorHandler(e))
    );
  }

}
