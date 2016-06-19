var searchParameter = getParameterByName('search');
var searchResults = [];

function searchCareers(element, index, array){
  if(element.careerTitle.indexOf(searchParameter) > -1){
    searchResults.push(element);
  }
}

if(searchParameter){
  careers.forEach(searchCareers);
  searchResults.forEach(renderCareersList);

  var pageDescriptor = document.getElementById("pageDescriptor");
  pageDescriptor.innerHTML = searchResults.length+" Results for the search \""+searchParameter+"\"";


  console.log("Search Term: "+searchParameter);
  console.table(searchResults);
}
