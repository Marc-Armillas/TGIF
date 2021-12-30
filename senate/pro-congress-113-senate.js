var app = new Vue(
  {  
    el: '#app',  
    data: {    
      // main
      membersArr : [],
      // checkbox variables
      partyFilterArr :[],
      refilteringPartyFilterArr: [],
      partiesChecked : [],
      // state variables
      stateFilterArr : [],
      stateSelected : "All",
      states: {"All": "All","AL": "Alabama","AK": "Alaska","AS": "American Samoa","AZ": "Arizona","AR": "Arkansas","CA": "California","CO": "Colorado","CT": "Connecticut","DE": "Delaware","DC": "District Of Columbia","FM": "Federated States Of Micronesia","FL": "Florida","GA": "Georgia","GU": "Guam","HI": "Hawaii","ID": "Idaho","IL": "Illinois","IN": "Indiana","IA": "Iowa","KS": "Kansas","KY": "Kentucky","LA": "Louisiana","ME": "Maine","MH": "Marshall Islands","MD": "Maryland","MA": "Massachusetts","MI": "Michigan","MN": "Minnesota","MS": "Mississippi","MO": "Missouri","MT": "Montana","NE": "Nebraska","NV": "Nevada","NH": "New Hampshire","NJ": "New Jersey","NM": "New Mexico","NY": "New York","NC": "North Carolina","ND": "North Dakota","MP": "Northern Mariana Islands","OH": "Ohio","OK": "Oklahoma","OR": "Oregon","PW": "Palau","PA": "Pennsylvania","PR": "Puerto Rico","RI": "Rhode Island","SC": "South Carolina","SD": "South Dakota","TN": "Tennessee","TX": "Texas","UT": "Utah","VT": "Vermont","VI": "Virgin Islands","VA": "Virginia","WA": "Washington","WV": "West Virginia","WI": "Wisconsin","WY": "Wyoming"}
    },
    // fetch 
    methods: {
      getData: function (){
        fetch('https://api.propublica.org/congress/v1/113/senate/members.json', {
          // method: 'Get'
          headers: {
            "X-API-Key": 'nIOJ5TasiAgDOn2oHi10bimLFstNcL0TbUWWYJmt'
          } 
        })
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          app.membersArr = json.results[0].members
          return app.membersArr;
        })
      },
    },
    computed:{
      updateTable: function(){
       this.partyFilterArr=[...this.membersArr].filter(value => this.partiesChecked.includes(value.party));
       this.stateFilterArr=[...this.membersArr].filter(value => this.stateSelected.includes(value.state));
       this.refilteringPartyFilterArr=[...this.partyFilterArr].filter(value => this.stateSelected.includes(value.state));
       if((this.partyFilterArr.length === 0) && (this.stateSelected == "All")){
         return this.membersArr
        }
        if((this.partiesChecked.length !== 0) && (this.stateSelected == "All")){
          return this.partyFilterArr
         }
       if((this.partyFilterArr.length === 0) && (this.stateSelected !== "All")){
         return this.stateFilterArr
        }
      else{
        return this.refilteringPartyFilterArr
      }
    },   
  }
})  
app.getData();














































// // /////////////////////////////////////////////// fetch 
// let membersArr=[];

// fetch('https://api.propublica.org/congress/v1/113/senate/members.json', {
//   // method: 'Get'
//   headers: {
//     "X-API-Key": 'nIOJ5TasiAgDOn2oHi10bimLFstNcL0TbUWWYJmt'
//   } 
// })
// .then((response) => {
//   return response.json()
// })
//   .then((json) => {
//     membersArr = json.results[0].members;
//     buildTable(membersArr);
//     // populatedrop(statesArr);
// });
// // //////////////////////////////////////////////// fetch ended

// // ///////////////////////////////Table

// // const membersNumber = json.results[0].members.length;
// function buildTable(membersArr){
//   // deleating Table
//   document.getElementById("senate-data").innerHTML = "";

//   // Header
//   let table = document.getElementById("senate-data");
//   let trHeader = document.createElement("tr");
//   let tHead = document.createElement("thead");
//   let tBody = document.createElement("tbody");
//   let th1 = document.createElement("th");
//   let th2 = document.createElement("th");
//   let th3 = document.createElement("th");
//   let th4 = document.createElement("th");
//   let th5 = document.createElement("th");

//   let textTh1 = document.createTextNode("Full Name");
//   let textTh2 = document.createTextNode("Party");
//   let textTh3 = document.createTextNode("State");
//   let textTh4 = document.createTextNode("Seniority");
//   let textTh5 = document.createTextNode("% Vote W Party");

