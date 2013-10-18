
var jsonDestacado = {
  "UNO":
  {
   'img':'http://www.spanishmarket.es/assets/images/393666?style=original&xsfv=1330038150&name=Burdeos_In_Love_restaurantes_Valencia_02.jpg',
   'nombre':'Tramonti ',
   'descripcion':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  
   'direccion':'Calle 93  # 15 - 27',
   'tipoComida':'Comida Arabe',
   'horario':'L - V 14:00 - 22:00'
 },
 "DOS":
 {
   'img':'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPGQA7-21lAWnMxCqQHJUZUdVbzs00Gvz3kh4EiZmqa8NiFU5Rlg',
   'nombre':'Cono Sur',
   'descripcion':'Otro buen restaurante',
   'direccion':'Calle 93  # 15 - 27',
   'tipoComida':'Comida Chatarra',
   'horario':'L - V 14:00 - 22:00'
 },
 "2":
 {
   'img':'http://www.gastronomiaycia.com/wp-content/uploads/2008/07/restaurantes_madrid.jpg',
   'nombre':'Museo del Tequila',
   'descripcion':'Restaurante con exquisitos platos mexicanos y una gran variaedad de trajos, especializados en tequila y mucho mas mas mas...',
   'direccion':'Calle 93  # 15 - 27',
   'tipoComida':'Comida Arabe',
   'horario':'L - V 14:00 - 22:00'
 },
 "3":
 {
   'img':'http://3.bp.blogspot.com/_wSAYe7EdCJc/TKJejVyZXgI/AAAAAAAADYo/atgS_sCaLBo/s320/tipos+de+restaurantes.JPG',
   'nombre':'T-Bone',
   'descripcion':'Un restaurante con nombre largo',
   'direccion':'Calle 93  # 15 - 27',
   'tipoComida':'Comida Chatarra',
   'horario':'L - V 14:00 - 22:00'
 }
};

var jsonPopular = {
  "TRES":
  {
   'img':'http://d1gb4h5cupein4.cloudfront.net/webs/3201/img/cabecera-restaurantes.jpg',
   'nombre':'La despensa',
   'descripcion':'Un buen Restaurante',
   'direccion':'Calle 93  # 15 - 27',
   'tipoComida':'Comida Arabe',
   'horario':'L - V 14:00 - 22:00'
 },
 "CUATRO":
 {
   'img':'http://www.vinetur.com/imagenes/2011/noviembre/5/restaurante_vacio.jpg',
   'nombre':'Restaurante Cristian',
   'descripcion':'En la exquisita Zona Gourmet de la ciudad, se encuentra otra sucursal del restaurante de Usaquén en el que los herman...',
   'direccion':'Calle 93  # 15 - 27',
   'tipoComida':'Comida Chatarra',
   'horario':'L - V 14:00 - 22:00'
 },
 "ocho":
 {
   'img':'http://ipadstatic.com/2013/07/restaurantes.jpg',
   'nombre':' Criterion',
   'descripcion':'Otro buen restaurante',
   'direccion':'Calle 93  # 15 - 27',
   'tipoComida':'Comida Chatarra',
   'horario':'L - V 14:00 - 22:00'
 },
 "nueve":
 {
   'img':'http://ipadstatic.com/2013/07/restaurantes.jpg',
   'nombre':' La fragata giratoria',
   'descripcion':'Otro buen restaurante',
   'direccion':'Calle 93  # 15 - 27',
   'tipoComida':'Comida Chatarra',
   'horario':'L - V 14:00 - 22:00'
 }
};

var jsonGeo = {
  "CINCO":
  {
   'img':'http://www.tartascanpinyol.com/images/restaurantes.jpg',
   'nombre':'Bistronomy ',
   'descripcion':'Un buen Restaurante',
   'direccion':'Calle 93  # 15 - 27',
   'tipoComida':'Comida Arabe',
   'horario':'L - V 14:00 - 22:00'
 },
 "SEIS":
 {
   'img':'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPGQA7-21lAWnMxCqQHJUZUdVbzs00Gvz3kh4EiZmqa8NiFU5Rlg',
   'nombre':'Restaurante ',
   'descripcion':'Otro buen restaurante',
   'direccion':'Calle 93  # 15 - 27',
   'tipoComida':'Comida Chatarra',
   'horario':'L - V 14:00 - 22:00'
 },
 "7":
 {
   'img':'http://www.tartascanpinyol.com/images/restaurante1.jpg',
   'nombre':'La fragata',
   'descripcion':'Un buen Restaurante',
   'direccion':'Calle 93  # 15 - 27',
   'tipoComida':'Comida Arabe',
   'horario':'L - V 14:00 - 22:00'
 },
 "9":
 {
   'img':'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPGQA7-21lAWnMxCqQHJUZUdVbzs00Gvz3kh4EiZmqa8NiFU5Rlg',
   'nombre':'Bistronomy',
   'descripcion':'Otro buen restaurante',
   'direccion':'Calle 93  # 15 - 27',
   'tipoComida':'Comida Chatarra',
   'horario':'L - V 14:00 - 22:00'
 }
};

