import { VideoService } from './../video.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  videos: {img: string, title: string}[] = []

  constructor(private videoService: VideoService) {}
  ngOnInit() {
    this.videoService.favoriteTriggerEvent.subscribe(data => {
      console.log("Data cargada", data);
      this.videos.push({img: data.img, title: data.title})
    })
  }
}
