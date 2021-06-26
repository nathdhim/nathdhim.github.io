var curr = $(".first");
      $("input[type='radio']").on('change', function() {
      curr.hide();
      curr = $("." + $("input[type='radio']:checked").val() );
      curr.show();
});