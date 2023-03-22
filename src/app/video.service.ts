import { Injectable, Output, EventEmitter } from '@angular/core';
import { Video } from './video.module';

@Injectable()

export class VideoService {
  @Output() favoriteTriggerEvent: EventEmitter<Video> = new EventEmitter();

  constructor() { }
}
