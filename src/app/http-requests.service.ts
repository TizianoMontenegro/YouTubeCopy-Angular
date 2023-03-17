import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpRequestsService {

  constructor(private httpClient: HttpClient) { }
}
