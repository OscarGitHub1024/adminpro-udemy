import Swal from 'sweetalert2'
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../..//config/config';
import { retry, map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario:Usuario;
  token:string;

  constructor(public http:HttpClient) { 
    console.log('Servicio de usuario listo');
  }

  guardarStorage(id:string, token:string, usuario:Usuario){
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  loginGoogle(token:string){
    let url = URL_SERVICIOS + '/login/google';

    return this.http.post(url, {token}).pipe(map((resp:any)=>{
      this.guardarStorage(resp.id, resp.token, resp.usuario);
      return true;
    }));
  }

  login(usuario:Usuario, recordar:boolean = false){

    if(recordar){
      localStorage.setItem('email', usuario.email);
    }else{
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';

    return this.http.post(url, usuario).pipe(
      map((resp:any) =>{ 

        this.guardarStorage(resp.id, resp.token, resp.usuario);

        return true;
      }));
  }

  crearUsuario(usuario:Usuario){
    let url = URL_SERVICIOS + '/usuario';

    return this.http.post(url, usuario).pipe(map(
      (resp:any) =>{ 
        Swal.fire('Usuario creado', usuario.email, 'success');
        return resp.usuario;
      }));
  }
}
