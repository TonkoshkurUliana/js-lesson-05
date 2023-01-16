function alert(array) {
	console.log(array);
	console.log('----------------------------------------');
}


var buffer = makeBuffer();
function makeBuffer(){
  var message ='';

      return {
          add : function(value){
              message += value + ' ';
          },

          clear : function(){
              message = '';
          },

          print : function(){
              return message;
          }
      }
}

var buffer = makeBuffer();
buffer.add( 'JavaScript');
buffer.add( 'Вчити');
buffer.add( 'Потрібно!');
alert(buffer.print());

var buffer1 = makeBuffer ();
buffer1.add(0);
buffer1.add(1);
buffer1.add(0);
alert (buffer1.print()); // '

var buffer2 = makeBuffer ();
buffer2.add("Тест");
buffer2.add("тебе не з'їсть");
alert(buffer2.print()); // Тест тебе не з'їсть
buffer2.clear ();
alert(buffer2.print()); // ""