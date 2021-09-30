$("#buildingType").change(function(showHide) {
  var dropdownMenu = document.getElementById("buildingType")
  var hiddeninputs = document.getElementsByClassName ("hidden");
        
        if ($(dropdownMenu).val() == "residential;") {
            $('#residentialForm').show();
            $('#commercialForm').hide();
            $('#corporateForm').hide();
            $('#hybridForm').hide();
            }
        else if ($(dropdownMenu).val() == "commercial;") {
            $('#commercialForm').show();
            $('#residentialForm').hide();
            $('#corporateForm').hide();
            $('#hybridForm').hide();
            }
        else if ($(dropdownMenu).val() == "corporate;") {
            $('#corporateForm').show();
            $('#residentialForm').hide();
            $('#commercialForm').hide();
            $('#hybridForm').hide();
        }   
        else if ($(dropdownMenu).val() == "commercial;") {
            $('#commercialForm').show();
            $('#residentialForm').hide();
            $('#corporateForm').hide();
            $('#hybridForm').hide();
        }
        else 
        hiddeninputs.style.display = "none";
});

quoteFormElements: [
  {
      type: "residential",
      inputFields: ["number-of-apartments", "number-of-floors", "number-of-basements"]
  },
  {
      type: "commercial",
      inputFields: ["number-of-floors", "number-of-basements","number-of-companies", "number-of-parking-spots", "number-of-elevators"]
  },
  {
      type: "corporate",
      inputFields: ["number-of-floors", "number-of-basements","number-of-parking-spots", "number-of-corporations", "maximum-occupancy"]
  },
  {
      type: "hybrid",
      inputFields: ["number-of-floors", "number-of-basements", "number-of-companies", "number-of-parking-spots", "maximum-occupancy", "business-hours"]
  }
]

console.log ()






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