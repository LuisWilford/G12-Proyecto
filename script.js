function registro(){
    var elemento= {
        id: $("#miId").val(),
        owner: $("#owner").val(),
        capacity: $("#capacity").val(),
        category_id: $("#category").val(),
        name: $("#name").val()
    }
    var  dataToSend = JSON.stringify ( elemento ) ;
// JSON = Notación de objetos JavaScript
$.ajax ( {
      dataType : 'json' ,
      data : elemento ,
      url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/audience/audience",
      type: 'POST',      
      complete: function(respuesta) {
            console.log(respuesta);
      },      
      error : function (jqXHR, textStatus, errorThrown)  {
            
      }
  } ) ;
}

function  obtenerItems ( ) {

    $ . ajax ( {
        dataType : 'json' ,
        url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/audience/audience",
        type : 'GET',        
        success : function( respuesta )  {         
          var  misItems = respuesta.items;  
          for ( i = 0 ; i < misItems.length ; i ++ ) {
           
            $("#miResultado").append("<tr>");
            $ ( "#miResultado" ).append ( "<td>" + misItems [ i ].id + "</td>" ) ;
            $ ( "#miResultado" ).append ( "<td>" + misItems [ i ].owner + "</td>" ) ;
            $ ( "#miResultado" ).append ( "<td>" + misItems [ i ].capacity + "</td>" ) ;
            $ ( "#miResultado" ).append ( "<td>" + misItems [ i ].category_id + "</td>" ) ;
            $ ( "#miResultado" ).append ( "<td>" + misItems [ i ].name + "</td>" ) ;
            $ ( "#miResultado" ).append ( '<td> <button onclick = "borrar (' + misItems[i].id +')"> Borrar </button> </td>' ) ;
            $ ( "#miResultado" ).append ( '<td> <button onclick = "obtenerItemEspecifico (' + misItems[i].id + ')"> Cargar </button> </td>' ) ;
            $ ( "#miResultado" ).append ( "</tr>" ) ;  
          }  
        } ,
                
        error : function ( jqXHR ,  textStatus ,  errorThrown )  {              
        }
    } ) ;  
  }


function borrar( idElemento ) {
        var elemento = {
        id : idElemento
        };    
        var dataToSend = JSON.stringify(elemento) ;        
        $.ajax({
          dataType : 'json',
          data : dataToSend ,
          url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/audience/audience",
          type : 'DELETE',
          contentType : 'application/json',
          success : function(response)  {
            console.log(response) ;
          } ,          
          error : function ( jqXHR ,  textStatus ,  errorThrown )  {                
          }
      } ) ;
    }  

    function  obtenerItemEspecifico ( idItem ) {
        $ . ajax ( {
            dataType : 'json',
            url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/audience/audience/" + idItem ,
            tipo : 'GET',
            success : function(response)  {
              console.log (response) ;
              var item = response.items[0];      
              $("#miId").val (item.id ) ;
              $("#owner").val(item.owner) ;
              $("#capacity").val(item.capacity) ;
              $("#category").val(item.category_id) ;
              $("#name").val(item.name) ;     
            } ,            
            error : function ( jqXHR ,  textStatus ,  errorThrown )  {                 
            }
        } ) ;      
    }


function actualizar( ) {
    var  elemento = {
    id : $("#miId" ).val( ) ,
    owner : $("#owner" ).val( ) ,
    capacity : $("#capacity").val( ) ,
    category_id : $("#category").val( ),
    name : $("#name").val()
    }
          
    var  dataToSend = JSON.stringify( elemento ) ;
        // JSON = Notación de objetos JavaScript
    $.ajax({
            dataType : 'json' ,
            data : dataToSend ,
            contentType : 'application/json' ,
            url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/audience/audience",
            type : 'PUT',              
            success : function(response)  {
            console.log(response) ;
             } ,              
            error : function ( jqXHR ,  textStatus ,  errorThrown )  {                    
              }
     } ) ;
        
}
/**^^^^^^^^^^^^^^^^^^ACCESO A LA TABLA CLIENTE ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * ************************************************************************************************************/

 function registro2(){
    var elemento= {
      id: $("#miId2").val(),
      name: $("#name2").val(),
      email: $("#email2").val(),
      age: $("#age2").val()      
     }
    var  dataToSend = JSON.stringify ( elemento ) ;
    $.ajax({
    dataType : 'json' ,
    data : elemento ,
    url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: 'POST',      
    complete: function(respuesta) {
          console.log(respuesta);
    },      
    error : function (jqXHR, textStatus, errorThrown)  {          
    }
} ) ;
}

function obtenerItems2( ) {

  $.ajax({
      dataType : 'json' ,
      url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
      type : 'GET',        
      success : function( respuesta )  {         
        var  misItems = respuesta.items;  
        for ( i = 0 ; i < misItems.length ; i ++ ) {
         
          $("#miResultado2").append("<tr>");
          $ ( "#miResultado2" ).append ( "<td>" + misItems [ i ].id + "</td>" ) ;
          $ ( "#miResultado2" ).append ( "<td>" + misItems [ i ].name + "</td>" ) ;
          $ ( "#miResultado2" ).append ( "<td>" + misItems [ i ].email + "</td>" ) ;
          $ ( "#miResultado2" ).append ( "<td>" + misItems [ i ].age + "</td>" ) ;          
          $ ( "#miResultado2" ).append ( '<td> <button onclick = "borrar2 (' + misItems[i].id +')"> Borrar </button> </td>' ) ;
          $ ( "#miResultado2" ).append ( '<td> <button onclick = "obtenerItemEspecifico2 (' + misItems[i].id + ')"> Cargar </button> </td>' ) ;
          $ ( "#miResultado2" ).append ( "</tr>" ) ;  
        }  
      } ,
              
      error : function ( jqXHR ,  textStatus ,  errorThrown )  {              
      }
  } ) ;  
}


