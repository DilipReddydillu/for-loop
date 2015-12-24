

var x=4;

var str="";
var char="";

  for(var i=x;i>0;i--)
  {       char="";
      for(var j=0;j<i;j++)
      {
          char=char+"*";
      }
      str=char;
    for(var k=(x-i);k<(2*(x-i));k++)
    {
        str=str+"  ";
    }

      str=str+char;

      console.log(str);
  }
