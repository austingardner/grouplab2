$(document).ready(function() {


  $("#textButton").click(function(e){
  var value = $("#inputText").val();
  console.log(value);
  e.preventDefault();
//$("#displayCity").text(value);

 var myurl= "http://swapi.co/api/person/";
  myurl += value;
  myurl += ".json";
  console.log(myurl);
  $.ajax({
    url : myurl,
    dataType : "json",
    success : function(parsed_json) {
      var name = parsed_json['name'];
      var height = parsed_json['height'];
      var mass = parsed_json['mass'];
      var hair_color = parsed_json['hair_color'];
      var skin_color = parsed_json['skin_color'];
      var birth_year = parsed_json['birth_year'];
      everything = "<ul>";
      everything += "<li>Name: "+name;
      everything += "<li>Height: "+height;
      everything += "<li>Mass: "+mass;
      everything += "<li>Hair Color: "+hair_color;
      everything += "<li>Skin Color: "+skin_color;
      everything += "<li>Birth Year: "+birth_year;

      everything += "</ul>";
      $("#person").html(everything);
    }
  });

})


})
