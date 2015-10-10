var playVid ={
getId: jQuery(".myvideo:eq(0)").attr("data").split("/")[3],
getAutoPlay: jQuery(".myvideo:eq(0)").attr("data").split("/")[4],
getAutoMute: jQuery(".myvideo:eq(0)").attr("data").split("/")[5],
getWidth: jQuery(".myvideo:eq(0)").attr("data").split("/")[6],
getHeight: jQuery(".myvideo:eq(0)").attr("data").split("/")[7],
getTitle: jQuery(".myvideo:eq(0)").attr("data").split("/")[8],
getByLine: jQuery(".myvideo:eq(0)").attr("data").split("/")[9],
getPortrait: jQuery(".myvideo:eq(0)").attr("data").split("/")[10],
getLoop: jQuery(".myvideo:eq(0)").attr("data").split("/")[11],
getColor: jQuery(".myvideo:eq(0)").attr("data").split("/")[12],
playerId : 'vid_'+jQuery(".myvideo:eq(0)").attr("data").split("/")[3],
getFrameHtml: function(){
	return '<iframe id="'+this.playerId+'" src="http://player.vimeo.com/video/' + this.getId + '?api=1&autoplay='+this.getAutoPlay+'&player_id='+this.playerId+'&loop='+this.getLoop+'&title='+this.getTitle+'&portrait='+this.getPortrait+'&color='+this.getColor+'" ' +
            'width="'+this.getWidth+'" height="'+this.getHeight+'" frameborder="0"></iframe>';
},
play: function(){
	jQuery(".myvideo:eq(0)").html(playVid.getFrameHtml());
	var iframe = jQuery('#'+playVid.playerId)[0],
		player = $f(iframe);

	// When the player is ready, add listeners for pause, finish, and playProgress
	player.addEvent('ready', function(id) {
		// Set the API player
		if(playVid.getAutoMute==1){
			$f(id).api('setVolume', 0);
			console.log(playVid.getAutoMute);
		} else {
			$f(id).api('setVolume', 1);
			console.log(playVid.getAutoMute);
		}
	});
}
}
  jQuery(document).ready(function()
{

playVid.play();
});