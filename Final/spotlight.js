
// let click_it=0
// let sum1=0
// let the=document.getElementsByClassName("average")
// let stars=document.getElementsByClassName("star-jango")
// let ratings=[]
// // console.log(stars)
// for(let star of stars){
//     // click_it=click_it+1;
//     star.addEventListener("click",function(){
//     click_it=click_it+1;
//     // console.log(this.value);
//     let data={
//         click_number:click_it,
//         rating_given:this.value,
//     }
//     ratings.push(this.value);
//     console.log(data.rating_given , data.click_number);
//     // console.log(this.value)
//     myFunction(this.value,click_it);
//     // sum1=sum1+this.value;
//     // let t=(sum1)/(click_it);
//     // console.log(t);
//     // the.text="Average Rating: "+t;
//     });    
// }
var nameOf = "Name";
let rating_g;
var rev = "I like this artist";
function myFunction(rating_f, nameOfPerson, review_content) {
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = nameOfPerson;
  cell2.innerHTML = rating_f;
  cell3.innerHTML = review_content;
}
let stars = document.getElementsByClassName("star-jango")
let submit = document.getElementById("submit")
let naam = document.getElementById("naam")
let reve = document.getElementById("reve")

for (let star of stars) {
  star.addEventListener("click", function () {
    rating_g = this.value;
  });
}

submit.addEventListener("click", function () {
  // for(let star of stars)
  // {
  //   star.addEventListener("click",function(){
  //     rating_g=this.value;
  //   });
  // }
  nameOf = naam.value;
  rev = reve.value;
  myFunction(rating_g, nameOf, rev);
  naam.value = "";
  reve.value = "";

});




