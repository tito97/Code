/* Skin for dvs htmml5 player */
function ClassicSkinPlay() {

// Configparams
	this.controlHeight=31;
// Limits
	this.minWidth=300;
	this.minHeight=200;
	
	this.Separators;  // separators
	this.simpleRefresh=false;

// set start skin parameters and create additional oblects
    this.SetSkin = function(playerObject) {
   
		if(playerObject.settings.width < this.minWidth)
		{
			playerObject.settings.width=this.minWidth;
			playerObject.dvsplayer.width=this.minWidth;
		}
		if(playerObject.settings.height < this.minHeight)
		{
			playerObject.settings.height=this.minHeight;
			playerObject.dvsplayer.height=this.minHeight;
		}
		
		playerObject.settings.displayVolumeDigital=false;
   
		// set skin style
		playerObject.dvs_play_conteiner.style.height=playerObject.settings.height + "px";
		
		playerObject.dvsplayer.style.height=(playerObject.settings.height-this.controlHeight)+"px";
		
		playerObject.dvs_play_conteiner.style.width = playerObject.dvsplayer.clientWidth + "px";
        playerObject.dvs_play_conteiner.style.backgroundColor = playerObject.settings.backgroundColor;
		
		playerObject.dvs_play_control.style.backgroundColor=playerObject.settings.controlBackgroundColor;
		playerObject.dvs_play_control.style.width=playerObject.settings.width + "px";
		playerObject.dvs_play_control.style.height=this.controlHeight + "px";
		playerObject.dvs_play_control.style.position="absolute";
		playerObject.dvs_play_control.style.top=(playerObject.settings.height-this.controlHeight)+"px";
		playerObject.dvs_play_control.style.left="0px";

        //video
        //playerObject.dvsplayer.style.backgroundColor = "#000000";

        playerObject.currPosDigitalDisplay.style.display = "none";
        playerObject.currVolumeDigitalDisplay.style.display = "none";

        playerObject.PlayPauseButton.style.left = "0px";
        playerObject.PlayPauseButton.style.top =  4 + "px";
		
		// create additional objects
		playerObject.volumecontrol.shadeControl= document.createElement('div');
		playerObject.volumecontrol.appendChild(playerObject.volumecontrol.shadeControl);
		playerObject.volumecontrol.shadeControl.style.position = "absolute";
		playerObject.volumecontrol.shadeControl.style.left = "0px";
        playerObject.volumecontrol.shadeControl.style.top = "0px";
		playerObject.volumecontrol.shadeControl.style.height="8px";
		playerObject.volumecontrol.shadeControl.style.backgroundColor="transparent";
		playerObject.volumecontrol.shadeControl.style.backgroundImage = "url('dvs/images/volshade.png')";
		playerObject.volumecontrol.shadeControl.style.backgroundRepeat = "repeat-x";
		playerObject.volumecontrol.shadeControl.style.width=playerObject.volumepicMarker.clientLeft+"px";
		
		
		playerObject.poscontrol.shadeControl= document.createElement('div');
		playerObject.poscontrol.appendChild(playerObject.poscontrol.shadeControl);
		playerObject.poscontrol.shadeControl.style.position = "absolute";
		playerObject.poscontrol.shadeControl.style.left = "0px";
        playerObject.poscontrol.shadeControl.style.top = "2px";
		playerObject.poscontrol.shadeControl.style.height="4px";
		playerObject.poscontrol.shadeControl.style.backgroundColor="#66cc33";
		playerObject.poscontrol.shadeControl.style.width=(playerObject.pospicMarker.offsetLeft+2)+"px";
		
		this.Separators = Array();
		
		//separators
		this.Separators[0]=document.createElement('div');
		this.Separators[0].style.height="27px";
		this.Separators[0].style.width="1px";
		this.Separators[0].style.backgroundColor="#999999";
		this.Separators[0].style.position="absolute";
		this.Separators[0].style.left="155px";
		this.Separators[0].style.top= (4)+"px";
		playerObject.dvs_play_control.appendChild(this.Separators[0]);
		
		this.Separators[1]=document.createElement('div');
		this.Separators[1].style.height="27px";
		this.Separators[1].style.width="1px";
		this.Separators[1].style.backgroundColor="#999999";
		this.Separators[1].style.position="absolute";
		this.Separators[1].style.left=(playerObject.dvsplayer.clientWidth-49)+"px";
		this.Separators[1].style.top= (4)+"px";
		playerObject.dvs_play_control.appendChild(this.Separators[1]);
		
		this.Separators[2]=document.createElement('div');
		this.Separators[2].style.height="27px";
		this.Separators[2].style.width="1px";
		this.Separators[2].style.backgroundColor="#999999";
		this.Separators[2].style.position="absolute";
		this.Separators[2].style.left=(playerObject.dvsplayer.clientWidth-119)+"px";
		this.Separators[2].style.top= (4)+"px";
		playerObject.dvs_play_control.appendChild(this.Separators[2]);
		
		//Video title block
		playerObject.VideoTitleBlock=document.createElement('div');
		playerObject.dvs_play_control.appendChild(playerObject.VideoTitleBlock);
		playerObject.VideoTitleBlock.style.position = "absolute";
		playerObject.VideoTitleBlock.style.left = "155px";
        playerObject.VideoTitleBlock.style.top = (4)+"px";
		playerObject.VideoTitleBlock.style.height="17px";
		playerObject.VideoTitleBlock.style.paddingLeft="10px";
		playerObject.VideoTitleBlock.style.paddingTop="6px";
		playerObject.VideoTitleBlock.style.fontSize="10px";
		playerObject.VideoTitleBlock.style.fontFamily="verdana";
		if(playerObject.settings.width > 284)
		{
			playerObject.VideoTitleBlock.style.width=(playerObject.settings.width-284) + "px";
		}
		else
		{
			playerObject.VideoTitleBlock.style.width="0px";
		}
		
		
		playerObject.VideoTitleBlock.style.overflow="hidden";
		playerObject.VideoTitleBlock.style.backgroundColor="transparent";
		playerObject.VideoTitleBlock.style.color="#FFFFFF";
		playerObject.VideoTitleBlock.innerHTML=playerObject.VideoTitle;
		
		
		playerObject.FullScreenModeButton.style.position = "absolute";
		playerObject.FullScreenModeButton.style.left = (playerObject.dvsplayer.clientWidth-31) + "px";
        playerObject.FullScreenModeButton.style.top = (11) + "px";
		playerObject.FullScreenModeButton.style.height="12px";
		playerObject.FullScreenModeButton.style.width="12px";
		playerObject.FullScreenModeButton.style.backgroundImage = "url('dvs/images/fullscreen.png')";
    }
	
	this.refresh = function(playerObject) {
	
		if(playerObject.settings.width < this.minWidth) {
			playerObject.settings.width=this.minWidth;
			playerObject.dvsplayer.width=this.minWidth;
		}
		
		if(playerObject.settings.height < this.minHeight) {
			playerObject.settings.height=this.minHeight;
			playerObject.dvsplayer.height=this.minHeight;
		}
		
		playerObject.settings.displayVolumeDigital=false;
   
		// set skin style
		playerObject.dvs_play_conteiner.style.height=playerObject.settings.height + "px";
		playerObject.dvsplayer.style.height=(playerObject.settings.height-this.controlHeight)+"px";
		
		playerObject.dvs_play_conteiner.style.width = playerObject.dvsplayer.clientWidth + "px";
       // playerObject.dvs_play_conteiner.style.backgroundColor = playerObject.settings.backgroundColor;
		
		//playerObject.dvs_play_control.style.backgroundColor=playerObject.settings.controlBackgroundColor;
		playerObject.dvs_play_control.style.width=playerObject.settings.width + "px";
		playerObject.dvs_play_control.style.height=this.controlHeight + "px";
		playerObject.dvs_play_control.style.position="absolute";
		playerObject.dvs_play_control.style.top=(playerObject.settings.height-this.controlHeight)+"px";
		playerObject.dvs_play_control.style.left="0px";

        //video
        playerObject.currPosDigitalDisplay.style.display = "none";
        playerObject.currVolumeDigitalDisplay.style.display = "none";

        playerObject.PlayPauseButton.style.left = "0px";
        playerObject.PlayPauseButton.style.top =  4 + "px";
		
		// create additional objects
		playerObject.volumecontrol.shadeControl.style.position = "absolute";
		playerObject.volumecontrol.shadeControl.style.left = "0px";
        playerObject.volumecontrol.shadeControl.style.top = "0px";
		playerObject.volumecontrol.shadeControl.style.height="8px";
		//playerObject.volumecontrol.shadeControl.style.backgroundColor="transparent";
		playerObject.volumecontrol.shadeControl.style.backgroundImage = "url('dvs/images/volshade.png')";
		playerObject.volumecontrol.shadeControl.style.backgroundRepeat = "repeat-x";
		playerObject.volumecontrol.shadeControl.style.width=playerObject.volumepicMarker.clientLeft+"px";
		
		playerObject.poscontrol.shadeControl.style.position = "absolute";
		playerObject.poscontrol.shadeControl.style.left = "0px";
        playerObject.poscontrol.shadeControl.style.top = "2px";
		playerObject.poscontrol.shadeControl.style.height="4px";
		//playerObject.poscontrol.shadeControl.style.backgroundColor="#66cc33";
		playerObject.poscontrol.shadeControl.style.width=(playerObject.pospicMarker.offsetLeft+2)+"px";
		
		//separators
		this.Separators[0].style.height="27px";
		this.Separators[0].style.width="1px";
		//this.Separators[0].style.backgroundColor="#999999";
		this.Separators[0].style.position="absolute";
		this.Separators[0].style.left="155px";
		this.Separators[0].style.top= (4)+"px";
		
		this.Separators[1].style.height="27px";
		this.Separators[1].style.width="1px";
		//this.Separators[1].style.backgroundColor="#999999";
		this.Separators[1].style.position="absolute";
		this.Separators[1].style.left=(playerObject.dvsplayer.clientWidth-49)+"px";
		this.Separators[1].style.top= (4)+"px";
		
		this.Separators[2].style.height="27px";
		this.Separators[2].style.width="1px";
		//this.Separators[2].style.backgroundColor="#999999";
		this.Separators[2].style.position="absolute";
		this.Separators[2].style.left=(playerObject.dvsplayer.clientWidth-119)+"px";
		this.Separators[2].style.top= (4)+"px";
		
		//Video title block
		playerObject.VideoTitleBlock.style.position = "absolute";
		playerObject.VideoTitleBlock.style.left = "155px";
        playerObject.VideoTitleBlock.style.top = (4)+"px";
		playerObject.VideoTitleBlock.style.height="17px";
		playerObject.VideoTitleBlock.style.paddingLeft="10px";
		playerObject.VideoTitleBlock.style.paddingTop="6px";
		playerObject.VideoTitleBlock.style.fontSize="10px";
		playerObject.VideoTitleBlock.style.fontFamily="verdana";
		if(playerObject.settings.width > 284) {
			playerObject.VideoTitleBlock.style.width=(playerObject.settings.width-284) + "px";
		}
		else {
			playerObject.VideoTitleBlock.style.width="0px";
		}
		
		playerObject.VideoTitleBlock.style.overflow="hidden";
		//playerObject.VideoTitleBlock.style.backgroundColor="transparent";
		playerObject.VideoTitleBlock.style.color="#FFFFFF";
		playerObject.VideoTitleBlock.innerHTML=playerObject.VideoTitle;
		
		playerObject.FullScreenModeButton.style.position = "absolute";
		playerObject.FullScreenModeButton.style.left = (playerObject.dvsplayer.clientWidth-31) + "px";
        playerObject.FullScreenModeButton.style.top = (11) + "px";
		playerObject.FullScreenModeButton.style.height="12px";
		playerObject.FullScreenModeButton.style.width="12px";
		playerObject.FullScreenModeButton.style.backgroundImage = "url('dvs/images/fullscreen.png')";
    }

    this.SetPlayButton_activeState = function (playerObject) {
        playerObject.PlayPauseButton.style.position = "absolute";
        playerObject.PlayPauseButton.style.left = "0px";
        playerObject.PlayPauseButton.style.top = (4) + "px";
        playerObject.PlayPauseButton.style.width = "44px";
        playerObject.PlayPauseButton.style.height = "27px";
        playerObject.PlayPauseButton.style.background = "transparent url('dvs/images/playbutton_unactive.png') 0px -27px";
        playerObject.PlayPauseButton.style.cursor = "pointer";
    }

    this.SetPlayButton_unactiveState = function SetPlayButton_unactiveState(playerObject) {
        playerObject.PlayPauseButton.style.position = "absolute";
        playerObject.PlayPauseButton.style.left = "0px";
        playerObject.PlayPauseButton.style.top = (4) + "px";
        playerObject.PlayPauseButton.style.width = "44px";
        playerObject.PlayPauseButton.style.height = "27px";
        playerObject.PlayPauseButton.style.background = "transparent url('dvs/images/playbutton_unactive.png') 0px 0px";
        playerObject.PlayPauseButton.style.cursor = "pointer";
    }

    this.SetMuteButton_activeState = function (playerObject) {
        playerObject.MuteButton.style.position = "absolute";
        playerObject.MuteButton.style.left = "60px";
        playerObject.MuteButton.style.top = (4) + "px";
        playerObject.MuteButton.style.width = "20px";
        playerObject.MuteButton.style.height = "27px";
        playerObject.MuteButton.style.background = "transparent url('dvs/images/mutebutton.png') 0px -27px";
        playerObject.MuteButton.style.cursor = "pointer";
    }

    this.SetMuteButton_unactiveState = function (playerObject) {
        playerObject.MuteButton.style.position = "absolute";
        playerObject.MuteButton.style.left = "60px";
        playerObject.MuteButton.style.top = ( 4) + "px";
        playerObject.MuteButton.style.width = "20px";
        playerObject.MuteButton.style.height = "27px";
        playerObject.MuteButton.style.background = "transparent url('dvs/images/mutebutton.png') 0px 0px";
        playerObject.MuteButton.style.cursor = "pointer";
    }

    this.SetAutoPlayButton_activeState = function (playerObject) {

    }

    this.SetAutoPlayButton_unactiveState = function (playerObject) {

    }
	
	// VolumeControl
	this.DisplayVolumeControl = function (playerObject)
	{
		playerObject.volumecontrol.style.display="block";
		playerObject.volumecontrol.style.position="absolute";
		playerObject.volumecontrol.style.width = "52px";
        playerObject.volumecontrol.style.height = "8px";
		playerObject.volumecontrol.style.backgroundColor="transparent";
		playerObject.volumecontrol.style.backgroundImage="url('dvs/images/volpattern.png')";
		playerObject.volumecontrol.style.backgroundRepeat="repeat-x";
		playerObject.volumecontrol.style.top=(14) + "px";
		playerObject.volumecontrol.style.left="87px";
		playerObject.volumecontrol.style.cursor="pointer";
	}
	
	this.DisplayVolumePicMarker = function (playerObject)
	{
		playerObject.volumepicMarker.style.display="block";
		playerObject.volumepicMarker.style.position="absolute";
		playerObject.volumepicMarker.style.width = "6px";
		playerObject.volumepicMarker.style.border = "none";
        playerObject.volumepicMarker.style.height = "8px";
		playerObject.volumepicMarker.style.top="0px";
		playerObject.volumepicMarker.style.backgroundColor="transparent";
		playerObject.volumepicMarker.style.backgroundImage="url('dvs/images/volpic.png')";
		playerObject.volumepicMarker.style.cursor = "pointer";
	}
	
	// Create and display PositionControl object
	this.DisplayPositionControl = function (playerObject) {
	    playerObject.poscontrol.style.display = "block";
	    playerObject.poscontrol.style.position = "absolute";
	    playerObject.poscontrol.style.width = playerObject.dvsplayer.clientWidth + "px";
	    playerObject.poscontrol.style.height = "8px";
	    playerObject.poscontrol.style.backgroundColor = "transparent";
	    playerObject.poscontrol.style.backgroundImage = "url('dvs/images/backposcontrol.png')";
	    playerObject.poscontrol.style.backgroundRepeat = "repeat-x";
	    playerObject.poscontrol.style.top = (- 2) + "px";
	    playerObject.poscontrol.style.left = "0px";
		playerObject.poscontrol.style.cursor="pointer";
	}	
	
	this.DisplayPositionPicMarker = function (playerObject) {
		playerObject.pospicMarker.style.display="block";
		playerObject.pospicMarker.style.position="absolute";
		playerObject.pospicMarker.style.width = "8px";
		playerObject.pospicMarker.style.border = "none";
        playerObject.pospicMarker.style.height = "8px";
		playerObject.pospicMarker.style.top="0px";
		playerObject.pospicMarker.style.backgroundColor="transparent";
		playerObject.pospicMarker.style.backgroundImage="url('dvs/images/pospic.png')";
		playerObject.pospicMarker.style.cursor = "pointer";
	}

	this.DisplayPositionDigital = function (playerObject) {
	    playerObject.currPosDigitalDisplay.readOnly = true;
	    playerObject.currPosDigitalDisplay.style.display = "block";
	    playerObject.currPosDigitalDisplay.style.position = "absolute";
	    playerObject.currPosDigitalDisplay.style.width = "71px";
	    playerObject.currPosDigitalDisplay.style.border = "none";
	    playerObject.currPosDigitalDisplay.style.height = "23px";
	    playerObject.currPosDigitalDisplay.style.paddingTop = "0px";
	    playerObject.currPosDigitalDisplay.style.top = (6) + "px";
	    playerObject.currPosDigitalDisplay.style.left = (playerObject.dvsplayer.clientWidth - 119) + "px";
	    playerObject.currPosDigitalDisplay.style.backgroundColor = "transparent";
	    //playerObject.currPosDigitalDisplay.style.backgroundImage = "url('dvs/images/posdigit.png')";
	    playerObject.currPosDigitalDisplay.style.cursor = "default";
	    playerObject.currPosDigitalDisplay.style.color = "#FFFFFF";
	    playerObject.currPosDigitalDisplay.style.textAlign = "center";
	    playerObject.currPosDigitalDisplay.style.fontFamily = "verdana";
	    playerObject.currPosDigitalDisplay.style.fontSize = "10px";
	}
	
	/*********************************************************************/
	this.OnVolumeChanged = function(playerObject)  {
		var volume = playerObject.dvsplayer.volume;
		playerObject.volumepicMarker.style.left = (volume) * playerObject.volumecontrol.offsetWidth + "px";
		playerObject.volumecontrol.shadeControl.style.width=(playerObject.volumepicMarker.offsetLeft+2)+"px";
	}
	
	this.OnPositionChanged = function(playerObject) {
		playerObject.poscontrol.shadeControl.style.width=(playerObject.pospicMarker.offsetLeft+2)+"px";
	}
}
