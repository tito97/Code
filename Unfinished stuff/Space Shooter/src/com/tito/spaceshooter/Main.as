package com.tito.spaceshooter
{
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.Sprite;
	import flash.events.Event;
	
	public class Main extends Sprite 
	{
		
		public function Main() 
		{
			if (stage) init();
			else addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event = null):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			// entry point
			var leGame:Game = new Game(stage.stageWidth, stage.stageHeight);
			addChild(leGame);
			
			//Experiments
			trace(new SubEntity().position)
		}
		
	}
	
}