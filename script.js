let garmentAmountSectionHtml = document.getElementById("garmentamountsection").innerHTML;

// FETCH TEST AREA -->

// const apiUrl = "https://script.googleusercontent.com/macros/echo?user_content_key=b_5uOE9E3nAK5oFzKuiY9_MWcCH36qbwz8x1bcbNRyHIkM2mgg5KQ9A5XonE6Yr9XAIEaOxCaKghz9I9490S0rc9B857Nfixm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIeT5ursIWLObZ_gzn3CHOFtbui7Dh-VseB5ef8FKf96dN10-XtIMGP82bNBUWG8HnG31Z9baOlXwDe2aASi3GM4eGb8NzzJINz9Jw9Md8uu&lib=MrSiRj0CtBbYhts8lpJEpLyHAHRuubutl"

// const dataElTest = document.querySelector("#testel");

// async function getGarmTypes() {
//     const response = await fetch(apiUrl);
//     const allData = await response.json();
//     const garmTypeData = await allData[0,1];
//     // const garmType1 = garmTypeData.GarmentType1
//     return(garmTypeData);
// }

// let objectData = getGarmTypes();

// working code for getting garment type data from google sheets

// FETCH TEST AREA END <--

// GARMENT TYPE OPTION TEST AREA -->

// let objDataConv = Object.entries(objectData);

// objDataConv.forEach(([key, value]) => {
//   console.log(key); // 'one'
//   console.log(value); // 1
// });


// let arrayVariable = objectData;
// let arrayLength = arrayVariable.length;
// let temp;

// for (i = 0; i < arrayLength; i++) {
//   temp = document.createElement('div');
//   temp.className = 'results';
//   temp.innerHTML = arrayVariable[i];
//   document.getElementsByTagName('body')[0].appendChild(temp);
// }

// GARMENT TYPE OPTION TEST AREA END <--


function addGarment() {
    
    const div = document.createElement('div');
  
    div.className = 'garmentamountsection';

    div.id = 'garmentamountsection';

    div.innerHTML = 
        garmentAmountSectionHtml + 
        `<button class="removerowbutton" id="removerowbutton" onclick="removeRow(this)">-</button>`;
  
    document.getElementById('inputsection').appendChild(div);
  }
  
function removeRow(input) {
    document.getElementById('inputsection').removeChild(input.parentNode);
}

// ------------------------------------------------------------------------------------
// pre-press time calculations section -->
// *** INFO *** all time in seconds ***

let degreaseTime = 225;
let emulsionPrep = 120;
let scoopCoaterClean = 240;
let screenCoating = 90;
let numberOfScreens = document.getElementById("totalscreens").value;


console.log(numberOfScreens);

// function screenPrepTime(){
//     degreaseTime + (emulsionPrep / )
// }




// end of pre-press time calculations section <--
