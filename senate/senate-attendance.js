let republicanArr = [];
let democratArr = [];
let independentArr = [];
let republicanLoyaltyPercentage = 0;
let democratLoyaltyPercentage = 0;
let indpendentLoyaltypercentage = 0;
let percentage;
let cloneMembersArr;
let leastCloneMembersArr;
let mostCloneMembersArr;

function fetchFunction(){

  fetch('https://api.propublica.org/congress/v1/113/senate/members.json', {
    // method: 'Get'
    headers: {
      "X-API-Key": 'nIOJ5TasiAgDOn2oHi10bimLFstNcL0TbUWWYJmt'
    } 
  })
  .then((response) => {
    return response.json()
  })
  .then(json =>{
    membersArr = json.results[0].members;
    console.log(membersArr)
    numRepresentantsByParty();
    votesWithParty();
    topTen();
    buildTable();
    buildTable2();
  });
}
fetchFunction();

    


//  Numero de representantes por partido
function numRepresentantsByParty(){
  for(i = 0; i < membersArr.length; i++){
    if(membersArr[i].party === "R"){
        republicanArr.push(membersArr[i]);
        republicanLoyaltyPercentage += membersArr[i].votes_with_party_pct;
    }
    if(membersArr[i].party === "D"){
        democratArr.push(membersArr[i])
        democratLoyaltyPercentage += membersArr[i].votes_with_party_pct;
    }
    if(membersArr[i].party === "ID"){
        independentArr.push(membersArr[i]);
        indpendentLoyaltypercentage += membersArr[i].votes_with_party_pct;
    }
 }
 for(i = 0; i < membersArr.length; i++){
   if(membersArr[i].party === "R"){
     republicanArr.push(membersArr[i]);
     republicanLoyaltyPercentage += membersArr[i].votes_with_party_pct;
    }
    if(membersArr[i].party === "D"){
      democratArr.push(membersArr[i])
      democratLoyaltyPercentage += membersArr[i].votes_with_party_pct;
    }
    if(membersArr[i].party === "ID"){
      independentArr.push(membersArr[i]);
      indpendentLoyaltypercentage += membersArr[i].votes_with_party_pct;
    }
  }
}
  
// Numero de representantes por partido y media de votos con el partido
function votesWithParty(){

  republicanLoyaltyPercentage = (republicanLoyaltyPercentage / republicanArr.length).toFixed(3);
  democratLoyaltyPercentage = (democratLoyaltyPercentage / democratArr.length).toFixed(3);
  indpendentLoyaltypercentage = (indpendentLoyaltypercentage / independentArr.length).toFixed(3);
  
  document.getElementById("rep-reps").textContent = republicanArr.length;
  document.getElementById("dem-reps").textContent = democratArr.length;
  document.getElementById("ind-reps").textContent = independentArr.length;
  
  
  document.getElementById("rep-perc").textContent = republicanLoyaltyPercentage;
  document.getElementById("dem-perc").textContent = democratLoyaltyPercentage;
  document.getElementById("ind-perc").textContent = indpendentLoyaltypercentage;
}

// Top 10 senadores que votan mas y menos

function topTen(){

  percentage = (membersArr.length / 100)*10;
  percentage = percentage.toFixed(0);
  console.log(percentage);
  cloneMembersArr = [...membersArr];
  
  function compare(a,b){
    let memberA = a.missed_votes_pct;
    let memberB = b.missed_votes_pct;
    
    let comparison = 0;
    if(memberA > memberB){
      comparison = 1;
    }else if(memberA < memberB){
      comparison = -1;
    }
    return comparison;
  }
  
  cloneMembersArr = cloneMembersArr.sort(compare);
  leastCloneMembersArr = cloneMembersArr;
  mostCloneMembersArr = cloneMembersArr;
  mostCloneMembersArr = mostCloneMembersArr.slice(-percentage).reverse();
  leastCloneMembersArr = leastCloneMembersArr.slice(0, percentage);
  console.log(mostCloneMembersArr);
}

// tabla 1
function buildTable(){
  console.log(mostCloneMembersArr)

   for(i = 0; i < mostCloneMembersArr.length; i++){   
 
     let tBody = document.getElementById("tBody1")
     let tr = document.createElement("tr");
     let td1 = document.createElement("td");
     let td2 = document.createElement("td");
     let td3 = document.createElement("td");
 
     let text1 = document.createTextNode(mostCloneMembersArr[i].first_name + " " + mostCloneMembersArr[i].last_name);
     let text2 = document.createTextNode(mostCloneMembersArr[i].missed_votes);
     let text3 = document.createTextNode(mostCloneMembersArr[i].missed_votes_pct + "%");    
     
     td1.appendChild(text1);
     td2.appendChild(text2);
     td3.appendChild(text3);
 
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);    
     
     tBody.appendChild(tr);   
   }
 }
 
 // tabla 2
 function buildTable2(){
 
   for(i = 0; i < leastCloneMembersArr.length; i++){   
 
     let tBody = document.getElementById("tBody2")
     let tr = document.createElement("tr");
     let td1 = document.createElement("td");
     let td2 = document.createElement("td");
     let td3 = document.createElement("td");
 
     let text1 = document.createTextNode(leastCloneMembersArr[i].first_name + " " + leastCloneMembersArr[i].last_name);
     let text2 = document.createTextNode(leastCloneMembersArr[i].missed_votes);
     let text3 = document.createTextNode(leastCloneMembersArr[i].missed_votes_pct + "%");    
     
     td1.appendChild(text1);
     td2.appendChild(text2);
     td3.appendChild(text3);
 
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);    
     
     tBody.appendChild(tr);   
   }
 }
 
