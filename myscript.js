//creating function createObject
function createObject()
{
  this.Name = "Bala" 
  this.Height ="180";
  this.Aboutyourself = function()
  { 
    return "I am" + " " + this.Name + "." + " " + "I am"+ " " + this.Height + " " + "cm height.";
  }
}
//create object
var me = new createObject();
//display the result in console
console.log(me.Aboutyourself());