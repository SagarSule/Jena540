/**
 * Notification that the UI is about to transition to a new screen.
 * Perform custom prescreen-transition logic here.
 * @param {String} currentScreenId 
 * @param {String} targetScreenId 
 * @returns {boolean} true to continue transtion; false to halt transition
 */

var url = "http://192.168.1.1:8080/"
var RB = 0;     //ReactorBuilding
var TB = 0;     //TurbineBuilding
var PHT = 0;    //PHTLoop
var STEAM = 0;  //SteamLine
var FEED = 0;   //FeedwaterLine
var MOD = 0;    //ModeratorLoop
var CAL = 0;    //Calandria
var TURB = 0;   //Turbine
var CTRL = 0;   //ControlRod
var FUEL = 0;   //FuelRod
var SG = 0;     //SteamGenerator
var PCP = 0;    //PCPump
var PRES = 0;   //Pressurizer
var FM = 0;     //FuellingMachine
var MHX = 0;    //ModeratorHx
var HP = 0;     //HPTurbine
var COND = 0;   //Condenser
var DEAR = 0;   //Dearator
var MSR = 0;    //MSR
var PENG = 0;
var PHIN = 0;
var STOP = 0;
var MUTE = 0;
var VOL = 20;
var ALL = 0;


phoneui.prePageTransition = function(currentScreenId, targetScreenId) {
  // add custom pre-transition code here
  // return false to terminate transition
  return true;
}

/**
 * Notification that the UI has transitioned to a new screen.
 * 
 * @param {String} newScreenId 
 */
phoneui.postPageTransition = function(newScreenId) {
  
}

/**
 * Notification that the page's HTML/CSS/JS is about to be loaded.
 * Perform custom logic here, f.e. you can cancel request to the server.
 * @param {String} targetScreenId 
 * @returns {boolean} true to continue loading; false to halt loading
 */
phoneui.prePageLoad = function(targetScreenId) {
  // add custom pre-load code here
  // return false to terminate page loading, this cancels transition to page as well
  return true;
}

/**
 * Notification that device orientation has changed. 
 * 
 * @param {String} newOrientation 
 */
phoneui.postOrientationChange = function(newOrientation) {
  
}

/**
 * Called when document is loaded.
 */
phoneui.documentReadyHandler = function() {
	getXML(url);
}