function borrar2( idElemento ) {
      var elemento = {
      id : idElemento
      };    
      var dataToSend = JSON.stringify(elemento) ;        
      $.ajax({
        dataType : 'json',
        data : dataToSend ,
        url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type : 'DELETE',
        contentType : 'application/json',
        success : function(response)  {
          console.log(response) ;
        } ,          
        error : function ( jqXHR ,  textStatus ,  errorThrown )  {                
        }
    } ) ;
  }  

  function  obtenerItemEspecifico2(idItem2) {
      $.ajax({
          dataType : 'json',
          url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/" + idItem2 ,
          tipo : 'GET',
          success : function(response)  {
            console.log (response) ;
            var item = response.items[0];      
            $("#miId2").val (item.id ) ;
            $("#name2").val(item.name) ;
            $("#email2").val(item.email) ;
            $("#age2").val(item.age) ;                
          } ,            
          error : function ( jqXHR ,  textStatus ,  errorThrown )  {                 
          }
      } ) ;      
  }


function actualizar2( ) {
  var  elemento = {
  id : $("#miId2" ).val( ) ,
  name : $("#name2" ).val( ) ,
  email : $("#email2").val( ) ,
  age : $("#age2").val( ) 
  }
        
  var  dataToSend = JSON.stringify( elemento ) ;
      // JSON = Notación de objetos JavaScript
  $.ajax({
          dataType : 'json' ,
          data : dataToSend ,
          contentType : 'application/json' ,
          url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
          type : 'PUT',              
          success : function(response)  {
          console.log(response) ;
           } ,              
          error : function ( jqXHR ,  textStatus ,  errorThrown )  {                    
            }
   } ) ;
      
}
/**^^^^^^^^^^^^^^^^^^ACCESO A LA TABLA MENSAJES ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* ************************************************************************************************************/

function registro3(){
  var elemento= {
    id: $("#miId3").val(),
    messagetext: $("#message3").val(),    
   }
  var  dataToSend = JSON.stringify ( elemento ) ;
  $.ajax({
  dataType : 'json' ,
  data : elemento ,
  url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message ",
  type: 'POST',      
  complete: function(respuesta) {
        console.log(respuesta);
  },      
  error : function (jqXHR, textStatus, errorThrown)  {          
  }
} ) ;
}

function obtenerItems3( ) {

$.ajax({
    dataType : 'json' ,
    url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message ",
    type : 'GET',        
    success : function( respuesta )  {         
      var  misItems = respuesta.items;  
      for ( i = 0 ; i < misItems.length ; i ++ ) {
       
        $("#miResultado3").append("<tr>");
        $ ( "#miResultado3" ).append ( "<td>" + misItems [ i ].id + "</td>" ) ;
        $ ( "#miResultado3" ).append ( "<td>" + misItems [ i ].messagetext + "</td>" ) ;                
        $ ( "#miResultado3" ).append ( '<td> <button onclick = "borrar3 (' + misItems[i].id +')"> Borrar </button> </td>' ) ;
        $ ( "#miResultado3" ).append ( '<td> <button onclick = "obtenerItemEspecifico3 (' + misItems[i].id + ')"> Cargar </button> </td>' ) ;
        $ ( "#miResultado3" ).append ( "</tr>" ) ;  
      }  
    } ,
            
    error : function ( jqXHR ,  textStatus ,  errorThrown )  {              
    }
} ) ;  
}


function borrar3( idElemento ) {
    var elemento = {
    id : idElemento
    };    
    var dataToSend = JSON.stringify(elemento) ;        
    $.ajax({
      dataType : 'json',
      data : dataToSend ,
      url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
      type : 'DELETE',
      contentType : 'application/json',
      success : function(response)  {
        console.log(response) ;
      } ,          
      error : function ( jqXHR ,  textStatus ,  errorThrown )  {                
      }
  } ) ;
}  

function  obtenerItemEspecifico3(idItem3) {
    $.ajax({
        dataType : 'json',
        url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/" + idItem3 ,
        tipo : 'GET',
        success : function(response)  {
          console.log (response) ;
          var item = response.items[0];      
          $("#miId3").val (item.id) ;
          $("#message3").val(item.messagetext) ;                        
        } ,            
        error : function ( jqXHR ,  textStatus ,  errorThrown )  {                 
        }
    } ) ;      
}

function actualizar3( ) {
var  elemento = {
id : $("#miId3" ).val( ) ,
messagetext : $("#message3" ).val( ) ,
}
      
var  dataToSend = JSON.stringify( elemento ) ;
    // JSON = Notación de objetos JavaScript
$.ajax({
        dataType : 'json' ,
        data : dataToSend ,
        contentType : 'application/json' ,
        url : "https://gfc83942be400e5-db202109232125.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type : 'PUT',              
        success : function(response)  {
        console.log(response) ;
         } ,              
        error : function ( jqXHR ,  textStatus ,  errorThrown )  {                    
          }
 } ) ;
    
}