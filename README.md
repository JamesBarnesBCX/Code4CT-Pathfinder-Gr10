# Code4CapeTown Grade 10 Pathfinder Project
##Pathfinder
Welcome keen young minds, James here and **this** is Pathfinder. 

###What is Pathfinder
Pathfinder is designed to help people learn more about what careers are out there for them and how to get there. This is a template for you to build around and play with, ideally allowing you to build something you are proud of more easily and allowing you to focus on the tools you have aquired recently.

###What must you do?
Build out this structure into a working site which offers as much functionality, usability and style you have time for. We will discuss together exactly how you are going to split the work but lets go over some of the core functionality:
* View a list of all careers
* Search for a career
* View career details
* An about us page with details about the team who worked on project (Pictures, summary, school, what they did etc.)

Some other features may include:
* Qualifications (List, view details, search, link to associated careers institutions)
* Institutions (List, view details, search, link to qualifications offered and bursaries available)
* Bursaries (List, view details, search, link to related qualifications and institutions)
* If you have added qualifications then links between the career and its relevant qualification
* Pagination of result lists (both viewing all of say careers or search results). Paginiation is where you break up your list into smaller subsets and can click "previous" or "next" to get a different subset. E.g. If you have 100 careers you can show the first 10 only (careers 1 to 10), clicking next will show you the next 10 (careers 11-20).
* A home page to easily allow a user to decide where the want to go when the access the site. Do they want to go to Careers, Institutions, Bursaries etc.

If you need data in order to add any functionality I'll find a way to get you some to play with.

###Code Structure
* css
  * bootstrap.min.css 
  * **general.css** -- CSS which applies to multiple pages (used for consistency)
* fonts
  * *Ignore this folder, it holds glyphicons which I can show you how to use but arent that important.*
* js
  * bootstrap.min.js
  * **careers.js** -- Javascript specific to the careers.html page
  * faker.js
  * **general.js** -- Shared js across multiple pages (include in all of them) like the render careers function.
  * **searchCareers.js** -- Javascript specific to the searchCareers.html page
* README.md
* **careers.html** -- Render all careers
* **searchCareers.html** -- Display only results of the career search

Best of luck, contact me if you need help (although if it's during work hours I may struggle for time)
James Barnes, Code4CapeTown Lead Facilitator (Teacher :)
