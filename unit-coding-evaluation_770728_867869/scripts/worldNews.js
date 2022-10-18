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

var ar = JSON.parse(localStorage.getItem("user")) || {};

// console.log(ar.country);
async function defalt() {
  //   let val = ar[0].country;

  try {
    let res = await fetch(
      `https://masai-api.herokuapp.com/news/top-headlines?country=${ar.country}`
    );
    let dat = await res.json();
    console.log(dat.articles);
    display(dat.articles);
  } catch (er) {
    console.log(er);
  }
}
defalt();

function display(aray) {
  document.getElementById("news_result").innerHTML = "";
  console.log("hi1");
  aray.map((el) => {
    // console.log(el.url);
    document.getElementById("news_result");
    let div = document.createElement("div");
    div.setAttribute("class", "news");

    div.addEventListener("click", () => {
      localStorage.setItem("detailnew", JSON.stringify(el));
      location.href = "news.html";
    });
    let h3 = document.createElement("h3");
    h3.innerText = `${el.source.name}`;
    let p = document.createElement("p");
    p.innerText = `${el.title}`;
    let img = document.createElement("img");
    img.src = `${el.urlToImage}`;
    div.append(img, h3, p);
    document.getElementById("news_result").append(div);
  });
}

document.querySelector("form").addEventListener("submit", search);
async function search() {
  event.preventDefault();
  var value = document.getElementById("search_box").value;
  try {
    let res = await fetch(`https://masai-api.herokuapp.com/news?q=${value}`);
    let dat = await res.json();
    console.log(dat.articles);
    show(dat.articles);
  } catch (er) {
    console.log(er);
  }
}

function show(aray) {
  document.getElementById("news_result").innerHTML = "";
  console.log("hi2");
  aray.map((el, index) => {
    // console.log(el.url);
    document.getElementById("news_result");
    let div = document.createElement("div");
    div.addEventListener("click", () => {
      localStorage.setItem("detailnew", JSON.stringify(el));
      location.href = "news.html";
    });

    div.setAttribute("class", "news");
    let h3 = document.createElement("h3");
    h3.innerText = `${el.source.name}`;
    let p = document.createElement("p");
    p.innerText = `${el.title}`;
    let img = document.createElement("img");
    img.src = `${el.urlToImage}`;
    div.append(img, h3, p);
    document.getElementById("news_result").append(div);
  });
}

async function usa() {
  //   let val = ar[0].country;
  try {
    let res = await fetch(
      `https://masai-api.herokuapp.com/news/top-headlines?country=us`
    );
    let dat = await res.json();
    console.log(dat.articles);
    display(dat.articles);
  } catch (er) {
    console.log(er);
  }
}

async function india() {
  //   let val = ar[0].country;
  try {
    let res = await fetch(
      `https://masai-api.herokuapp.com/news/top-headlines?country=in`
    );
    let dat = await res.json();
    console.log(dat.articles);
    display(dat.articles);
  } catch (er) {
    console.log(er);
  }
}

async function uk() {
  //   let val = ar[0].country;
  try {
    let res = await fetch(
      `https://masai-api.herokuapp.com/news/top-headlines?country=uk`
    );
    let dat = await res.json();
    console.log(dat.articles);
    display(dat.articles);
  } catch (er) {
    console.log(er);
  }
}

async function china() {
  //   let val = ar[0].country;
  try {
    let res = await fetch(
      `https://masai-api.herokuapp.com/news/top-headlines?country=ch`
    );
    let dat = await res.json();
    console.log(dat.articles);
    display(dat.articles);
  } catch (er) {
    console.log(er);
  }
}

async function nz() {
  //   let val = ar[0].country;
  try {
    let res = await fetch(
      `https://masai-api.herokuapp.com/news/top-headlines?country=nz`
    );
    let dat = await res.json();
    console.log(dat.articles);
    display(dat.articles);
  } catch (er) {
    console.log(er);
  }
}
