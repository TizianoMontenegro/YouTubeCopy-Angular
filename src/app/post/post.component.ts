import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestsService } from './../http-requests.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  data!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpRequestsService: HttpRequestsService) {}

  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap
      console.log(params.variable)
      this.loadData(params.variable)
    })
  }

  loadData(param: any) {
    this.httpRequestsService.load("assets/videos-api.json").subscribe((data: any) => {
      this.data = data[param]
      console.log(this.data)
    })
  }

}
