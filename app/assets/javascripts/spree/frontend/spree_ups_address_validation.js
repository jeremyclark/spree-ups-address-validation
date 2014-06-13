// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

$(document).ready(function () {

  $(".ups-address-validation-suggestion-use-this-one button").on('click', function() {

    var $suggestion = $(this).parents(".ups-address-validation-suggestion");

    $("#order_ship_address_attributes_address1").val( $(".ups-address-validation-suggestion-street", $suggestion).html() );
    $("#order_ship_address_attributes_city").val( $(".ups-address-validation-suggestion-city", $suggestion).html() );

    var state_id = $(".ups-address-validation-suggestion-state", $suggestion).data('state-id');
    $("#order_ship_address_attributes_state_id option[value=" + state_id + "]").attr('selected', 'selected');
    $("#order_ship_address_attributes_state_id").trigger('change');

    $("#order_ship_address_attributes_zipcode").val( $(".ups-address-validation-suggestion-zip", $suggestion).html() );
  });
});
