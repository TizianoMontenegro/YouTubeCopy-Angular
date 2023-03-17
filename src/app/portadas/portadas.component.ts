import { Component } from '@angular/core';
import { Video } from '../video.module';

@Component({
  selector: 'app-portadas',
  templateUrl: './portadas.component.html',
  styleUrls: ['./portadas.component.css']
})
export class PortadasComponent {
  
  videos: Video[] = [
    new Video(
      "https://i.ytimg.com/vi/B3BT10i8B8c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCr_ZOAdV-z_-43SKYFsHsC6qY36g",
      "https://yt3.ggpht.com/jHzxOlxezSPlDUFenY8HHY4k-Z7y63rF7mAbZd1pECoGqbs5lEtOhEEmKGnSHNT6faTeCSTo=s48-c-k-c0x00ffffff-no-rj",
      "🔴Live YouTalk TV #020 - ¿Cómo ENTENDER cuando te HABLAN RÁPIDO en INGLÉS?",
      "YouTalk TV",
      "24,826 vistas - Transmitido hace 5 meses"
    ),
    new Video(
      "https://i.ytimg.com/vi/cPqyyreyyXQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG_XXO1h_4R0rkn0qgBRU-WLy8nA",
      "https://yt3.ggpht.com/ytc/AL5GRJW7b3svLw3ITZ_ciyK5PHqb1O1HPCjMbrHWi9sRVQ=s68-c-k-c0x00ffffff-no-rj",
      "Curl De Antebrazo Con Barra / Barbell Wrist Curl",
      "WorkoutCoach",
      "73 vistas - hace 1 día"
    ),
    new Video(
      "https://i.ytimg.com/vi/LFGEW_pF7SE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2YFIffsLsBngGkrjZUsJ9aG9BUQ",
      "https://yt3.ggpht.com/ytc/AL5GRJWvvFEaRr2Aue3aNbGzyXXwkKgUralnOLm3mGS5Dg=s68-c-k-c0x00ffffff-no-rj",
      "Incredible Rainbow Cloud Found in China",
      "Daily Dose Of Internet",
      "29 M de vistas - hace 8 meses"
    ),
    new Video(
      "https://i.ytimg.com/vi/R4Wi_d7f-Yo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQkE6KlouSXELYhNNvj4RiE8w4ag",
      "https://yt3.ggpht.com/ytc/AL5GRJU0wvodGQeAnNeJQjT5-1YyzMzq9ys6S6ws2jk6Rw=s68-c-k-c0x00ffffff-no-rj",
      "I Played This at My Funeral ... Now I'm Back (Calisthenics)",
      "Noa Man WORKOUT",
      "223,999 vistas - hace 2 años"
    ),
  ]

  // gifActive(id: number, e: Event) {
  //   let img = this.videos[id].img;
  //   let gif = this.videos[id].gif;
  //   e.target?.addEventListener("mouseover", () => {
  //     this.videos[id].img = gif;
  //   })
  //   e.target?.addEventListener("mouseleave", () => {
  //     this.videos[id].img = img;
  //   })
  // }
}
