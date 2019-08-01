/*

USAGE:

<script>
$(document).ready(function(){
let delayTimeInMs = 30; // put a higher number for more delay
let fadeSpeedInMs = 300; // put a higher number for a slower fade
$("a[title]").style_my_tooltips({
    tip_delay_time: delayTimeInMs, 
    tip_fade_speed: fadeSpeedInMs
});
});
</script>

*/

//style-my-tootltips by malihu (http://manos.malihu.gr)
//plugin home http://manos.malihu.gr/style-my-tooltips-jquery-plugin
//updated for new jquery version and hosted by cloudythms.tumblr.com
(function($){
	var methods={
		init:function(options){
			var defaults={ 
				tip_follows_cursor:true, //tooltip follows cursor: boolean
				tip_delay_time:30, //tooltip delay before displaying: milliseconds
				tip_fade_speed:300, //tooltip fade in/out speed: milliseconds
				attribute:"title" //tooltip text come from this attribute
			},
			options=$.extend(defaults,options);
			if($("#s-m-t-tooltip").length===0){
				$("body").append("<div id='s-m-t-tooltip'><div></div></div>");
			}
			var smtTooltip=$("#s-m-t-tooltip"); 
			smtTooltip.css({"position":"absolute","display":"none"}).data("smt-z-index",smtTooltip.css("z-index")).children("div").css({"width":"100%","height":"100%"});
			function smtGetCursorCoords(event){
				var smtCursorCoordsX=event.pageX,
					smtCursorCoordsY=event.pageY;
				smtTooltip.style_my_tooltips("position",{
					smtCursorCoordsX:smtCursorCoordsX,
					smtCursorCoordsY:smtCursorCoordsY
				});
			}
			$(".smt-current-element").on("mouseout mousedown click",function(){
				var $this=$(this);
				clearTimeout(smtTooltip_delay);
				smtTooltip.style_my_tooltips("hide",{
					speed:$this.data("smt-fade-speed")
				});
				$(document).unbind("mousemove");
				$this.removeClass("smt-current-element");
				if($this.attr(options.attribute)===""){
					$this.attr(options.attribute,$this.data("smt-title"));
				}
			});
			return this["on"]("mouseover",function(event){
				var $this=$(this),
					title=$this.attr(options.attribute);
				$this.addClass("smt-current-element").data({"smt-title":title,"smt-fade-speed":options.tip_fade_speed}).attr(options.attribute,"");
				smtTooltip.style_my_tooltips("update",{
					title:title,
					speed:options.tip_fade_speed,
					delay:options.tip_delay_time,
					tip_follows_cursor:options.tip_follows_cursor
				});
				$(document).bind("mousemove", function(event){
					smtGetCursorCoords(event); 
				});
			});
		},
		update:function(options){
			console.log("update");
			var $this=$(this);
			$this.stop().css({"display":"none","z-index":$this.data("smt-z-index")}).children("div").text(options.title);
			smtTooltip_delay=setTimeout(function(){
				$this.style_my_tooltips("show",{
					speed:options.speed,
					tip_follows_cursor:options.tip_follows_cursor
				})
			}, options.delay);
		},
		show:function(options){
			console.log("show");
			var $this=$(this);
			$this.stop().fadeTo(options.speed,1);
			if(!options.tip_follows_cursor){
				$(document).unbind("mousemove");
			}
		},
		hide:function(options){
			console.log("hide");
			var $this=$(this);
			$this.stop().fadeTo(options.speed,0,function(){
				$this.css({"z-index":"-1"});
			});
		},
		position:function(options){
			var $this=$(this),
				winScrollX=$(window).scrollLeft(),
				winScrollY=$(window).scrollTop(),
				tipWidth=$this.outerWidth(true),
				tipHeight=$this.outerHeight(true),
				leftOffset=(options.smtCursorCoordsX+tipWidth)-winScrollX,
				topOffset=(options.smtCursorCoordsY+tipHeight)-winScrollY;
			if(leftOffset<=$(window).width() && leftOffset<=$(document).width()){
				$this.css("left",options.smtCursorCoordsX);
			}else{
				var thePosX=options.smtCursorCoordsX-tipWidth;
				if(thePosX>=winScrollX){
					$this.css("left",thePosX);
				}else{
					$this.css("left",winScrollX);
				}
			}
			if(topOffset<=$(window).height() && topOffset<=$(document).height()){
				$this.css("top",options.smtCursorCoordsY);
			}else{
				var thePosY=options.smtCursorCoordsY-tipHeight;
				if(thePosY>=winScrollY){
					$this.css("top",thePosY);
				}else{
					$this.css("top",winScrollY);
				}
			}
		}
	}
	$.fn.style_my_tooltips=function(method){
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
})(jQuery);  
