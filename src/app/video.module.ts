export class Video {
    img: string;
    gif: string;
    logo: string;
    title: string;
    channel: string;
    date: string;
    constructor(
        img: string, 
        gif: string, 
        logo: string, 
        title: string, 
        channel: string, 
        date: string) {
        this.img = img;
        this.gif = gif;
        this.logo = logo;
        this.title = title;
        this.channel = channel;
        this.date = date;
    }
}