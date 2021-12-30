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
        fetch('https://api.propublica.org/congress/v1/113/house/members.json', {
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
        if((this.partiesChecked.length === 0) && (this.stateSelected == "All")){
          return this.membersArr
         }
        if((this.partiesChecked.length !== 0) && (this.stateSelected == "All")){
          return this.partyFilterArr
         }
        if((this.partiesChecked.length === 0) && (this.stateSelected !== "All")){
          return this.stateFilterArr
         }
       else{
         return this.refilteringPartyFilterArr
       }
    },
  }
})    
app.getData();

    
    // ////////////////////////////////Listener
    
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
        
        // // for para states dropdown 
        // let select = document.getElementById("select")
        // for(var i = 0; i < statesArr.length; i++){
          //   let option = document.createElement("option");
          //   option.text = fullStatesArr[i];
          //   option.value = statesArr[i];
          //   // select.appendChild(option);
          //   select.add(option);
  // }
          // partyFilter : function (){
            
          //     for ( i=0; i < membersArr.length; i++) {
          //         if ((republicanId.checked && membersArr[i].party === "R") && (stateSelectedState === membersArr[i].state || stateSelectedState === statesArr[0])){
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
              
          //     return (stateSelectedPartyMembers);
          //   },

          


          // volver a probar
          // republican: function(){
          //   for ( i=0; i < membersArr.length; i++) {
          //       if (membersArr[i].party === "R"){
          //      return stateSelectedPartyMembers.push(membersArr[i]);
          //     }
          //   } 