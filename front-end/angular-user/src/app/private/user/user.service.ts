import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DEFAULT_API } from 'src/app/app.const';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Obter os usuários da API
   */
  public getUsers = (page?: number, perPage?: number) => {
    let params: String[] = [];
    if (page) params = params.concat(`page=${page}`);
    if (perPage) params = params.concat(`per_page=${perPage}`);

    return this.httpClient.get(
      DEFAULT_API + 'users' + (params.length > 0 ? '?' + params.join('&') : '')
    );
  };

  /**
   * Criar um usuário na API
   */
  public create(user: any) {
    return this.httpClient.post(
      DEFAULT_API + 'users', 
      JSON.stringify(user), 
      { headers: { 'Content-type': 'application/json' } })
  }
}
