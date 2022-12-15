 	var text= document.createElement("p");
	//text.style.textAlign = "center";
	text.classList.add("styl");
    document.body.appendChild(text);
	text.innerHTML="PRIME NUMBER PROGRAM";
	document.write("<br/>", "<br/>");
	
	var input1=document.createElement("INPUT");
	input1.setAttribute("type","text");
	input1.setAttribute("placeholder","Enter a number:");
	input1.setAttribute("id","mod");
	input1.classList.add("mystyle");
	document.body.appendChild(input1);
	document.write('<br/>','<br/>.');
	
	//document.body.style.textAlign="center";
	document.body.classList="home";

	button=document.createElement("button");
	button.setAttribute("onclick","sub()");
	button.innerText="Click";
	button.classList.add("but");
    document.body.appendChild(button)
	
	
    p=document.createElement("div");
	p.classList.add("add");
   // p.style.paddingTop="20px";
    document.body.appendChild(p) ;
   
   


   function sub()
{
var value1=document.getElementById("mod").value;
flag=true;
for(i=2;i<value1;i++)
{
	if(value1%i==0)
	{
		flag=false;
	}
	
}
if(flag==true)
{
	p.innerHTML+="It is an prime number";
}
else
{
	p.innerHTML+="It is not an prime number";
	
}
 
}