// local reviews data
const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "web developer",
      img:
        "images/Group 117.png",
      img1:
        "/images/Group 115.png",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Anna Johnson",
      job: "web designer",
      img:
        "images/Group 117.png",
      img1:
        "/images/Group 115.png",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 3,
      name: "Peter Jones",
      job: "intern",
      img:
        "images/Group 117.png",
      img1:
        "/images/Group 115.png",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    
  ];

let img1= document.getElementById('imgPer1');
let img = document.getElementById('imgPer');
let author = document.getElementById('author');
let job = document.getElementById('job');
let info = document.getElementById('info');
let rightbtn = document.getElementById('right-btn');
let leftbtn = document.getElementById('left-btn');
let randombtn = document.getElementById('randombtn');

let currentItme = 0;

window.addEventListener('DOMContentLoaded',function(){
    ShowPerons(currentItme);
})

function ShowPerons(person){
    const item =  reviews[person];
    img1.src = item.img1;
    img.src = item.img;
    author.textContent = item.name;
    // job.textContent = item.job;
    info.textContent = item.text;
}

leftbtn.addEventListener("click",function(){
    currentItme++;
    if(currentItme > reviews.length-1){
        currentItme=0;
    }
    ShowPerons(currentItme);
    console.log("Next");
});

rightbtn.addEventListener("click",function(){
    currentItme--;
    if(currentItme < 0){
        currentItme = reviews.length-1;
    }
    ShowPerons(currentItme);
    console.log("Back");
});

randombtn.addEventListener("click",function(){

})