var jsonCity = {
 "UNO":
 {
   'Name':'Bogota',
   'Value':'1',
 },
 "DOS":
 {
   'Name':'Medellin',
   'Value':'2',
 },
 "Tres":
 {
   'Name':'Cali',
   'Value':'3',
 }, 
 "Cuatro":
 {
   'Name':'Barranquilla',
   'Value':'4',
 } 
};

var restaurant = [
"Mcdonals",
"La Mona",
"Criterion",
"La fragata giratoria",
];


var Init = function(){
  $('.DataOrange').hide();
  $('.DataRed').hide();
  $('.DataGreen').hide();
  $(document.getElementById("Ingreso")).hide();
  $(document.getElementById("Search")).autocomplete({
    source: restaurant
  });
};

var Restaurant = function(){
 this.Name = "";
 this.Description = "";
 this.Addres = "";
 this.FoodType = "";
 this.schedule= "";

 this.CreateList= function (pul,pClass, pArray){  
   var Restaurant = $('<li></li>');
   $.each(pArray, function(R,r){    
    var RestaurantS = $('<section></section>');
    var RestaurantA = $('<article style="width:85%"></article>');
    RestaurantA.appendTo(RestaurantS);
    RestaurantS.appendTo(Restaurant);
    var Description = $('<div id="Div'+R+'" class="'+pClass+'" style="height: 168px; opacity: 1; width: 100%; left: 138px; overflow: hidden;"><div  class="expl-portrait-content" style="opacity: 1; margin-top: 22.5px; width: 100%;"><h2 class="name">'+r.nombre.substring(0,20)+'</h2><h4 class="sous-name">• '+r.tipoComida+' •</h4><p class="expl">'+r.descripcion.substring(0,40)+'</p></div></div>');
    var ImgRestaurant = $('<div><span class="Puntos">• </span><a href="Restaurant.html?id=1" class="Nombre">'+r.nombre.substring(0,20)+'</a><span class="Puntos"> •</span><a href="Restaurant.html?id=1" class="Nombre"><img id="'+R+'" class="ImageRestaurant" src="'+r.img+'" /></a><span class="Direccion">'+r.direccion+'<br>'+r.horario+'</span></div>');
    ImgRestaurant.appendTo(RestaurantA);  
    Description.appendTo(RestaurantA);    
  });  
Restaurant.appendTo('#'+pul);
}

this.HideImage = function (){
 $(".ImageRestaurant").mouseover(function(){
   $(this).addClass("hide");
   $('#Div'+this.id).show();
   $('#Div'+this.id).addClass("show");
 });
}

this.ShowImage = function(){
  $(".ImageRestaurant").mouseout(function(){
   $(this).removeClass("hide");
   $('#Div'+this.id).hide();
 });
}

}

var Restaurants = new Restaurant();
Restaurants.CreateList("DestacadoLista","DataRed",jsonDestacado);
Restaurants.CreateList("PopularesLista","DataOrange",jsonPopular);
Restaurants.CreateList("GeoLista","DataGreen",jsonGeo);
Restaurants.HideImage();
Restaurants.ShowImage();

var InsertCity = function(){
  $.each(jsonCity, function(C,r){
   var City = $('<option value="'+r.Value+'">'+r.Name+'</option>');
   City.appendTo('#SelectCity');
 });
};

var PopUpLogin = function(){
  $("#Ingreso").dialog({
   modal: true
 });  
};
var Login = function (){
 $(document.getElementById("LiLogin")).on('click',function(){
  $(document.getElementById("Registro")).hide();
  $(document.getElementById("Login")).show();
  PopUpLogin();
});

 $(document.getElementById("LiRegistro")).click(function () {
  $(document.getElementById("Login")).hide();
  $(document.getElementById("Registro")).show();
  PopUpLogin();
});

};


var Buscar= function(){
 $(document.getElementById("BtnSearch")).click(function(){
   var Restaurante = $(document.getElementById("Search")).val();
   window.location.replace("maps.html");
 });
};

var usuario = function(){
  this.Name = "Cristianc";
  this.Mail = "carvage";
  this.PassWord = "123";
  this.State = "E";
  this.SoapMessage = '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'
  +'<soap:Body>'
  +'<Register xmlns="http://reservapp.azurewebsites.net/">'
  +'<pName>'+ this.Name+'</pName>'
   +'<pMail>'+this.Mail+'</pMail>'
    +'<pPassWord>'+ this.PassWord+'</pPassWord>'
     +'<pState>'+this.State+'</pState>'
    +'</Register>'
  +'</soap:Body>'
+'</soap:Envelope>'
  
  this.Register = function(){
    $.ajax({
      url: "http://reservapp.azurewebsites.net/reservapp.asmx?op=Register",
      type: "POST",
      dataType: "xml", 
      data: this.SoapMessage,
      processData: true,
      contentType: "text/xml; charset=utf-8"
    })
    .done(function(msg) {
      alert( "Data Saved: " + msg );
    })
    .fail(function(){
      alert("error 500 in th servers")
    });
  }
}

var user = new usuario();
$("#BtRegistro").on('click',user.Register());

$(document).ready(function(){
 InsertCity();
 Buscar();
 Login();
 Init(); 
});
