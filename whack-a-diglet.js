(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"whack_a_diglet_atlas_1", frames: [[0,0,260,88]]}
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



(lib.CachedBmp_1 = function() {
	this.initialize(ss["whack_a_diglet_atlas_1"]);
	this.gotoAndStop(0);
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0066").s().p("EgpGAMMIAA4XMBSNAAAIAAYXg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263,-78,526.1,156.1);


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
	this.shape.graphics.f("#0099FF").s().p("AvEPFIAA+JIeJAAIAAeJg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-96.5,193,193);


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

	this.actionFrames = [1,2];
	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		this.start_btn.addEventListener("click", fl_MouseClickHandler.bind(this.start_btn));
		
		function fl_MouseClickHandler()
		{
			this.parent.gotoAndStop(2);
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(555));

	// Layer_1
	this.start_btn = new lib.start_button();
	this.start_btn.name = "start_btn";
	this.start_btn.setTransform(699.2,544.15);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 1);

	this.player_score = new cjs.Text("", "bold 40px 'Helvetica'");
	this.player_score.name = "player_score";
	this.player_score.lineHeight = 42;
	this.player_score.lineWidth = 126;
	this.player_score.parent = this;
	this.player_score.setTransform(140.05,10);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(10.05,8,0.5,0.5);

	this.mole3 = new lib.mole();
	this.mole3.name = "mole3";
	this.mole3.setTransform(790.25,512.65);

	this.mole2 = new lib.mole();
	this.mole2.name = "mole2";
	this.mole2.setTransform(522.15,259.1);

	this.mole1 = new lib.mole();
	this.mole1.name = "mole1";
	this.mole1.setTransform(248.55,512.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.start_btn}]},1).to({state:[{t:this.mole1},{t:this.mole2},{t:this.mole3},{t:this.instance},{t:this.player_score}]},1).wait(555));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,962.3,622.2);
// library properties:
lib.properties = {
	id: '8EF5CC4BE32F45D9B1943C3C08671051',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/whack_a_diglet_atlas_1.png?1618180108164", id:"whack_a_diglet_atlas_1"}
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