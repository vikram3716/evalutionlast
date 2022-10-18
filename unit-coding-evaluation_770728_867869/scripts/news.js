import { sidebar } from "./sidebar.js";
document.getElementById("sidebar").innerHTML = sidebar();

let arr = JSON.parse(localStorage.getItem("user")) || [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].country == "in") {
    document.getElementById("user_country").innerText = "india";
  }

  if (arr[i].country == "uk") {
    document.getElementById("user_country").innerText = "UK";
  }
  if (arr[i].country == "us") {
    document.getElementById("user_country").innerText = "USA";
  }
  if (arr[i].country == "nz") {
    document.getElementById("user_country").innerText = "Newzeland";
  }
  if (arr[i].country == "ch") {
    document.getElementById("user_country").innerText = "china";
  }
  document.getElementById("user_img").src = arr[i].image;
  document.getElementById("user_email").innerText = arr[i].email;
  document.getElementById("user_name").innerText = arr[i].name;
}

let arry = JSON.parse(localStorage.getItem("detailnew")) || {};
console.log(arry);
display(arry);
function display(el) {
  document.getElementById("detailed_news").innerHTML = "";
  console.log("hi1");

  let h3 = document.createElement("h3");
  h3.innerText = `${el.title}`;
  let p = document.createElement("h4");
  p.innerText = `${el.description}`;
  let img = document.createElement("img");
  img.src = `${el.urlToImage}`;

  document.getElementById("detailed_news").append(img, h3, p);
}
