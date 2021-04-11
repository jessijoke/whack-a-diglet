(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"whack_a_diglet_atlas_1", frames: [[1054,1245,570,200],[0,1068,1052,312],[1054,1068,942,175],[0,0,776,864],[1626,1245,260,88],[0,866,1908,200],[778,0,776,864]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["whack_a_diglet_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["whack_a_diglet_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["whack_a_diglet_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["whack_a_diglet_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["whack_a_diglet_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["whack_a_diglet_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["whack_a_diglet_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.start_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-152.35,-46.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-263.05,-78,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263,-78,526,156);


(lib.mole = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#654836").s().p("ABgD5QAKgGAbgMQAYgMANgIQARgMABgOQAAgFgFgOQgJgdABg6QAAgbAEgMQAJgXATgKQAFAKAJAUQAIARALAIIACACQgFAjAMAfQAKAYATASIAPALIgCACIgBABIgBABQgUAVgVAIIgmAJQgrAIgqAOIgBABQgWAIgJACIgBAAIgLACIAPgLgAmADbIAagRQARgKAFgHQAEgGAFgUQAJgaADgNQACgJAAgOIAAgXQACgVAHgOQAcAgAKAiQAJAdgGAYQgJAgghAWIgMAIIgGgCQgQgHgSAFIgRAFIAAgBIgRAEIAHgFgAKyCSIAmgdQAUgOAHgHQAOgOANglQADgLABgHQABgHgDgKIgFgPQgGgRABgPIABgFIAHAFIADACIABAAIAjATQAWAOANATQgEAMACAMQABAMAAARQAAAUgDAKIAAABIgQAMQghAWgSAGQgSAFggABIgBAAIgzAEIAHgFgAwtBDIgBgCIgBAAIgdgFQAjgLAigRQAUgJAJgMQADgFADgHIAFgNQAIgSAPgMQANgLACgFQACgFgBgMIgLiDQgCgXABgMIADgQIAHADIADACIACAAQArAVASAjQAHAPAIAmQAHAkAKARQAIAOAXAVIAEADQgDAHgEAHQgzAkgWAoQgHAMgEANIgMgNQgNgLgNgDQgGgCgZAAQgVAAgGADQgJAEgJAMIgLARQgQgGgQAFgANSguIgngXIgVgNIABgBQATgQAFgSIAAgEIABgKIAAgDQAKAGAKAKQAKAIAQASQAaAbAfARQAYANARAAQASAAAbgPIAygaQAagOAUgIIAAAAQAAAIgDAHIAAACQgGAQgQAIIAAAAQgKAFgYAFIABAAIg0AMQg2ANggACQgLABgKAEQgNgQgVgPg");
	this.shape.setTransform(24.8,100.2125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#997C5F").s().p("AByEaIg0gEQgegCgRgFQgZgJgLgUIgKgZQgDgIgHgMIgMgUQgOgcAHggQAHghAYgUQAKgJADgEQACgEABgQQATgPAXgMQAvgXAwgIIALgCIAYAMQBDAhAxA7QATAYAFARQAFAOgBAWQgBAXgIAMQgGAHgQAKIhwBDQgPAJgIACIgMABIgLgBgAnUD4QgigDg5gNIgzgLQgvgMgVgMQgUgKgJgPQAGgjAqgnQAwgsA0gZQAggQAigJIANgDIACgBIADAAIABAAQAbgFAagBQAXAKAkAYIA/ArQAgAUAMASQAMARAFAdQAFAegJARQgGANgOAIQgOAHgOgCIgQgCQgHAAgNAFQgvATg7AAQgSAAgSgCgAIPDOQgtgEgPgUQgLgOAAgVQAAgLADgLIACgEIARgdIABgBIABgBIABgBIABgBIABgBQAKgNASgPIAggZQAXgTAcgcQAQgQAIgGQAOgLANgDQAKgDATAAIAEAAIAOABIAPABQARAIAHAGQAOAMADARQACANADAEIALAIIANAKQAEADASAFQAiAHAQASQAPASgBAUQgBAMgLAXQgIAPgFAHQgIALgLAFQgLAFgYgEQgZgEgLADQgFABgIAEIgNAGQgRAGgfABQgXABgIADIgQAHQgKAFgGABQgHACgPAAQgfgBgfgCgAv/AbIgUgDIgUgBIgVgCQgZgDgNgLQgUgQABgiIABgFIBEhCQAxguAYgRQAWgOAPgGQAXgHAfACQAOABAVAEQAOANAEAVQAFAagPAaIgKASQgEAJgCASQgCASgEAIQgGAMgNAOQgQAQgKAGQgHADgKADIgRAFQgeAIgHABIgEAAIgQgBgAQlhNQgPgIgFgOQgCgHgBgPQgBgPgDgIQgDgJgLgMQgOgOgDgGQgKgQAFgTQADgOAIgJIBVAbQAsAOAVAJIAAAAQArAUAdAfIgCAEQgIAQgOAHQgGADgLADIgSAEQgFACgTALQgjAUgWABIgDAAQgOAAgNgGgAzOitIAHgJIAAgBQAng6A0gcIAAAAQAZgNAWAAIAAABIAGABIAEAIQAJAbgiAgQgTASgaAPQgXANgTADIgLAAQgSAAgOgJg");
	this.shape_1.setTransform(7.2125,91.7317);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#846856").s().p("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");
	this.shape_2.setTransform(8.2668,95.1707);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B44620").s().p("AngQOQGKhjD7i+QEGjEBkk8QBlk8gclCQgblDg+iuQgghagcg8QBTBtApCDQB/GbgCGbIAAAIIAAABQgHDpgnDnQgiC8g+C8QguAcgdAuQipgchwCCQgNgKgSgDIgBAAQgogEgfAVQjZirjdCtQgLgIgPgDQg0gNgrAcgAoTCNQgygLgcgPQg1gfglhLIAbAPIACABIAKAFIADACQBXAnBiABQBzAJBzgOIABAAIAOgCQCSgUB5g6QBrg0AchIIAAgBQANgfABgyIAAAAIAAgGQAAgcgEgYIAKAOQAaAqADA1QADAzgTAwQgkBZhgA6QhMAuhwAWQhjAUhjAAQhuAAhvgZg");
	this.shape_3.setTransform(35.4396,-12.6125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CF3B50").s().p("AhrCDQh6gChwgtQgsgSgagnIgFgHIgPgdIgDgKIAIAEQCdBXC5AHQC6AHCihNQBQgjAwgxQAagbARgdIAAADIgBAgIAAABQgHA8goAkQgWAWgvAVQh6A4iHAUQhIAMhKAAIgWgBg");
	this.shape_4.setTransform(4.85,-23.9496);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE636D").s().p("AhQDeQi6gHidhYIgHgEIADALQgQgrAHgxQAEgZAIgWIANANQAhAjAaAPQA2AeBegFQBggFBuggQBCgTApgYQAegQANgVQARgbgGgkQgGgigZgYQgFgFABgEQhLgig1gMQgYgFgkgDQEGgbDPCpIAJARQASAiADAlQgRAdgbAbQgvAwhQAlQiVBGioAAIgfgBg");
	this.shape_5.setTransform(4.451,-38.283);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FC8584").s().p("AjeB+QgagPghgjIgNgOQATgzAogmQBZhVB5gWQAvgMAvgEQAkADAZAFQA1AMBLAiQgBAEAFAFQAZAYAGAiQAGAjgRAbQgNAVgeARQgpAYhCATQhvAghfAFIgcAAQhKAAgugZg");
	this.shape_6.setTransform(-8.5351,-45.058);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C66F2E").s().p("Ah8TQQgZgMgcgKIAAAAQgwgRgjgFQgjgGghABIAAAAQhHADhKAhIAAAAQgTAJgTAKIgNgOIAAAAIgMgNQgGgKgCgQIAAABQgCgagDgNIABAAQgJgvglglQgigjgvgPQgPgEgZgFIglgIIAAAAIgqgJIAAAAIgHgCIAAgFQACgLgEgLIgShGIgEgMIgKgkQgWhRgUhRIgCgLIgBgEIgBgEQgRhFgPhFQgWhvgRhwQgqkLASkOIABgIQAYkFB5jhIACgDQDEA/ElkIQEHjshSg1QDzgsDyBMQDoBJCoCkIACACQARAMAQAWIABACQAXAYAVAaIAUAZQAdA9AfBZQA+CuAcFDQAbFChkE8QhkE8kGDFQj9C9mJBkgAjXkQIgBAAQghATghAWIAAAAQghAWgfAZIAAAAQgrAkgSAyQgNAlgHAlIAAAAQgSBiA3BRIABAAQARAYAXASIAKAHIABAAIAPAJQAlBLA1AfQAcAPAyALQDRAvDRgqQBxgWBMguQBgg6AkhaQATgwgDgzQgDg0gagqIgKgOQgDgTgFgSIAAAAIgDgKIgIgRIgBgCQgxhLhPgoQhwg5h/gUIAAAAQg4gIg1AAQiZAAh/BDgAlKpfQhIAQgpAUQhGAigsBCIAAAAQgfAwgCApIAAABQgBATAHALQAFAKAJAGIABAAQALAHALgCIAAAAQAcABAJguIAAAAQAMg5AsglQAagWAmgPIABAAQAcgLAwgLQAjgIASADIABAAQAGABAQAGIAAAAQAaAKALAHQAPAKAPARIgBgBIAeAlIAAAAQAYAdAXgIIAAAAQAQgDAIgRIAAAAQAGgMgCgOIAAgBQgBgNgSgWIAAAAQgqg0gjgUQgTgMgggLQgogNgbABIAAAAIAAAAQgRAAghAHgAHboZQAhAMAaAXQAbAYAOAeIAAABIANAhIABABQAEAMABAKQAEAgAMAHIABABQANALATgGIACAAQAOgGAIgMIABgCQAJgPgEgdQgHgygcgsQgcgsgpgdIAAAAQgpgdg0gOIAAABQgxgNg0AEQhEAFgyAfIgBAAQgYAPgmAjIAAAAIgfAdIABAAQgYAWgDARIAAABQgEARAKAQQAMASATgBQAOADAVgVIABgBQAyg5AogXQAngWAugEIAAAAIAUgBQAkAAAiAMg");
	this.shape_7.setTransform(-2.1952,-33.0489);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D0843D").s().p("AlYDvIA8hbQDTk1FshSIAAAAIAigHQBSA1kHDrQjsDVitAAQgpAAgmgMg");
	this.shape_8.setTransform(-50.5964,-130.6249);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#35120A").s().p("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");
	this.shape_9.setTransform(8.1384,-15.5579);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.7,-168.8,275.79999999999995,306.6);


// stage content:
(lib.whackadiglet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [1,2,557];
	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		this.start_btn.addEventListener("click", fl_MouseClickHandler.bind(this.start_btn));
		
		function fl_MouseClickHandler()
		{
			this.parent.gotoAndPlay(2);
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
	}
	this.frame_2 = function() {
		this.mole1.addEventListener("click", mole_hit.bind(this.mole1));
		this.mole2.addEventListener("click", mole_hit.bind(this.mole2));
		this.mole3.addEventListener("click", mole_hit.bind(this.mole3));
		
		score = 0;
		this.player_score.text = score;
		
		moles = [this.mole1, this.mole2, this.mole3]
		
		function mole_hit()
		{
			score += 50;
			this.gotoAndStop(0);
			this.parent.player_score.text = score;
			console.log(score);
		}
		
		setInterval(triggerMoles.bind(this), 500);
		
		function triggerMoles() {
			for (var i = 0; i < moles.length; i++) {
				if (Math.floor(Math.random() * 5) == 1) {
					moles[i].gotoAndPlay(2);
				}
			}
		}
	}
	this.frame_557 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(555).call(this.frame_557).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(40.5,57.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(71.65,280.8,0.5,0.5);

	this.start_btn = new lib.start_button();
	this.start_btn.name = "start_btn";
	this.start_btn.setTransform(759.25,589.55,0.8274,1);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 1);

	this.player_score = new cjs.Text("", "bold 40px 'Helvetica'");
	this.player_score.name = "player_score";
	this.player_score.lineHeight = 42;
	this.player_score.lineWidth = 243;
	this.player_score.parent = this;
	this.player_score.setTransform(140.05,10);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(10.05,8,0.5,0.5);

	this.mole3 = new lib.mole();
	this.mole3.name = "mole3";
	this.mole3.setTransform(790.25,512.65);

	this.mole2 = new lib.mole();
	this.mole2.name = "mole2";
	this.mole2.setTransform(512,259.1);

	this.mole1 = new lib.mole();
	this.mole1.name = "mole1";
	this.mole1.setTransform(248.55,512.65);

	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(49.75,139.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(297.75,255.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.start_btn},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.mole1},{t:this.mole2},{t:this.mole3},{t:this.instance_2},{t:this.player_score,p:{scaleX:1,scaleY:1,x:140.05,y:10,lineWidth:243}}]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.player_score,p:{scaleX:1.9899,scaleY:1.9899,x:579.45,y:143.9,lineWidth:242}}]},555).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C6538").s().p("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");
	this.shape.setTransform(507.3167,391.66);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(556));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1064.1,718.1);
// library properties:
lib.properties = {
	id: '8EF5CC4BE32F45D9B1943C3C08671051',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#6B9141",
	opacity: 1.00,
	manifest: [
		{src:"images/whack_a_diglet_atlas_1.png?1618183248076", id:"whack_a_diglet_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8EF5CC4BE32F45D9B1943C3C08671051'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;