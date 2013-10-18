var usuario = function(pEmail){
  this.Name = pEmail;
  this.Mail = pEmail;
  this.PassWord = "reservapp";
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
    .done(function(data) {
			$("#messagetrue").dialog({
			modal: true
			});  
    })
    .fail(function(){
			$("#messagefalse").dialog({
			modal: true
			});  
    });
  }
}

$(document).ready(function(){
   $(document.getElementById("messagetrue")).hide();
   $(document.getElementById("messagefalse")).hide();
   $("#BtRegister").on('click',function(){
    var email = $('#TbCorreo').val();
    if(email != "" && email != null)
    {
      var user = new usuario(email);
      user.Register();
    }
  });
});

