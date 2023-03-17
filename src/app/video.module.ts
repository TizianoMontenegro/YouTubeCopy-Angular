export class Video {
    img: string;
    logo: string;
    title: string;
    channel: string;
    date: string;
    constructor(
        img: string, 
        logo: string, 
        title: string, 
        channel: string, 
        date: string) {
        this.img = img;
        this.logo = logo;
        this.title = title;
        this.channel = channel;
        this.date = date;
    }
}