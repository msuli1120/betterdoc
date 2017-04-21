var Doctor = require('./../js/doctor.js').doctorModule;

var displayData = function(medissue, result){
  $('#divtitle').text('Doctors that can treat ' + medissue + ' issues are:');
  result.data.forEach(function(obj){
    $('#output').append('<div class="row"><div class="well col-md-7"><h2>Name: ' + obj.profile.first_name + ' ' + obj.profile.last_name + '</h2><br><span class="head">Gender</span>: ' + obj.profile.gender + '<br><img src="' + obj.profile.image_url + '"><br><span class="head">Languages</span>: ' + obj.profile.languages[0].name + '<br><span class="head">Bio</span>: ' + obj.profile.bio + '</div><div class="col-md-4 well"><span class="head">Specialties</span><br><li>Actor: ' + obj.specialties[0].actor + '</li><br><li>Description: ' + obj.specialties[0].description +'</li></div></div>');
  });

};

$(function(){
  var doctor = new Doctor();

  $('form').submit(function(event){
    event.preventDefault();
    $('#output').empty();
    $('#specialties').empty();
    var medissue = $('input#issue').val();
    doctor.getDoctor(medissue, displayData);
  });
});
