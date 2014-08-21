var eye = $("#eye");
var pupil = $("#pupil");

var e_radius = parseInt(eye.attr("r"));
var p_radius = parseInt(pupil.attr("r"));



function move_pupil(mouse_x,mouse_y){
	
	eye_pos = eye.position();
	svg = $("#svg1");
	svg_pos = svg.position();


	
cx = eye_pos.left+svg_pos.left+57;
	cy = eye_pos.top+svg_pos.top+57;


	dx = cx + e_radius - mouse_x;
	dy = cy + e_radius - mouse_y;
	R = Math.min(Math.sqrt(dx*dx+dy*dy),e_radius-p_radius);

	angle = Math.atan2(dy,dx);

	x = e_radius - p_radius - (R*Math.cos(angle));
	y = e_radius - p_radius - (R*Math.sin(angle));

	xa = cx - x;
	ya = cy - y;



	pupil.attr("cx",x+parseInt(eye.attr("cx"))-57);
	pupil.attr("cy",y+parseInt(eye.attr("cy"))-57);





}


$(window).on("mousemove",function(event){
	move_pupil(event.pageX,event.pageY);
});

var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {
    
    rgb = [
        Math.round(e.pageX/w * 255),
        Math.round(e.pageY/h * 255),
        150
    ];
    
    $(document.body).css('background','rgb('+rgb.join(',')+')');
    
}).resize();