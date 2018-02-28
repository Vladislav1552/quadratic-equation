module.exports = function solveEquation(equation) {
    var arr = equation.split(' ') ; 
var a= arr[0];
var b =0;
var c =0;
var s =0;
var s2 = 0;  
var x = [];
 
if(arr[3]=='-'){
   b= -arr[4];

}else{
 b= arr[4];
}

if(arr[7]=='-'){
    c= -arr[8];
 
 }else{
  c= arr[8];
 }
      var d = ((b*b)-4*(a * c));   
      var k = Math.sqrt(d);
      s = Math.round(-b - k)/(2 * a);
      s2 = Math.round(-b + k)/(2 * a);
          if (a < 0)
              {
          
                   x = [s2,s];
              
              }else{
        
                 x = [s,s2];
               
              }
              return x;
      




}