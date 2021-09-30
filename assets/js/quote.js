$("#buildingType").change(function() {
            if ($(this).val() == "Residential;") {
            $('#residentialFieldDivApartments').show();
            $('#residentialField').attr('required', '');
            $('#residentialField').attr('data-error', 'This field is required.');
            }
            else if ($(this).val() == "Commercial;") {
                $('#commercialFieldDiv').show();
                $('#commercialField').attr('required', '');
                $('#commercialField').attr('data-error', 'This field is required.');
            }
        else if ($(this).val() == "Corporate;") {
                $('#commercialFieldDiv').show();
                $('#commercialField').attr('required', '');
                $('#commercialField').attr('data-error', 'This field is required.');
        }   
            else if ($(this).val() == "Commercial;") {
                $('#commercialFieldDiv').show();
                $('#commercialField').attr('required', '');
                $('#commercialField').attr('data-error', 'This field is required.');
        };
        $("#buildingType").trigger("change");
});

  $("#numberOfFloors").change(function(){
    let x = numberOfFloors
   
  });
    



    
    if ($(this).val() == "yes") {
      $('#otherFieldGroupDiv').show();
      $('#otherField1').attr('required', '');
      $('#otherField1').attr('data-error', 'This field is required.');
      $('#otherField2').attr('required', '');
      $('#otherField2').attr('data-error', 'This field is required.');
    } else {
      $('#otherFieldGroupDiv').hide();
      $('#otherField1').removeAttr('required');
      $('#otherField1').removeAttr('data-error');
      $('#otherField2').removeAttr('required');
      $('#otherField2').removeAttr('data-error');
    }
    // $("#seeAnotherFieldGroup").trigger("change")


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