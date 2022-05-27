//* ==== buttons
const manBtn = document.getElementById('manhattan')
const bxBtn = document.getElementById('bronx')
const bkBtn = document.getElementById('brooklyn')
const qnsBtn = document.getElementById('queens')
const stIslandBtn = document.getElementById('staten-island')

//* input 
const input = document.querySelector('input')
//*Container div
const container = document.getElementById('container')


//* fetch data from API
fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${numComplaints}&agency=NYPD&borough=${borough}`)
.then((response) => {
    return response.json();
})

.then((data) => {
    let 
})


//* Data Render Function. Appending data away from first function 



//* Event Listeners