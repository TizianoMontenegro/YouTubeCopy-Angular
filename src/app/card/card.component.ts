import { Component, Input, OnInit } from '@angular/core';
import { Video } from './../video.module';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data!: Video;
  img!: string;
  logo!: string;
  title!: string;
  channel!: string;
  date!: string;

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.img = this.data.img;
    this.logo = this.data.logo;
    this.title = this.data.title;
    this.channel = this.data.channel;
    this.date = this.data.date;
  }

  cons() {
    // console.log(this.data);
    this.videoService.favoriteTriggerEvent.emit(this.data);
  }
}
