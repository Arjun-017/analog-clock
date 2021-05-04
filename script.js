		
		var c = document.getElementById("mycanvas");
		var ctx = c.getContext("2d");
		ctx.fillStyle = 'white';

		var sec = 0;
		var min = 0;
		var hour = 0;
		var angle = 0;
		const slength = 300;
		const mlength = 340;
		const hlength = 150;
		var tsec = 0;
		var tmin = 0;
		var thour = 0;
		var seca = 0;
		var mina = 0;
		var houra = 0;
		var sx = 0;
		var sy = 0;
		var mx = 0;
		var my = 0;
		var hx = 0;
		var hy = 0;
		var strokea = 0;
		var stkx1 = 0;
		var stky1 = 0;
		var stkx2 = 0;
		var stky2 = 0;

		function timeloop(){
		x=0;
		y=0;
		
		var current = new Date();
		hour = current.getHours();
		min = current.getMinutes();
		sec = current.getSeconds();
		if(hour>=12){
			hour = hour-12;
		}

		seca = (sec/60)*2*Math.PI;
		seca = seca + (Math.PI/2.0);
		sx = 400 - Math.cos(seca) * slength;
		sy = 400 - Math.sin(seca) * slength;

		mina = (min/60)*2*Math.PI;
		mina = mina + (Math.PI/2.0);
		mina = mina + (sec/60.0)*(1/30.0)*Math.PI;
		mx = 400 - Math.cos(mina) * mlength;
		my = 400 - Math.sin(mina) * mlength;

		houra = (hour/12.0)*2*Math.PI;
		houra = houra + (Math.PI/2.0);
		houra = houra + (min/60.0)*(1/6.0)*Math.PI;
		hx = 400 - Math.cos(houra) * hlength;
		hy = 400 - Math.sin(houra) * hlength;
		drawCircle();
		draw(sx,sy,4);
		draw(mx,my,10);
		draw(hx,hy,18);
		}

		function drawCircle(){
			ctx.strokeStyle = "#ffffff";
			ctx.clearRect(10,10,800,800);
			ctx.beginPath();
			ctx.lineWidth = 12;
			ctx.arc(400, 400, 360, 0, 2 * Math.PI);
			for (var i = 0; i < 12; i++) {
				strokea = (i/6.0)*Math.PI;
				stkx1 = 400 - Math.cos(strokea) * 360;
				stky1 = 400 - Math.sin(strokea) * 360;
				stkx2 = 400 - Math.cos(strokea) * 320;
				stky2 = 400 - Math.sin(strokea) * 320;
				ctx.moveTo(stkx1,stky1);
				ctx.lineTo(stkx2,stky2);
				ctx.stroke();
				
				
			}
		}

		function draw(x,y,n){
		ctx.strokeStyle = "#ffffff";
		ctx.beginPath();
		ctx.moveTo(400,400);
		ctx.lineWidth = n;
		ctx.lineTo(x,y);
		ctx.stroke();
		}

		setInterval(timeloop,1000);