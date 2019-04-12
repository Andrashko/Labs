class LikeImage {
    constructor(imageUrl){
        this.ImageUrl = imageUrl;
        this.Likes = 0;
        this.DomLikes = null;
        this.DomElement = null
    }

    render(parent) {
        let self = this;
        this.DomElement = document.createElement("div");
        this.DomElement.style.background = "gray";
        this.DomElement.style.marginTop = "20px";
        this.DomElement.style.width = "400px";

        let img = document.createElement("img");
        img.setAttribute("src", this.ImageUrl);
        img.style.width = "300px";
        img.style.display = "block"
        this.DomLikes = document.createElement("span");
        this.DomLikes.innerText = this.Likes + " Likes";
        this.DomLikes.style.textAlign = "left";
        img.onclick = function(){
            self.onImageClick();
        } 

        this.DomElement.appendChild(img);
        this.DomElement.appendChild(this.DomLikes);

        parent.appendChild(this.DomElement);
    }

    onImageClick() {
        this.Likes++;
        this.DomLikes.innerText = this.Likes + " Likes";
    }

    getStyle() {
        return this.style;
    }
}

let lis = [new LikeImage("https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"),
            new LikeImage("https://cdn.pixabay.com/photo/2017/04/05/11/56/image-in-the-image-2204798_960_720.jpg"),
            new LikeImage("https://codepo8.github.io/canvas-images-and-pixels/img/horse.png"),
            new LikeImage("https://resizing.flixster.com/RTEPRtAo8V2i6rhWstiQiQdahDc=/300x300/v1.bjsxOTM1NDIyO2o7MTgwNjc7MTIwMDs2NjA7OTAw"),
            new LikeImage("https://wi-images.condecdn.net/image/mprkxvalzk4/crop/405/landscape/f/141213_web.jpg")]

let parent = document.getElementById("images");
lis.forEach(x => x.render(parent));
