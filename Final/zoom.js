
let zoom=document.getElementById("image_prithvi")
let dete=document.getElementsByClassName("album-art-1")
let dete2=document.getElementsByClassName("album-art-hover")

console.log(zoom.classList.contains("album-art-1"))
if(zoom.classList.contains("album-art-1")){
    zoom.addEventListener("mouseover",function(){
        this.classList.remove("album-art-1");
        this.classList.add("album-art-hover");
        if(zoom.classList.contains("album-art-hover")){
            zoom.addEventListener("mouseout",function(){
                this.classList.remove("album-art-hover");
                this.classList.add("album-art-1");
            });
        }
    });
}
console.log(zoom.classList.contains("album-art-hover"))

let zoom2=document.getElementById("gitt")
if(zoom2.classList.contains("gift-img")){
    zoom2.addEventListener("mouseover",function(){
        this.classList.remove("gift-img");
        this.classList.add("gift-img-1");
        if(zoom2.classList.contains("gift-img-1")){
            zoom2.addEventListener("mouseout",function(){
                this.classList.remove("gift-img-1");
                this.classList.add("gift-img");
            });
        }
    });
}

