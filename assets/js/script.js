$(function(){
  $('#submit').click(function(){
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var dateofbirth = $('#DateOfBirth').val();
    var cityofbirth = $('#cityOfBirth').val();
    var job = $('#job').val();
    var buisness = $('#buisness').val();
    $('#displayInfo').text(firstName+' '+lastName+',né le '+dateofbirth+' à '+cityofbirth+', actuellement '+job+' à '+buisness+'.');
  });
});
