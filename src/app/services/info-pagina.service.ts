import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
     this.cargarInfo();
     this.cargarEquipo();
  }

  private cargarInfo() {
    // console.log('servicio de infopagina listo');
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {
        // console.log(resp);
        this.cargada = true;
        this.info = resp;
        });
  }

  private cargarEquipo() {
    // console.log('servicio de infopagina listo');
    this.http.get('https://angular-html-b061a.firebaseio.com/equipo.json')
        .subscribe( (resp: any[]) => {
        // console.log(resp);
        this.equipo = resp;
        // console.log(resp);
      });
  }

}
