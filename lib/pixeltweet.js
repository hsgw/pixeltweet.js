/**
 *	pixeltweet.js - v 1.0 - 2015-03-11
 *  (c) 2015, Takuya Urakawa
 *  This library released under MIT Licence.
 *
 *	pixeltweet is develop and released by m7kenji and HANDSUM.inc
 *	http://pixeltweet.hand-sum.com/
 */

;(function($) {
	$.fn.drawPt = function(options) {
		var setting = $.extend({
			size: 320,
			data: undefined
		}, options);

		if(!checkData(setting.data)) setting.data = undefined;

		this.each(function(){
			if(setting.data === undefined){
				setting.data = $(this).getPtData();
			}else{
				$(this).setPtData(setting.data);
			}

			if(setting.data !== undefined) {
				// delete past canvas
				$(this).children().remove("canvas");
				// create canvas
				$(this).append('<canvas width="' + setting.size + '" height="' + setting.size + '"></canvas>');
				var c = $(this).children("canvas")[0].getContext('2d');
				
				// draw pixel
				var pixelSize = setting.size / 16;
				for(y=0;y<16;y++){
					for(x=0;x<16;x++){
						c.drawImage($.pixeltweet.pixels[setting.data.charCodeAt((y + 1)*18 + (x + 1)) - 48], pixelSize*x, pixelSize*y, pixelSize, pixelSize);
					}
				}
				
			}

		});

		return this;
	};

	$.fn.setPtData = function(data) {
		if(checkData(data)){
			this.attr("data-pt", data);
		}
		return this;
	}

	$.fn.getPtData = function(){
		return this.attr("data-pt");
	}

	function checkData(data){
		return ($.type(data) == "string" && data.match(/[0-3]{324}/));
	}

	$.pixeltweet = {};

	$.pixeltweet.parse = function(data){
		if($.type(data) != "string" && data.length != 18*18) {
			return undefined;
		}
		var dist = new Array(16*16);
		var temp;

		for(y=0;y<16;y++){
			for(x=0;x<16;x++){
				dist[y*16 + x] = data.charCodeAt((y + 1)*18 + (x + 1)) - 48;
			}
		}
		return dist;
	}

	$.pixeltweet.arrayToString = function(array){

		if($.type(array) != "array" && array.length != 16*16){
			return undefined;
		}

		var dist = "000000000000000000";
		var temp;

		for(var y=0;y<16;y++){
			dist += "0";
			for(var x=0;x<16;x++){
				temp = array[y*16+x];
				if(0 <= temp && temp <= 3){
					dist += String(temp);
				}else{
					return undefined;
				}
			}
			dist += "0";
		}
		dist += "000000000000000000";
		return dist;
	}

	// png
	$.pixeltweet.pixels = new Array(4);

	$.pixeltweet.pixels[0] = new Image();
	$.pixeltweet.pixels[0].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAMFBMVEUAAACAAAAAgACAgAAAAICAAIAAgIDAwMCAgID/AAAA/wD//wAAAP//AP8A//////9PEyZJAAAAD0lEQVR4nGP4DwcMw40JAJ/nxzn2cDeJAAAAAElFTkSuQmCC";

	$.pixeltweet.pixels[1] = new Image();
	$.pixeltweet.pixels[1].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAMFBMVEUAAACAAAAAgACAgAAAAICAAIAAgIDAwMCAgID/AAAA/wD//wAAAP//AP8A//////9PEyZJAAAADElEQVR4nGNgGL4AAADcAAHxxK7gAAAAAElFTkSuQmCC";

	$.pixeltweet.pixels[2] = new Image();
	$.pixeltweet.pixels[2].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAMFBMVEUAAACAAAAAgACAgAAAAICAAIAAgIDAwMCAgID/AAAA/wD//wAAAP//AP8A//////9PEyZJAAAAFElEQVR4nGNg+A+HSEysggxDTC0A0FpjnZFyBQEAAAAASUVORK5CYII=";

	$.pixeltweet.pixels[3] = new Image();
	$.pixeltweet.pixels[3].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAMFBMVEUAAACAAAAAgACAgAAAAICAAIAAgIDAwMCAgID/AAAA/wD//wAAAP//AP8A//////9PEyZJAAAAFUlEQVR4nGNg+A+HSMz/cIDMHGJqAfs6lWuk/S1NAAAAAElFTkSuQmCC";

}) (jQuery);