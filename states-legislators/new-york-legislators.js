// Variables
let ruta;
const statesArr = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
const statesArrValue = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District%20of%20Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New%20Hampshire','New%20Jersey','New%20Mexico','New%20York','North%20Carolina','North%20Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Puerto%20Rico','Rhode%20Island','South%20Carolina','South%20Dakota','Tennessee','Texas','Utah','Vermont','Virgin%20Island','Virginia','Washington','West%20Virginia','Wisconsin','Wyoming'];
let selectedState;
let url = 'https://v3.openstates.org/people?jurisdiction=Alabama';
const initialUrl = "https://v3.openstates.org/people?jurisdiction=";


//Fetch
function fetchFunction(){
  fetch(url,{
    headers:{
      'x-api-key': 'c50be42f-7c8a-4876-8df3-d9c09afeb72f'
    }
  })
  .then((response)=>{
    return response.json();
  }).then(json =>{
    ruta = json.results
  //Calling table function
  buildTable()
  })
};
fetchFunction()


//Dropdown dynamic options
let select = document.getElementById("select")
for(var i = 0; i < statesArr.length; i++){
  let option = document.createElement("option");
  option.text = statesArr[i];
  option.value = statesArrValue[i];
  select.appendChild(option);
};


//Dropdown listener
  select.addEventListener("input", () => {
    selectedState = select.value;
    url = `${initialUrl}${selectedState.toString()}`;
    fetchFunction()
  });


// Table function
  function buildTable(){

    document.getElementById("table").innerHTML = "";

    function getChamberTitle(index){
      return ruta[index].current_role.title;
    }

    let tBody = document.getElementById("table")
    
    for(i = 0; i < ruta.length; i++){   
  
      let tr = document.createElement("tr");

      let link =document.createElement('a')
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
  

      link.setAttribute('href', ruta[i].openstates_url);
      let text1 = document.createTextNode(ruta[i].name);
      let text2 = document.createTextNode(ruta[i].party);
      let text3 = document.createTextNode(getChamberTitle(i));    
      
      link.appendChild(text1);
      td1.appendChild(link)
      td2.appendChild(text2);
      td3.appendChild(text3);
  
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);    
      
      tBody.appendChild(tr);   
    }
  };