//   th1.appendChild(textTh1);
//   th2.appendChild(textTh2);
//   th3.appendChild(textTh3);
//   th4.appendChild(textTh4);
//   th5.appendChild(textTh5);

//   trHeader.appendChild(th1);
//   trHeader.appendChild(th2);
//   trHeader.appendChild(th3);
//   trHeader.appendChild(th4);
//   trHeader.appendChild(th5);

//   tHead.appendChild(trHeader);
//   table.appendChild(tHead);

//   // Table Body
//   for(i = 0; i < membersArr.length; i++){   

//     let link = document.createElement("a");
//     let tr = document.createElement("tr");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");
//     let td4 = document.createElement("td");
//     let td5 = document.createElement("td");
//     link.setAttribute("href", membersArr[i].url);
  

//     let text1 = document.createTextNode(membersArr[i].first_name + " " + (membersArr[i].middle_name || "") + " " + membersArr[i].last_name);
//     let text2 = document.createTextNode(membersArr[i].party);
//     let text3 = document.createTextNode(membersArr[i].state);
//     let text4 = document.createTextNode(membersArr[i].seniority);
//     let text5 = document.createTextNode(membersArr[i].votes_with_party_pct + "%");
  
    
    
//     link.appendChild(text1);
//     td2.appendChild(text2);
//     td3.appendChild(text3);
//     td4.appendChild(text4);
//     td5.appendChild(text5);
  
//     td1.appendChild(link);

//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     tr.appendChild(td4);
//     tr.appendChild(td5);
    
    
//     tBody.appendChild(tr);    
//     table.appendChild(tBody);
//   }
// }
// buildTable(membersArr);



// /////////////////////////////// dropdown list and 


// let statesArr = ['ALL','AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
// let fullStatesArr = ['All','Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
// let select = document.getElementById("select")

// for(var i = 0; i < statesArr.length; i++){
//   let option = document.createElement("option");
//   option.text = fullStatesArr[i];
//   option.value = statesArr[i];
//   // select.appendChild(option);
//   select.add(option);
// }




// // ////////////////////////////////Listener

// let stateSelectedState = document.getElementById("select").value;
// document.getElementById("select").addEventListener("input",  function () {
//   stateSelectedState = document.getElementById("select").value;
//   console.log(document.getElementById("select").value);
//   partyFilter(membersArr);
// });


// let republicanId = document.getElementById("republican");
// let  democratId = document.getElementById("democrat");
// let independentId = document.getElementById("independent");

// // checkbox checked
// republicanId.addEventListener("click", function () {
//   if (republicanId.checked === true){
//     console.log(republicanId.value);
//     partyFilter(membersArr);
//   }
//   });


// democratId.addEventListener("click", function () {
//    if (democratId.checked === true){
//     console.log(democratId.value );
//     partyFilter(membersArr);
//     }
// });


//   independentId.addEventListener("click", function () {
//     if (independentId.checked === true){
//     console.log(independentId.value );
//     partyFilter(membersArr);
//     }
// });


// //checkboxes unchecked
// republicanId.addEventListener("click", function () {
//   if (republicanId.checked === false){
//     console.log(republicanId.value);
//     partyFilter(membersArr);
//   }
// });


// democratId.addEventListener("click", function () {
//   if (democratId.checked === false){
//     console.log(democratId.value );
//     partyFilter(membersArr);
//   }
// });


// independentId.addEventListener("click", function () {
//   if (independentId.checked === false){
//     console.log(independentId.value );
//     partyFilter(membersArr);
//   }
// });





// // ////////////////////////////////filters

// function partyFilter(){
//   let stateSelectedPartyMembers = [];

//   for ( i=0; i < membersArr.length; i++) {
//     if ((republicanId.checked && membersArr[i].party === "R") && (stateSelectedState === membersArr[i].state || stateSelectedState === statesArr[0])){
//        stateSelectedPartyMembers.push(membersArr[i]);     
//     }
//      if ((democratId.checked && membersArr[i].party === "D") && (stateSelectedState === membersArr[i].state || stateSelectedState === statesArr[0])){
//       stateSelectedPartyMembers.push(membersArr[i]);
//      }
//      if ((independentId.checked && membersArr[i].party === "ID") && (stateSelectedState === membersArr[i].state || stateSelectedState === statesArr[0])){
//       stateSelectedPartyMembers.push(membersArr[i]);
//     }
//     if (((republicanId.checked === false)&&(democratId.checked === false)&&(independentId.checked === false))&& (stateSelectedState === membersArr[i].state || stateSelectedState === statesArr[0]))
//       stateSelectedPartyMembers.push(membersArr[i]);
//     }
    
//     buildTable(stateSelectedPartyMembers);
// };

