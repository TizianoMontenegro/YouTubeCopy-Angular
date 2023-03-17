import { Injectable, Output, EventEmitter } from '@angular/core';
import { Video } from './video.module';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  @Output() favoriteTriggerEvent: EventEmitter<Video> = new EventEmitter();

  constructor() { }
}
