import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {VeiculoDto} from '../../model/veiculo-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(
    private httpC: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  veiculos: VeiculoDto[];

  listAll(): Observable<VeiculoDto[]> {
    const url = `${environment.config.URL_API}/veiculo/` ;
    return this.httpC.get<VeiculoDto[]>(url).pipe(
      map((veiculos) => veiculos)
    );
  }
  save(veiculo: VeiculoDto): Observable<VeiculoDto>{
    const url = `${environment.config.URL_API}/veiculo/add` ;
    return this.httpC.post<VeiculoDto>(url, veiculo).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }

  edit(veiculo: VeiculoDto): Observable<VeiculoDto>{
    const url = `${environment.config.URL_API}/veiculo/edit` ;
    return this.httpC.put<VeiculoDto>(url, veiculo).pipe(
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

  findById(id: number): Observable<VeiculoDto> {
    const url = `${environment.config.URL_API}/veiculo/` ;
    return this.httpC.get<VeiculoDto>(url + id).pipe(
      map((veiculo) => veiculo),
      catchError( (e) => this.errorHandler(e))
    );
  }

  destroy(id: number): void {
    const url = `${environment.config.URL_API}/veiculo/delete/` ;
    this.httpC.delete<VeiculoDto>(url + id).pipe(
      map((veiculo) => veiculo),
      catchError( (e) => this.errorHandler(e))
    );
  }

}
