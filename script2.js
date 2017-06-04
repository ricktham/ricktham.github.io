
var x = 13;
var y=0;
var number=0;
var tries = 0;

for(tries =0; tries<=5; tries++)
{
// while(y == false){
	number=prompt("what is your guess");
if(number<x)
{
	alert("The number is higher");
	
}
else if(number>x)
{
	alert("The number is lower");
	

}
else if(number == x)
{
	alert("correct");
	y=true;
	
}
	else if (tries == 5)
	{
		y=true;
	}
}
alert(tries);
alert("you are stupid");