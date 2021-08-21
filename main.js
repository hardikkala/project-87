
// Create canvas variable
var canvas
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	gr.png
	pr.png
	rr.png
	rr1.png
	yr.png 
	br.png
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image("rr.png")
		// upload red ranger
		console,log(r)
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("gr.png")
		// upload green ranger
		console.log(g)
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("yr.png")
		// upload yellow ranger
		console.log(y)
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.png")
		// upload pink ranger
		console.log(p)
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("br.png")
	// upload blue ranger
	console.log(b)
	}
	
}

