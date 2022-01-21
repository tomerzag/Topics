import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from 'src/app/dtos/topic';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  relatedTopicsUrl: string = `${environment.serverUrl}/api/Topics`;

  constructor(private http: HttpClient) { }

  searchRelatedTopic(query: string) {
    return this.http.get<Topic[]>(`${this.relatedTopicsUrl}/search?query=${query}`);
  }
}
