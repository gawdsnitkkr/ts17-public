(function(d, dO, $) {

	var Vars = {
		noOfStars: null,
		star: null
	},
	DOM = {
		starBackgorund: null
	},
	Functions = {
		addStars: function() {
			for(var i = 1; i <= Vars.noOfStars; i++) {
				Vars.star = document.createElement('div');
				Vars.star.className = 'star';
				var r = Functions.getRandomInt(1,3);
					if(r == 1)
						Vars.star.className = 'star1';
					else if(r == 2)
						Vars.star.className = 'star2';
					else if(r == 3)
						Vars.star.className = 'star3';
				Vars.star.style.left = Functions.getRandomInt(0, window.innerWidth) + 'px';
				Vars.star.style.top = Functions.getRandomInt(0, window.innerHeight) +'px'
				DOM.starBackground.append(Vars.star);
			}
		},
		twinkle: function() {
			TweenMax.staggerTo(".star1", 0.5, {
				scale: 2,
				repeat: -1,
				yoyo: true, 
				ease: Power0.easeNone
			}
			, 0.1
			);
			TweenMax.staggerTo(".star2", 0.5, {
				scale: 2.5,
				repeat:-1,
				yoyo: true,
				delay: 1, 
				ease: Power0.easeNone
			}
			, 0.1
			);
			TweenMax.staggerTo(".star3", 0.5, {
				scale: 3,
				repeat:-1,
				yoyo: true,
				delay: 2, 
				ease: Power0.easeNone
			}
			, 0.1
			);
			TweenMax.to("#astronaut", 10, {
				rotationZ: 360, 
				repeat: -1,
				ease: Power0.easeNone
			}
			);
		},
		move: function() {
			console.log('moving');
			var tp = Functions.getRandomInt(-200, window.innerHeight+200) + 'px';
			var lft = Functions.getRandomInt(0, (window.innerWidth/6) + 200) + 'px';
			$('#astronaut').animate( {
				left: lft,
				top: tp,
			}, 10000);
		},
		getRandomInt: function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;		
		},
		callInterval : function() {
			console.log('call interval');
			setInterval(function(){
				Functions.move();
			},10001);
		},
					
	};
	dO.ready( function() {
		DOM.starBackground = $('#star-background');
		Vars.noOfStars = Functions.getRandomInt(100, window.innerWidth) / 3;
		Functions.addStars();
		Functions.twinkle();
		Functions.move();
		setTimeout(function(){
			Functions.callInterval();
		}, 10001);
	});
})(document, jQuery(document), jQuery);