getXML = function(newURL)
{
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else
		{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.open("GET", newURL ,false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML;

		RB = xmlDoc.getElementsByTagName("RB")[0].childNodes[0].nodeValue;
		TB = xmlDoc.getElementsByTagName("TB")[0].childNodes[0].nodeValue;
		PHT = xmlDoc.getElementsByTagName("PHT")[0].childNodes[0].nodeValue;
		STEAM = xmlDoc.getElementsByTagName("STEAM")[0].childNodes[0].nodeValue;
		FEED = xmlDoc.getElementsByTagName("FEED")[0].childNodes[0].nodeValue;
		MOD = xmlDoc.getElementsByTagName("MOD")[0].childNodes[0].nodeValue;
		CAL = xmlDoc.getElementsByTagName("CAL")[0].childNodes[0].nodeValue;
		TURB = xmlDoc.getElementsByTagName("TGEN")[0].childNodes[0].nodeValue;
		CTRL = xmlDoc.getElementsByTagName("CTRL")[0].childNodes[0].nodeValue;
		FUEL = xmlDoc.getElementsByTagName("FUEL")[0].childNodes[0].nodeValue;
		SG = xmlDoc.getElementsByTagName("SG")[0].childNodes[0].nodeValue;
		PCP = xmlDoc.getElementsByTagName("PCP")[0].childNodes[0].nodeValue;
		PRES = xmlDoc.getElementsByTagName("PRES")[0].childNodes[0].nodeValue;
		FM = xmlDoc.getElementsByTagName("FM")[0].childNodes[0].nodeValue;
		MHX = xmlDoc.getElementsByTagName("MHX")[0].childNodes[0].nodeValue;
		HP = xmlDoc.getElementsByTagName("HP")[0].childNodes[0].nodeValue;
		COND = xmlDoc.getElementsByTagName("COND")[0].childNodes[0].nodeValue;
		DEAR = xmlDoc.getElementsByTagName("DEAR")[0].childNodes[0].nodeValue;
		MSR = xmlDoc.getElementsByTagName("MSR")[0].childNodes[0].nodeValue;
		PENG = xmlDoc.getElementsByTagName("PENG")[0].childNodes[0].nodeValue;
		PHIN = xmlDoc.getElementsByTagName("PHIN")[0].childNodes[0].nodeValue;
		STOP = xmlDoc.getElementsByTagName("STOP")[0].childNodes[0].nodeValue;
		MUTE = xmlDoc.getElementsByTagName("MUTE")[0].childNodes[0].nodeValue;
		VOL = xmlDoc.getElementsByTagName("VOL")[0].childNodes[0].nodeValue;
		ALL = xmlDoc.getElementsByTagName("ALL")[0].childNodes[0].nodeValue;

		if (RB == 0){
			$('#m1-jena540-RB').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-RB').css({'color':'#00B2CB'});	
		}
		else if (RB == 1){
			$('#m1-jena540-RB').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-RB').css({'color':'#003E86'});	
		}

		if (TB == 0){
			$('#m1-jena540-TB').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-TB').css({'color':'#00B2CB'});	
		}
		else if (TB == 1){
			$('#m1-jena540-TB').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-TB').css({'color':'#003E86'});	
		}
		if (PHT == 0){
			$('#m1-jena540-PHT').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-PHT').css({'color':'#00B2CB'});	
		}
		else if (PHT == 1){
			$('#m1-jena540-PHT').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-PHT').css({'color':'#003E86'});	
		}
		if (STEAM == 0){
			$('#m1-jena540-STEAM').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-STEAM').css({'color':'#00B2CB'});	
		}
		else if (STEAM == 1){
			$('#m1-jena540-STEAM').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-STEAM').css({'color':'#003E86'});	
		}
		if (FEED == 0){
			$('#m1-jena540-FEED').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-FEED').css({'color':'#00B2CB'});	
		}
		else if (FEED == 1){
			$('#m1-jena540-FEED').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-FEED').css({'color':'#003E86'});	
		}
		if (MOD == 0){
			$('#m1-jena540-MOD').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-MOD').css({'color':'#00B2CB'});	
		}
		else if (MOD == 1){
			$('#m1-jena540-MOD').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-MOD').css({'color':'#003E86'});	
		}
		if (CAL == 0){
			$('#m1-jena540-CAL').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-CAL').css({'color':'#00B2CB'});	
		}
		else if (CAL == 1){
			$('#m1-jena540-CAL').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-CAL').css({'color':'#003E86'});	
		}
		if (TURB == 0){
			$('#m1-jena540-TURB').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-TURB').css({'color':'#00B2CB'});	
		}
		else if (TURB == 1){
			$('#m1-jena540-TURB').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-TURB').css({'color':'#003E86'});	
		}
		if (CTRL == 0){
			$('#m1-jena540-CTRL').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-CTRL').css({'color':'#00B2CB'});	
		}
		else if (CTRL == 1){
			$('#m1-jena540-CTRL').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-CTRL').css({'color':'#003E86'});	
		}
		if (FUEL == 0){
			$('#m1-jena540-FUEL').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-FUEL').css({'color':'#00B2CB'});	
		}
		else if (FUEL == 1){
			$('#m1-jena540-FUEL').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-FUEL').css({'color':'#003E86'});	
		}
		if (SG == 0){
			$('#m1-jena540-SG').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-SG').css({'color':'#00B2CB'});	
		}
		else if (SG == 1){
			$('#m1-jena540-SG').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-SG').css({'color':'#003E86'});	
		}
		if (PCP == 0){
			$('#m1-jena540-PCP').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-PCP').css({'color':'#00B2CB'});	
		}
		else if (PCP == 1){
			$('#m1-jena540-PCP').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-PCP').css({'color':'#003E86'});	
		}
		if (PRES == 0){
			$('#m1-jena540-PRES').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-PRES').css({'color':'#00B2CB'});	
		}
		else if (PRES == 1){
			$('#m1-jena540-PRES').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-PRES').css({'color':'#003E86'});	
		}
		if (FM == 0){
			$('#m1-jena540-FM').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-FM').css({'color':'#00B2CB'});	
		}
		else if (FM == 1){
			$('#m1-jena540-FM').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-FM').css({'color':'#003E86'});	
		}
		if (MHX == 0){
			$('#m1-jena540-MHX').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-MHX').css({'color':'#00B2CB'});	
		}
		else if (MHX == 1){
			$('#m1-jena540-MHX').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-MHX').css({'color':'#003E86'});	
		}
		if (HP == 0){
			$('#m1-jena540-HP').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-HP').css({'color':'#00B2CB'});	
		}
		else if (HP == 1){
			$('#m1-jena540-HP').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-HP').css({'color':'#003E86'});	
		}
		if (COND == 0){
			$('#m1-jena540-COND').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-COND').css({'color':'#00B2CB'});	
		}
		else if (COND == 1){
			$('#m1-jena540-COND').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-COND').css({'color':'#003E86'});	
		}
		if (DEAR == 0){
			$('#m1-jena540-DEAR').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-DEAR').css({'color':'#00B2CB'});	
		}
		else if (DEAR == 1){
			$('#m1-jena540-DEAR').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-DEAR').css({'color':'#003E86'});	
		}
		if (MSR == 0){
			$('#m1-jena540-MSR').css({'background-color': 'rgb(0,78,149)'});
//			$('#m1-jena540-MSR').css({'color':'#00B2CB'});	
		}
		else if (MSR == 1){
			$('#m1-jena540-MSR').css({'background-color': 'rgb(0,167,184)'});
//			$('#m1-jena540-MSR').css({'color':'#003E86'});	
		}
		if (ALL == 0){
			$('#m1-jena540-ALL').css({'background-color': 'rgb(0,78,149)'});
			$('#m1-jena540-ALL').html('All ON');
//			$('#m1-jena540-ALL').css({'color':'#00B2CB'});	
		}
		else if (ALL == 1){
			$('#m1-jena540-ALL').css({'background-color': 'rgb(0,167,184)'});
			$('#m1-jena540-ALL').html('All OFF');
//			$('#m1-jena540-ALL').css({'color':'#003E86'});	
		}
		if (MUTE == 0){
			$('#m1-jena540-Mute').css({'-webkit-border-image': 'url(images/unmute.png) 1 1 1 1 stretch stretch'});
		}
		else if (MUTE == 1){
			$('#m1-jena540-Mute').css({'-webkit-border-image': 'url(images/mute.png) 1 1 1 1 stretch stretch'});
		}
		if (PENG == 1){
			$('#m1-jena540-PENG').css({'background-color': 'rgb(196,18,47)'});
//			$('#m1-jena540-PENG').css({'color':'#00B2CB'});	
		}
		else if (PENG == 0){
			$('#m1-jena540-PENG').css({'background-color': 'rgb(168,34,142)'});
//			$('#m1-jena540-PENG').css({'color':'#003E86'});	
		}
		if (PHIN == 1){
			$('#m1-jena540-PHIN').css({'background-color': 'rgb(196,18,47)'});
//			$('#m1-jena540-PENG').css({'color':'#00B2CB'});	
		}
		else if (PHIN == 0){
			$('#m1-jena540-PHIN').css({'background-color': 'rgb(168,34,142)'});
//			$('#m1-jena540-PHIN').css({'color':'#003E86'});	
		}
}



