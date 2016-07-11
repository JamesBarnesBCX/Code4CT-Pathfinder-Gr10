var searchParameter = getParameterByName('search');
var searchResults = [];

function searchBursaries(element, index, array){
  if(element.BursaryName.indexOf(searchParameter) > -1){
    searchResults.push(element);
  }
}

if(searchParameter){
  data.forEach(searchBursaries);
  searchResults.forEach(renderBursariesList);

  var pageDescriptor = document.getElementById("pageDescriptor");
  pageDescriptor.innerHTML = searchResults.length+" Results for the search \""+searchParameter+"\"";


  console.log("Search Term: "+searchParameter);
  console.table(searchResults);
}
