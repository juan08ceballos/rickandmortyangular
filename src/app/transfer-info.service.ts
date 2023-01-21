import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferInfoService {
  private readonly URL = 'https://rickandmortyapi.com/api/character/?page=';
  private readonly URL2 = 'https://rickandmortyapi.com/api/character/';
  public page = 1;
  public idCharacter = 1;

  callback: EventEmitter<any> = new EventEmitter<any>();
  callback2: EventEmitter<any> = new EventEmitter<any>();


  constructor(private http: HttpClient) {}

  getAllCharacters$(): Observable<any> {
    return this.http.get(`${this.URL}${this.page}`);
  }

  getOneCharacter$(): Observable<any> {
    return this.http.get(`${this.URL2}${this.idCharacter}`);
  }
}
