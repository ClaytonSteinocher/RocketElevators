console.log('Connected')


$("#building-type").change(function() {
//   var dropdownMenu = document.getElementById("buildingType")
//   var hiddeninputs = document.getElementsByClassName ("hidden");
        
        if ($(this).val() == "residential") {
            console.log("residential chosen")
            $('#number-of-apartments').show();
            $('#number-of-floors').show();
            $('#number-of-basements').show();
            $('#number-of-parking-spots').hide();
            $('#number-of-corporations').hide();
            $('#maximum-occupancy').hide();
            $('#business-hours').hide();
            $('#number-of-companies').hide();
            
        } else if ($(this).val() == "commercial") {
            console.log("commercial chosen")
            $('#number-of-floors').show();
            $('#number-of-basements').show();
            $('#number-of-companies').show();
            $('#number-of-parking-spots').show();
            $('#number-of-elevators').show();
            $('#number-of-apartments').hide();
            $('#maximum-occupancy').hide();
            $('#business-hours').hide();
            $('#number-of-corporations').hide();
        
        } else if ($(this).val() == "corporate") {
            console.log("corporate chosen")
            $('#number-of-floors').show();
            $('#number-of-basements').show();
            $('#number-of-companies').hide();
            $('#number-of-parking-spots').show();
            $('#number-of-elevators').hide();
            $('#number-of-apartments').hide();
            $('#maximum-occupancy').show();
            $('#business-hours').hide();
            $('#number-of-corporations').show();

        } else if ($(this).val() == "hybrid") {
            console.log("hybrid chosen")
            $('#number-of-floors').show();
            $('#number-of-basements').show();
            $('#number-of-companies').show();
            $('#number-of-parking-spots').show();
            $('#number-of-elevators').hide();
            $('#number-of-apartments').hide();
            $('#maximum-occupancy').show();
            $('#business-hours').hide();
            $('#number-of-corporations').hide();
        }
});

    // Elevator shaft formula
    // $("#numElevatorCages").change("input", function() {
    function elevatorShaftFormula(){  
    var number = "numElevatorCages"
    
    
        
    
        // WIP document.getElementById("elevatorNumber").innerHTML = elevatorCages
        // WIP console.log('equal')
    };
// $("#numApartments, #numFloors").on("input", function() {
//     // Grabbing the value
//     var apartmentVal = $(this).val()
    
//     // Running some complex calculations 
//     let calc = apartmentVal * 1000

//     // Displaying back into the browser
//     $("#finalPrice").val(calc)
// });

// function calc()
// {
//     var numElevaorCages = (document.getElementById(numElevaorCages).value)
//     var elevatornumber = (document.getElementById(elevatornumber).value)
//     let numElevaorCages = elevatornumber

// }

// $("#numFloors").on("input", function() {
//     // Grabbing the value
//     var floorVal = $(this).val()
//     let divide = apartmentVal / floorVal

//     $("#elevatorUnitPrice").val(divide)
// });

// $("#numBasements").on("input", function() {
//     // Grabbing the value
//     let basementVal = $(this).val()

// });

// $("#numDistinctBusinesses").on("input", function() {
//     // Grabbing the value
//     let businessVal = $(this).val()

// });

// $("#numParkingSpots").on("input", function() {
//     // Grabbing the value
//     let parkingVal = $(this).val()

// });

// $("#numElevatorsCages").on("input", function() {
//     // Grabbing the value of number of Elevator Cages
//     let elevatorVal = $(this).val()
//     // Printing it into the Number of Elevators field
//     $("#elevatorNumber").val(elevatorVal)
//     console.log('equal')
// });

// $("#numSeperateCompanies").on("input", function() {
//     // Grabbing the value
//     let companyVal = $(this).val()

// });

// $("#numCorporations").on("input", function() {
//     // Grabbing the value
//     let corporationVal = $(this).val()

// });

// $("#numOccupantsPerFloor").on("input", function() {
//     // Grabbing the value
//     let occupantVal = $(this).val()

// });

// $("#numHoursOfActivity").on("input", function() {
//     // Grabbing the value
//     let hoursVal = $(this).val()

// });


$("input[type=radio]").each(function () {
    $(this).click(function () {
        if ($(this).val() == "standard") {
            let elevatorNum = $("#elevatorNum").val()
            $("#elevatorUnitPrice").val(elevatorNum * 7565)
        }
    })
})


// quoteFormElements: [
//   {
//       type: "residential",
//       inputFields: ["number-of-apartments", "number-of-floors", "number-of-basements"]
//   },
//   {
//       type: "commercial",
//       inputFields: ["number-of-floors", "number-of-basements","number-of-companies", "number-of-parking-spots", "number-of-elevators"]
//   },
//   {
//       type: "corporate",
//       inputFields: ["number-of-floors", "number-of-basements","number-of-parking-spots", "number-of-corporations", "maximum-occupancy"]
//   },
//   {
//       type: "hybrid",
//       inputFields: ["number-of-floors", "number-of-basements", "number-of-companies", "number-of-parking-spots", "maximum-occupancy", "business-hours"]
//   }
// ]

// console.log ()






// $("#numberOfFloors").change(function(){
  //  let x = numberOfFloors
  // x -=
  //}); 
    


    // RESET ALL FIELDS FUNCTION:

    function resetAllFields(){
      //Reset radio button
      $("input:radio").prop('checked', false);
      $("input:radio").closest("label").removeClass("active");
      //Reset input fields
      inputFields.forEach((field) => {
          field.value = "";
      });
      //reset results fields
      resultFields.forEach((field) => {
          field.value = "";
      });
    }