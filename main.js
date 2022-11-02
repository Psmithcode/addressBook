let apiArray = [];

const getMultipleUsers = () => {
  fetch("https://randomuser.me/api/?results=4")
    .then((response) => response.json())
    .then((data) => apiArray.push(data));
  console.log(apiArray);
  return apiArray;
};

const logUsers = () => {
  console.log(getMultipleUsers());
};

const displayUsers = () => {
  const addressBook = document.getElementById("addressBook");
  for (let i = 0; i < 5; i++) {
    let p = document.createElement("p");
    let li = document.createElement("li");
    let article = document.createElement("article");
    let articleText = document.createTextNode(
      `Email: ${apiArray[0].results[i].email} Gender: ${apiArray[0].results[i].gender}`
    );
    article.appendChild(articleText);
    li.id = `li${i}`;
    let contacts = document.createTextNode(
      `Name: ${apiArray[0].results[i].name.first}`
    );
    let img = document.createElement("img");
    img.src = apiArray[0].results[i].picture.large;
    let br = document.createElement("br");
    const button = document.createElement("button");
    button.innerHTML = "Show more";
    button.classList = "buttons";

    p.appendChild(contacts);
    p.appendChild(br);
    p.appendChild(img);
    li.append(p);
    li.append(article);
    // article.style.visibility = "hidden";
    li.append(button);

    addressBook.append(li);

    addressBook.style.listStyle = "none";
    button.onclick = function () {
      if ((article.style.display = "none")) {
        article.style.display = "inline";
      } else {
        article.style.display = "none";
      }
    };
  }
};

//8.Fetch multiple users on window load

//9.Add a button to each user that when clicked displays the rest of their information like DOB,
// address and so forth
//10.Once you have the functionality working, feel free to style and structure your address
//book with CSS and HTML

window.onload(getMultipleUsers());
window.onload(displayUsers());
