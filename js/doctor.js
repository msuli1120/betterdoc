var apiKey = require('./../.env').apiKey;
var uidArray = [];
function Doctor(){
}

Doctor.prototype.getDoctor = function(medicalIssue, displayData, displayDetail){
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=50&user_key=' + apiKey)
 .then(function(result) {
   console.log(result);
   displayData(medicalIssue, result);
   result.data.forEach(function(obj){
     uidArray.push(obj.uid);
   });
 })
 .fail(function(error){
     $('#output').text("fail");
  });
};

exports.doctorModule = Doctor;
