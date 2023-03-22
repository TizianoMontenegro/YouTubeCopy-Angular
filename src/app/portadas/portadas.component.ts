import { Component, OnInit } from '@angular/core';
import { Video } from '../video.module';
import { HttpRequestsService } from '../http-requests.service';

@Component({
  selector: 'app-portadas',
  templateUrl: './portadas.component.html',
  styleUrls: ['./portadas.component.css']
})
export class PortadasComponent implements OnInit{
  
  videos: Video[] = []

  constructor(private httpRequestsService: HttpRequestsService) {}

  ngOnInit():void {
    this.httpRequestsService.load("assets/videos-api.json").subscribe(data => {
      console.log(data)
      this.videos = Object.values(data)
    })
  }
}
