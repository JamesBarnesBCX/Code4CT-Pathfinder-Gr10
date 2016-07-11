function renderBursariesList(bursary) {

  var title = document.createElement("div");
  title.className = "Title";

  var heading = document.createElement("h3");
  var text = document.createTextNode(bursary.BursaryName);
  heading.appendChild(text);
  title.appendChild(heading);

  var bursaryBy = document.createElement("small");
  var bursaryByText = document.createTextNode(bursary.By);
  bursaryBy.appendChild(bursaryByText);
  title.appendChild(bursaryBy);

  var content = document.getElementById("content");
  content.appendChild(title);
}

var indexParameter = getParameterByName('index');
var bursary = data[indexParameter];

renderBursariesList(bursary);
