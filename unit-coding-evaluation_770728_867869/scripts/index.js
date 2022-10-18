/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
let arr = [];
document.getElementById("submit").addEventListener("click", () => {
  event.preventDefault();
  let name = document.getElementById("user_name").value;
  let image = document.getElementById("user_pic").value;
  let email = document.getElementById("user_email").value;
  let country = document.getElementById("user_country").value;

  obj = {
    name: name,
    image: image,
    email: email,
    country: country,
  };

  if (name == "" || image == "" || email == "" || country == "") {
    return;
  }

  localStorage.setItem("user", JSON.stringify(obj));
  console.log(name, country);
});
