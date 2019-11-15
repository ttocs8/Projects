$(document).ready(function(){
////////////////////INITIAL CONDITIONS///////////////////////////
$("#paySixPlayerPack").hide();
$("#payTenPlayerPack").hide();
$("#payTwentyPlayerPack").hide();
$("#exitSixPlayerPack").hide();
$("#exitTenPlayerPack").hide();
$("#exitTwentyPlayerPack").hide();
$("#shop").hide();
$(".PlayerOne_Default").hide();
$(".PlayerTwo").hide();
$(".PlayerThree").hide();
$(".PlayerFour").hide();
$(".PlayerFive").hide();
$(".PlayerSix").hide();
$(".PlayerSeven").hide();
$(".PlayerEight").hide();
$(".PlayerNine").hide();
$(".PlayerTen").hide();
    
//$("#TenPlayerPack").css("pointer-events", "none");
$("#TwentyPlayerPack").css("pointer-events", "none");
//////////////////////////////////////////////////////////////
////////////////////////////////VARIABLES////////////////////////////
var coinNumber = 100000;
var pointsNumber = 0;
var coinDisplay;
var pointsDisplay;
var coinButtonValue = 0;
var pointsButtonValue = 0;
var isOpening6Pack;
var isOpening10Pack;
var isOpening20Pack;

var isGoldPlayer;
var goldPlayerCount = 0;
var isInForm;
var inFormCount = 0;
var isTOTY;
var totyCount = 0;
var isLegend;
var legendCount = 0;

var goldPlayerPointValue = 2;
var inFormPointValue = 20;
var totyPointValue = 35;
var legendPointValue = 100;
//////////////////////////////////////FUNCTIONS////////////////////////////////////
var num;
var randomNumber = function(min,max){
	num = Math.floor(Math.random() * max) + min  
}

var updateCoinDisplay = function(){
	coinDisplay = "Coins: " + coinNumber;
	$("#coins").empty();
	$("#coins").append(coinDisplay);
}

var updatePointsDisplay = function(){
	pointsDisplay = "Player Points: " + pointsNumber;
	$("#fifa_points").empty();
	$("#fifa_points").append(pointsDisplay);
}

var subtractCoins = function(){
	if(coinNumber >= coinButtonValue){
		coinNumber = coinNumber - coinButtonValue;
		return;
	}
	else {
		alert("Not enough coins!");
	}	
}

/**//**//**//**//**//**//**///PICK PLAYERS///**//**//**//**//**//**//**//**/

var pickPlayerOne = function(){
	randomNumber(1,43);

	switch(num) 
	{
    case 1:
        $(".PlayerOne_Default").css("background", "url(images/players/Messi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 2:
        $(".PlayerOne_Default").css("background", "url(images/players/Ronaldo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 3:
        $(".PlayerOne_Default").css("background", "url(images/players/Suarez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 4:
        $(".PlayerOne_Default").css("background", "url(images/players/Neymar_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 5:
        $(".PlayerOne_Default").css("background", "url(images/players/Boateng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 6:
        $(".PlayerOne_Default").css("background", "url(images/players/Bale_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 7:
        $(".PlayerOne_Default").css("background", "url(images/players/Lewa_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 8:
        $(".PlayerOne_Default").css("background", "url(images/players/Ibra_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 9:
        $(".PlayerOne_Default").css("background", "url(images/players/Higuain_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
     case 10:
        $(".PlayerOne_Default").css("background", "url(images/players/Hazard_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 11:
        $(".PlayerOne_Default").css("background", "url(images/players/Aguero_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 12:
        $(".PlayerOne_Default").css("background", "url(images/players/MesutOzil_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 13:
        $(".PlayerOne_Default").css("background", "url(images/players/LukaModric_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 14:
        $(".PlayerOne_Default").css("background", "url(images/players/ThiagoSilva_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 15:
        $(".PlayerOne_Default").css("background", "url(images/players/SergioRamos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 16:
        $(".PlayerOne_Default").css("background", "url(images/players/AlexisSanchez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 17:
        $(".PlayerOne_Default").css("background", "url(images/players/PaulPogba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 18:
        $(".PlayerOne_Default").css("background", "url(images/players/KevinDeBruyne_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 19:
        $(".PlayerOne_Default").css("background", "url(images/players/ToniKroos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 20:
        $(".PlayerOne_Default").css("background", "url(images/players/Griezmann_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 21:
        $(".PlayerOne_Default").css("background", "url(images/players/Pepe_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 22:
        $(".PlayerOne_Default").css("background", "url(images/players/GeorgioChiellini_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 23:
        $(".PlayerOne_Default").css("background", "url(images/players/DiegoGodin_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 24:
        $(".PlayerOne_Default").css("background", "url(images/players/AndresIniesta_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 25:
        $(".PlayerOne_Default").css("background", "url(images/players/PhillipLahm_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 26:
        $(".PlayerOne_Default").css("background", "url(images/players/MarcoReus_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 27:
        $(".PlayerOne_Default").css("background", "url(images/players/Aubamayeng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 28:
        $(".PlayerOne_Default").css("background", "url(images/players/GerardPique_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 29:
        $(".PlayerOne_Default").css("background", "url(images/players/DavidAlaba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 30:
        $(".PlayerOne_Default").css("background", "url(images/players/CescFabregas_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 31:
        $(".PlayerOne_Default").css("background", "url(images/players/ClaudioMarchisio_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 32:
        $(".PlayerOne_Default").css("background", "url(images/players/Miranda_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 33:
        $(".PlayerOne_Default").css("background", "url(images/players/Payet_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 34:
        $(".PlayerOne_Default").css("background", "url(images/players/Marcelo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 35:
        $(".PlayerOne_Default").css("background", "url(images/players/Barzagli_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 36:
        $(".PlayerOne_Default").css("background", "url(images/players/JordiAlba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 37:
        $(".PlayerOne_Default").css("background", "url(images/players/SantiCazorla_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 38:
        $(".PlayerOne_Default").css("background", "url(images/players/VincentKompany_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 39:
        $(".PlayerOne_Default").css("background", "url(images/players/Ribery_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 40:
        $(".PlayerOne_Default").css("background", "url(images/players/Matuidi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 41:
        $(".PlayerOne_Default").css("background", "url(images/players/JaviMartinez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 42:
        $(".PlayerOne_Default").css("background", "url(images/players/Sokratis_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 43:
        $(".PlayerOne_Default").css("background", "url(images/players/Thiago_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 44:
        $(".PlayerOne_Default").css("background", "url(images/players/ronaldinho-legend.png)");
		isLegend = true;
		legendCount = legendCount + 1;
        break;
    default:
        $(".PlayerOne_Default").css("background", "url(images/players/blank.png)");
		isGoldPlayer = false;
		isInForm = false;
		isTOTY = false;
		isLegend = false;
		goldPlayerCount = 0;
		legendCount = 0;
	}
	
}

var pickPlayerTwo = function(){
	randomNumber(1,43);

	switch(num) 
	{
    case 1:
        $(".PlayerTwo").css("background", "url(images/players/Messi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 2:
        $(".PlayerTwo").css("background", "url(images/players/Ronaldo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 3:
        $(".PlayerTwo").css("background", "url(images/players/Suarez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 4:
        $(".PlayerTwo").css("background", "url(images/players/Neymar_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 5:
        $(".PlayerTwo").css("background", "url(images/players/Boateng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 6:
        $(".PlayerTwo").css("background", "url(images/players/Bale_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 7:
        $(".PlayerTwo").css("background", "url(images/players/Lewa_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 8:
        $(".PlayerTwo").css("background", "url(images/players/Ibra_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 9:
        $(".PlayerTwo").css("background", "url(images/players/Higuain_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
     case 10:
        $(".PlayerTwo").css("background", "url(images/players/Hazard_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 11:
        $(".PlayerTwo").css("background", "url(images/players/Aguero_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 12:
        $(".PlayerTwo").css("background", "url(images/players/MesutOzil_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 13:
        $(".PlayerTwo").css("background", "url(images/players/LukaModric_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 14:
        $(".PlayerTwo").css("background", "url(images/players/ThiagoSilva_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 15:
        $(".PlayerTwo").css("background", "url(images/players/SergioRamos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 16:
        $(".PlayerTwo").css("background", "url(images/players/AlexisSanchez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 17:
        $(".PlayerTwo").css("background", "url(images/players/PaulPogba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 18:
        $(".PlayerTwo").css("background", "url(images/players/KevinDeBruyne_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 19:
        $(".PlayerTwo").css("background", "url(images/players/ToniKroos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 20:
        $(".PlayerTwo").css("background", "url(images/players/Griezmann_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 21:
        $(".PlayerTwo").css("background", "url(images/players/Pepe_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 22:
        $(".PlayerTwo").css("background", "url(images/players/GeorgioChiellini_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 23:
        $(".PlayerTwo").css("background", "url(images/players/DiegoGodin_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 24:
        $(".PlayerTwo").css("background", "url(images/players/AndresIniesta_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 25:
        $(".PlayerTwo").css("background", "url(images/players/PhillipLahm_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 26:
        $(".PlayerTwo").css("background", "url(images/players/MarcoReus_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 27:
        $(".PlayerTwo").css("background", "url(images/players/Aubamayeng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 28:
        $(".PlayerTwo").css("background", "url(images/players/GerardPique_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 29:
        $(".PlayerTwo").css("background", "url(images/players/DavidAlaba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 30:
        $(".PlayerTwo").css("background", "url(images/players/CescFabregas_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 31:
        $(".PlayerTwo").css("background", "url(images/players/ClaudioMarchisio_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 32:
        $(".PlayerTwo").css("background", "url(images/players/Miranda_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 33:
        $(".PlayerTwo").css("background", "url(images/players/Payet_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 34:
        $(".PlayerTwo").css("background", "url(images/players/Marcelo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 35:
        $(".PlayerTwo").css("background", "url(images/players/Barzagli_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 36:
        $(".PlayerTwo").css("background", "url(images/players/JordiAlba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 37:
        $(".PlayerTwo").css("background", "url(images/players/SantiCazorla_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 38:
        $(".PlayerTwo").css("background", "url(images/players/VincentKompany_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 39:
        $(".PlayerTwo").css("background", "url(images/players/Ribery_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 40:
        $(".PlayerTwo").css("background", "url(images/players/Matuidi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 41:
        $(".PlayerTwo").css("background", "url(images/players/JaviMartinez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 42:
        $(".PlayerTwo").css("background", "url(images/players/Sokratis_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 43:
        $(".PlayerTwo").css("background", "url(images/players/Thiago_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 44:
        $(".PlayerTwo").css("background", "url(images/players/ronaldinho-legend.png)");
		isLegend = true;
		legendCount = legendCount + 1;
        break;
    default:
        $(".PlayerTwo").css("background", "url(images/players/blank.png)");
		isGoldPlayer = false;
		isInForm = false;
		isTOTY = false;
		isLegend = false;
		goldPlayerCount = 0;
		legendCount = 0;
	}
	
}

var pickPlayerThree = function(){
	randomNumber(1,43);

	switch(num) 
	{
    case 1:
        $(".PlayerThree").css("background", "url(images/players/Messi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 2:
        $(".PlayerThree").css("background", "url(images/players/Ronaldo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 3:
        $(".PlayerThree").css("background", "url(images/players/Suarez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 4:
        $(".PlayerThree").css("background", "url(images/players/Neymar_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 5:
        $(".PlayerThree").css("background", "url(images/players/Boateng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 6:
        $(".PlayerThree").css("background", "url(images/players/Bale_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 7:
        $(".PlayerThree").css("background", "url(images/players/Lewa_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 8:
        $(".PlayerThree").css("background", "url(images/players/Ibra_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 9:
        $(".PlayerThree").css("background", "url(images/players/Higuain_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 10:
        $(".PlayerThree").css("background", "url(images/players/Hazard_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 11:
        $(".PlayerThree").css("background", "url(images/players/Aguero_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 12:
        $(".PlayerThree").css("background", "url(images/players/MesutOzil_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 13:
        $(".PlayerThree").css("background", "url(images/players/LukaModric_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 14:
        $(".PlayerThree").css("background", "url(images/players/ThiagoSilva_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 15:
        $(".PlayerThree").css("background", "url(images/players/SergioRamos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 16:
        $(".PlayerThree").css("background", "url(images/players/AlexisSanchez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 17:
        $(".PlayerThree").css("background", "url(images/players/PaulPogba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 18:
        $(".PlayerThree").css("background", "url(images/players/KevinDeBruyne_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 19:
        $(".PlayerThree").css("background", "url(images/players/ToniKroos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 20:
        $(".PlayerThree").css("background", "url(images/players/Griezmann_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 21:
        $(".PlayerThree").css("background", "url(images/players/Pepe_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 22:
        $(".PlayerThree").css("background", "url(images/players/GeorgioChiellini_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 23:
        $(".PlayerThree").css("background", "url(images/players/DiegoGodin_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 24:
        $(".PlayerThree").css("background", "url(images/players/AndresIniesta_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 25:
        $(".PlayerThree").css("background", "url(images/players/PhillipLahm_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 26:
        $(".PlayerThree").css("background", "url(images/players/MarcoReus_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 27:
        $(".PlayerThree").css("background", "url(images/players/Aubamayeng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 28:
        $(".PlayerThree").css("background", "url(images/players/GerardPique_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 29:
        $(".PlayerThree").css("background", "url(images/players/DavidAlaba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 30:
        $(".PlayerThree").css("background", "url(images/players/CescFabregas_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 31:
        $(".PlayerThree").css("background", "url(images/players/ClaudioMarchisio_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 32:
        $(".PlayerThree").css("background", "url(images/players/Miranda_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 33:
        $(".PlayerThree").css("background", "url(images/players/Payet_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 34:
        $(".PlayerThree").css("background", "url(images/players/Marcelo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 35:
        $(".PlayerThree").css("background", "url(images/players/Barzagli_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 36:
        $(".PlayerThree").css("background", "url(images/players/JordiAlba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 37:
        $(".PlayerThree").css("background", "url(images/players/SantiCazorla_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 38:
        $(".PlayerThree").css("background", "url(images/players/VincentKompany_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 39:
        $(".PlayerThree").css("background", "url(images/players/Ribery_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 40:
        $(".PlayerThree").css("background", "url(images/players/Matuidi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 41:
        $(".PlayerThree").css("background", "url(images/players/JaviMartinez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 42:
        $(".PlayerThree").css("background", "url(images/players/Sokratis_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 43:
        $(".PlayerThree").css("background", "url(images/players/Thiago_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 44:
        $(".PlayerThree").css("background", "url(images/players/ronaldinho-legend.png)");
		isLegend = true;
		legendCount = legendCount + 1;
        break;
    default:
        $(".PlayerThree").css("background", "url(images/players/blank.png)");
		isGoldPlayer = false;
		isInForm = false;
		isTOTY = false;
		isLegend = false;
		goldPlayerCount = 0;
		legendCount = 0;
	}
	
}

var pickPlayerFour = function(){
	randomNumber(1,43);

	switch(num) 
	{
    case 1:
        $(".PlayerFour").css("background", "url(images/players/Messi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 2:
        $(".PlayerFour").css("background", "url(images/players/Ronaldo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 3:
        $(".PlayerFour").css("background", "url(images/players/Suarez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 4:
        $(".PlayerFour").css("background", "url(images/players/Neymar_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 5:
        $(".PlayerFour").css("background", "url(images/players/Boateng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 6:
        $(".PlayerFour").css("background", "url(images/players/Bale_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 7:
        $(".PlayerFour").css("background", "url(images/players/Lewa_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 8:
        $(".PlayerFour").css("background", "url(images/players/Ibra_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 9:
        $(".PlayerFour").css("background", "url(images/players/Higuain_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
     case 10:
        $(".PlayerFour").css("background", "url(images/players/Hazard_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 11:
        $(".PlayerFour").css("background", "url(images/players/Aguero_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 12:
        $(".PlayerFour").css("background", "url(images/players/MesutOzil_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 13:
        $(".PlayerFour").css("background", "url(images/players/LukaModric_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 14:
        $(".PlayerFour").css("background", "url(images/players/ThiagoSilva_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 15:
        $(".PlayerFour").css("background", "url(images/players/SergioRamos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 16:
        $(".PlayerFour").css("background", "url(images/players/AlexisSanchez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 17:
        $(".PlayerFour").css("background", "url(images/players/PaulPogba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 18:
        $(".PlayerFour").css("background", "url(images/players/KevinDeBruyne_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 19:
        $(".PlayerFour").css("background", "url(images/players/ToniKroos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 20:
        $(".PlayerFour").css("background", "url(images/players/Griezmann_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 21:
        $(".PlayerFour").css("background", "url(images/players/Pepe_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 22:
        $(".PlayerFour").css("background", "url(images/players/GeorgioChiellini_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 23:
        $(".PlayerFour").css("background", "url(images/players/DiegoGodin_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 24:
        $(".PlayerFour").css("background", "url(images/players/AndresIniesta_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 25:
        $(".PlayerFour").css("background", "url(images/players/PhillipLahm_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 26:
        $(".PlayerFour").css("background", "url(images/players/MarcoReus_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 27:
        $(".PlayerFour").css("background", "url(images/players/Aubamayeng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 28:
        $(".PlayerFour").css("background", "url(images/players/GerardPique_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 29:
        $(".PlayerFour").css("background", "url(images/players/DavidAlaba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 30:
        $(".PlayerFour").css("background", "url(images/players/CescFabregas_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 31:
        $(".PlayerFour").css("background", "url(images/players/ClaudioMarchisio_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 32:
        $(".PlayerFour").css("background", "url(images/players/Miranda_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 33:
        $(".PlayerFour").css("background", "url(images/players/Payet_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 34:
        $(".PlayerFour").css("background", "url(images/players/Marcelo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 35:
        $(".PlayerFour").css("background", "url(images/players/Barzagli_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 36:
        $(".PlayerFour").css("background", "url(images/players/JordiAlba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 37:
        $(".PlayerFour").css("background", "url(images/players/SantiCazorla_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 38:
        $(".PlayerFour").css("background", "url(images/players/VincentKompany_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 39:
        $(".PlayerFour").css("background", "url(images/players/Ribery_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 40:
        $(".PlayerFour").css("background", "url(images/players/Matuidi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 41:
        $(".PlayerFour").css("background", "url(images/players/JaviMartinez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 42:
        $(".PlayerFour").css("background", "url(images/players/Sokratis_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 43:
        $(".PlayerFour").css("background", "url(images/players/Thiago_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
   case 44:
        $(".PlayerFour").css("background", "url(images/players/ronaldinho-legend.png)");
		isLegend = true;
		legendCount = legendCount + 1;
        break;
    default:
        $(".PlayerFour").css("background", "url(images/players/blank.png)");
		isGoldPlayer = false;
		isInForm = false;
		isTOTY = false;
		isLegend = false;
		goldPlayerCount = 0;
		legendCount = 0;
	}
	
}

var pickPlayerFive = function(){
	randomNumber(1,43);

	switch(num) 
	{
    case 1:
        $(".PlayerFive").css("background", "url(images/players/Messi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 2:
        $(".PlayerFive").css("background", "url(images/players/Ronaldo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 3:
        $(".PlayerFive").css("background", "url(images/players/Suarez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 4:
        $(".PlayerFive").css("background", "url(images/players/Neymar_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 5:
        $(".PlayerFive").css("background", "url(images/players/Boateng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 6:
        $(".PlayerFive").css("background", "url(images/players/Bale_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 7:
        $(".PlayerFive").css("background", "url(images/players/Lewa_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 8:
        $(".PlayerFive").css("background", "url(images/players/Ibra_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 9:
        $(".PlayerFive").css("background", "url(images/players/Higuain_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
     case 10:
        $(".PlayerFive").css("background", "url(images/players/Hazard_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 11:
        $(".PlayerFive").css("background", "url(images/players/Aguero_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 12:
        $(".PlayerFive").css("background", "url(images/players/MesutOzil_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 13:
        $(".PlayerFive").css("background", "url(images/players/LukaModric_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 14:
        $(".PlayerFive").css("background", "url(images/players/ThiagoSilva_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 15:
        $(".PlayerFive").css("background", "url(images/players/SergioRamos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 16:
        $(".PlayerFive").css("background", "url(images/players/AlexisSanchez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 17:
        $(".PlayerFive").css("background", "url(images/players/PaulPogba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 18:
        $(".PlayerFive").css("background", "url(images/players/KevinDeBruyne_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 19:
        $(".PlayerFive").css("background", "url(images/players/ToniKroos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 20:
        $(".PlayerFive").css("background", "url(images/players/Griezmann_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 21:
        $(".PlayerFive").css("background", "url(images/players/Pepe_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 22:
        $(".PlayerFive").css("background", "url(images/players/GeorgioChiellini_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 23:
        $(".PlayerFive").css("background", "url(images/players/DiegoGodin_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 24:
        $(".PlayerFive").css("background", "url(images/players/AndresIniesta_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 25:
        $(".PlayerFive").css("background", "url(images/players/PhillipLahm_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 26:
        $(".PlayerFive").css("background", "url(images/players/MarcoReus_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 27:
        $(".PlayerFive").css("background", "url(images/players/Aubamayeng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 28:
        $(".PlayerFive").css("background", "url(images/players/GerardPique_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 29:
        $(".PlayerFive").css("background", "url(images/players/DavidAlaba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 30:
        $(".PlayerFive").css("background", "url(images/players/CescFabregas_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 31:
        $(".PlayerFive").css("background", "url(images/players/ClaudioMarchisio_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 32:
        $(".PlayerFive").css("background", "url(images/players/Miranda_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 33:
        $(".PlayerFive").css("background", "url(images/players/Payet_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 34:
        $(".PlayerFive").css("background", "url(images/players/Marcelo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 35:
        $(".PlayerFive").css("background", "url(images/players/Barzagli_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 36:
        $(".PlayerFive").css("background", "url(images/players/JordiAlba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 37:
        $(".PlayerFive").css("background", "url(images/players/SantiCazorla_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 38:
        $(".PlayerFive").css("background", "url(images/players/VincentKompany_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 39:
        $(".PlayerFive").css("background", "url(images/players/Ribery_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 40:
        $(".PlayerFive").css("background", "url(images/players/Matuidi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 41:
        $(".PlayerFive").css("background", "url(images/players/JaviMartinez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 42:
        $(".PlayerFive").css("background", "url(images/players/Sokratis_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 43:
        $(".PlayerFive").css("background", "url(images/players/Thiago_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 44:
        $(".PlayerFive").css("background", "url(images/players/ronaldinho-legend.png)");
		isLegend = true;
		legendCount = legendCount + 1;
        break;
    default:
        $(".PlayerFive").css("background", "url(images/players/blank.png)");
		isGoldPlayer = false;
		isInForm = false;
		isTOTY = false;
		isLegend = false;
		goldPlayerCount = 0;
		legendCount = 0;
	}
	
}

var pickPlayerSix = function(){
	randomNumber(1,43);

	switch(num) 
	{
    case 1:
        $(".PlayerSix").css("background", "url(images/players/Messi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 2:
        $(".PlayerSix").css("background", "url(images/players/Ronaldo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 3:
        $(".PlayerSix").css("background", "url(images/players/Suarez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 4:
        $(".PlayerSix").css("background", "url(images/players/Neymar_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 5:
        $(".PlayerSix").css("background", "url(images/players/Boateng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 6:
        $(".PlayerSix").css("background", "url(images/players/Bale_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 7:
        $(".PlayerSix").css("background", "url(images/players/Lewa_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 8:
        $(".PlayerSix").css("background", "url(images/players/Ibra_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 9:
        $(".PlayerSix").css("background", "url(images/players/Higuain_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 10:
        $(".PlayerSix").css("background", "url(images/players/Hazard_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 11:
        $(".PlayerSix").css("background", "url(images/players/Aguero_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 12:
        $(".PlayerSix").css("background", "url(images/players/MesutOzil_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 13:
        $(".PlayerSix").css("background", "url(images/players/LukaModric_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 14:
        $(".PlayerSix").css("background", "url(images/players/ThiagoSilva_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 15:
        $(".PlayerSix").css("background", "url(images/players/SergioRamos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 16:
        $(".PlayerSix").css("background", "url(images/players/AlexisSanchez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 17:
        $(".PlayerSix").css("background", "url(images/players/PaulPogba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 18:
        $(".PlayerSix").css("background", "url(images/players/KevinDeBruyne_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 19:
        $(".PlayerSix").css("background", "url(images/players/ToniKroos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 20:
        $(".PlayerSix").css("background", "url(images/players/Griezmann_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 21:
        $(".PlayerSix").css("background", "url(images/players/Pepe_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 22:
        $(".PlayerSix").css("background", "url(images/players/GeorgioChiellini_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 23:
        $(".PlayerSix").css("background", "url(images/players/DiegoGodin_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 24:
        $(".PlayerSix").css("background", "url(images/players/AndresIniesta_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 25:
        $(".PlayerSix").css("background", "url(images/players/PhillipLahm_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 26:
        $(".PlayerSix").css("background", "url(images/players/MarcoReus_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 27:
        $(".PlayerSix").css("background", "url(images/players/Aubamayeng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 28:
        $(".PlayerSix").css("background", "url(images/players/GerardPique_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 29:
        $(".PlayerSix").css("background", "url(images/players/DavidAlaba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 30:
        $(".PlayerSix").css("background", "url(images/players/CescFabregas_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 31:
        $(".PlayerSix").css("background", "url(images/players/ClaudioMarchisio_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 32:
        $(".PlayerSix").css("background", "url(images/players/Miranda_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 33:
        $(".PlayerSix").css("background", "url(images/players/Payet_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 34:
        $(".PlayerSix").css("background", "url(images/players/Marcelo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 35:
        $(".PlayerSix").css("background", "url(images/players/Barzagli_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 36:
        $(".PlayerSix").css("background", "url(images/players/JordiAlba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 37:
        $(".PlayerSix").css("background", "url(images/players/SantiCazorla_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 38:
        $(".PlayerSix").css("background", "url(images/players/VincentKompany_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 39:
        $(".PlayerSix").css("background", "url(images/players/Ribery_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 40:
        $(".PlayerSix").css("background", "url(images/players/Matuidi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 41:
        $(".PlayerSix").css("background", "url(images/players/JaviMartinez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 42:
        $(".PlayerSix").css("background", "url(images/players/Sokratis_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 43:
        $(".PlayerSix").css("background", "url(images/players/Thiago_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
   case 44:
        $(".PlayerSix").css("background", "url(images/players/ronaldinho-legend.png)");
		isLegend = true;
		legendCount = legendCount + 1;
        break;
    default:
        $(".PlayerSix").css("background", "url(images/players/blank.png)");
		isGoldPlayer = false;
		isInForm = false;
		isTOTY = false;
		isLegend = false;
		goldPlayerCount = 0;
		legendCount = 0;
	}
	
}

var pickPlayerSeven = function(){
	randomNumber(1,43);

	switch(num) 
	{
    case 1:
        $(".PlayerSeven").css("background", "url(images/players/Messi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 2:
        $(".PlayerSeven").css("background", "url(images/players/Ronaldo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 3:
        $(".PlayerSeven").css("background", "url(images/players/Suarez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 4:
        $(".PlayerSeven").css("background", "url(images/players/Neymar_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 5:
        $(".PlayerSeven").css("background", "url(images/players/Boateng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 6:
        $(".PlayerSeven").css("background", "url(images/players/Bale_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 7:
        $(".PlayerSeven").css("background", "url(images/players/Lewa_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 8:
        $(".PlayerSeven").css("background", "url(images/players/Ibra_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 9:
        $(".PlayerSeven").css("background", "url(images/players/Higuain_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 10:
        $(".PlayerSeven").css("background", "url(images/players/Hazard_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 11:
        $(".PlayerSeven").css("background", "url(images/players/Aguero_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 12:
        $(".PlayerSeven").css("background", "url(images/players/MesutOzil_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 13:
        $(".PlayerSeven").css("background", "url(images/players/LukaModric_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 14:
        $(".PlayerSeven").css("background", "url(images/players/ThiagoSilva_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 15:
        $(".PlayerSeven").css("background", "url(images/players/SergioRamos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 16:
        $(".PlayerSeven").css("background", "url(images/players/AlexisSanchez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 17:
        $(".PlayerSeven").css("background", "url(images/players/PaulPogba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 18:
        $(".PlayerSeven").css("background", "url(images/players/KevinDeBruyne_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 19:
        $(".PlayerSeven").css("background", "url(images/players/ToniKroos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 20:
        $(".PlayerSeven").css("background", "url(images/players/Griezmann_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 21:
        $(".PlayerSeven").css("background", "url(images/players/Pepe_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 22:
        $(".PlayerSeven").css("background", "url(images/players/GeorgioChiellini_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 23:
        $(".PlayerSeven").css("background", "url(images/players/DiegoGodin_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 24:
        $(".PlayerSeven").css("background", "url(images/players/AndresIniesta_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 25:
        $(".PlayerSeven").css("background", "url(images/players/PhillipLahm_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 26:
        $(".PlayerSeven").css("background", "url(images/players/MarcoReus_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 27:
        $(".PlayerSeven").css("background", "url(images/players/Aubamayeng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 28:
        $(".PlayerSeven").css("background", "url(images/players/GerardPique_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 29:
        $(".PlayerSeven").css("background", "url(images/players/DavidAlaba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 30:
        $(".PlayeSevenr").css("background", "url(images/players/CescFabregas_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 31:
        $(".PlayerSeven").css("background", "url(images/players/ClaudioMarchisio_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 32:
        $(".PlayerSeven").css("background", "url(images/players/Miranda_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 33:
        $(".PlayerSeven").css("background", "url(images/players/Payet_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 34:
        $(".PlayerSeven").css("background", "url(images/players/Marcelo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 35:
        $(".PlayerSeven").css("background", "url(images/players/Barzagli_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 36:
        $(".PlayerSeven").css("background", "url(images/players/JordiAlba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 37:
        $(".PlayerSeven").css("background", "url(images/players/SantiCazorla_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 38:
        $(".PlayerSeven").css("background", "url(images/players/VincentKompany_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 39:
        $(".PlayerSeven").css("background", "url(images/players/Ribery_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 40:
        $(".PlayerSeven").css("background", "url(images/players/Matuidi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 41:
        $(".PlayerSeven").css("background", "url(images/players/JaviMartinez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 42:
        $(".PlayerSeven").css("background", "url(images/players/Sokratis_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 43:
        $(".PlayerSeven").css("background", "url(images/players/Thiago_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
   case 44:
        $(".PlayerSeven").css("background", "url(images/players/ronaldinho-legend.png)");
		isLegend = true;
		legendCount = legendCount + 1;
        break;
    default:
        $(".PlayerSeven").css("background", "url(images/players/blank.png)");
		isGoldPlayer = false;
		isInForm = false;
		isTOTY = false;
		isLegend = false;
		goldPlayerCount = 0;
		legendCount = 0;
	}
	
}

var pickPlayerEight = function(){
	randomNumber(1,43);

	switch(num) 
	{
    case 1:
        $(".PlayerEight").css("background", "url(images/players/Messi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 2:
        $(".PlayerEight").css("background", "url(images/players/Ronaldo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 3:
        $(".PlayerEight").css("background", "url(images/players/Suarez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 4:
        $(".PlayerEight").css("background", "url(images/players/Neymar_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 5:
        $(".PlayerEight").css("background", "url(images/players/Boateng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 6:
        $(".PlayerEight").css("background", "url(images/players/Bale_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 7:
        $(".PlayerEight").css("background", "url(images/players/Lewa_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 8:
        $(".PlayerEight").css("background", "url(images/players/Ibra_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 9:
        $(".PlayerEight").css("background", "url(images/players/Higuain_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
     case 10:
        $(".PlayerEight").css("background", "url(images/players/Hazard_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 11:
        $(".PlayerEight").css("background", "url(images/players/Aguero_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 12:
        $(".PlayerEight").css("background", "url(images/players/MesutOzil_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 13:
        $(".PlayerEight").css("background", "url(images/players/LukaModric_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 14:
        $(".PlayerEight").css("background", "url(images/players/ThiagoSilva_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 15:
        $(".PlayerEight").css("background", "url(images/players/SergioRamos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 16:
        $(".PlayerEight").css("background", "url(images/players/AlexisSanchez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 17:
        $(".PlayerEight").css("background", "url(images/players/PaulPogba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 18:
        $(".PlayerEight").css("background", "url(images/players/KevinDeBruyne_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 19:
        $(".PlayerEight").css("background", "url(images/players/ToniKroos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 20:
        $(".PlayerEight").css("background", "url(images/players/Griezmann_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 21:
        $(".PlayerEight").css("background", "url(images/players/Pepe_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 22:
        $(".PlayerEight").css("background", "url(images/players/GeorgioChiellini_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 23:
        $(".PlayerEight").css("background", "url(images/players/DiegoGodin_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 24:
        $(".PlayerEight").css("background", "url(images/players/AndresIniesta_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 25:
        $(".PlayerEight").css("background", "url(images/players/PhillipLahm_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 26:
        $(".PlayerEight").css("background", "url(images/players/MarcoReus_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 27:
        $(".PlayerEight").css("background", "url(images/players/Aubamayeng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 28:
        $(".PlayerEight").css("background", "url(images/players/GerardPique_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 29:
        $(".PlayerEight").css("background", "url(images/players/DavidAlaba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 30:
        $(".PlayerEight").css("background", "url(images/players/CescFabregas_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 31:
        $(".PlayerEight").css("background", "url(images/players/ClaudioMarchisio_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 32:
        $(".PlayerEight").css("background", "url(images/players/Miranda_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 33:
        $(".PlayerEight").css("background", "url(images/players/Payet_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 34:
        $(".PlayerEight").css("background", "url(images/players/Marcelo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 35:
        $(".PlayerEight").css("background", "url(images/players/Barzagli_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 36:
        $(".PlayerEight").css("background", "url(images/players/JordiAlba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 37:
        $(".PlayerEight").css("background", "url(images/players/SantiCazorla_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 38:
        $(".PlayerEight").css("background", "url(images/players/VincentKompany_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 39:
        $(".PlayerEight").css("background", "url(images/players/Ribery_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 40:
        $(".PlayerEight").css("background", "url(images/players/Matuidi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 41:
        $(".PlayerEight").css("background", "url(images/players/JaviMartinez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 42:
        $(".PlayerEight").css("background", "url(images/players/Sokratis_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 43:
        $(".PlayerEight").css("background", "url(images/players/Thiago_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 44:
        $(".PlayerEight").css("background", "url(images/players/ronaldinho-legend.png)");
		isLegend = true;
		legendCount = legendCount + 1;
        break;
    default:
        $(".PlayerEight").css("background", "url(images/players/blank.png)");
		isGoldPlayer = false;
		isInForm = false;
		isTOTY = false;
		isLegend = false;
		goldPlayerCount = 0;
		legendCount = 0;
	}
	
}

var pickPlayerNine = function(){
	randomNumber(1,43);

	switch(num) 
	{
    case 1:
        $(".PlayerNine").css("background", "url(images/players/Messi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 2:
        $(".PlayerNine").css("background", "url(images/players/Ronaldo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 3:
        $(".PlayerNine").css("background", "url(images/players/Suarez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 4:
        $(".PlayerNine").css("background", "url(images/players/Neymar_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 5:
        $(".PlayerNine").css("background", "url(images/players/Boateng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 6:
        $(".PlayerNine").css("background", "url(images/players/Bale_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 7:
        $(".PlayerNine").css("background", "url(images/players/Lewa_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 8:
        $(".PlayerNine").css("background", "url(images/players/Ibra_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 9:
        $(".PlayerNine").css("background", "url(images/players/Higuain_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
     case 10:
        $(".PlayerNine").css("background", "url(images/players/Hazard_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 11:
        $(".PlayerNine").css("background", "url(images/players/Aguero_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 12:
        $(".PlayerNine").css("background", "url(images/players/MesutOzil_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 13:
        $(".PlayerNine").css("background", "url(images/players/LukaModric_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 14:
        $(".PlayerNine").css("background", "url(images/players/ThiagoSilva_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 15:
        $(".PlayerNine").css("background", "url(images/players/SergioRamos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 16:
        $(".PlayerNine").css("background", "url(images/players/AlexisSanchez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 17:
        $(".PlayerNine").css("background", "url(images/players/PaulPogba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 18:
        $(".PlayerNine").css("background", "url(images/players/KevinDeBruyne_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 19:
        $(".PlayerNine").css("background", "url(images/players/ToniKroos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 20:
        $(".PlayerNine").css("background", "url(images/players/Griezmann_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 21:
        $(".PlayerNine").css("background", "url(images/players/Pepe_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 22:
        $(".PlayerNine").css("background", "url(images/players/GeorgioChiellini_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 23:
        $(".PlayerNine").css("background", "url(images/players/DiegoGodin_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 24:
        $(".PlayerNine").css("background", "url(images/players/AndresIniesta_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 25:
        $(".PlayerNine").css("background", "url(images/players/PhillipLahm_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 26:
        $(".PlayerNine").css("background", "url(images/players/MarcoReus_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 27:
        $(".PlayerNine").css("background", "url(images/players/Aubamayeng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 28:
        $(".PlayerNine").css("background", "url(images/players/GerardPique_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 29:
        $(".PlayerNine").css("background", "url(images/players/DavidAlaba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 30:
        $(".PlayerNine").css("background", "url(images/players/CescFabregas_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 31:
        $(".PlayerNine").css("background", "url(images/players/ClaudioMarchisio_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 32:
        $(".PlayerNine").css("background", "url(images/players/Miranda_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 33:
        $(".PlayerNine").css("background", "url(images/players/Payet_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 34:
        $(".PlayerNine").css("background", "url(images/players/Marcelo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 35:
        $(".PlayerNine").css("background", "url(images/players/Barzagli_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 36:
        $(".PlayerNine").css("background", "url(images/players/JordiAlba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 37:
        $(".PlayerNine").css("background", "url(images/players/SantiCazorla_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 38:
        $(".PlayerNine").css("background", "url(images/players/VincentKompany_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 39:
        $(".PlayerNine").css("background", "url(images/players/Ribery_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 40:
        $(".PlayerNine").css("background", "url(images/players/Matuidi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 41:
        $(".PlayerNine").css("background", "url(images/players/JaviMartinez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 42:
        $(".PlayerNine").css("background", "url(images/players/Sokratis_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 43:
        $(".PlayerNine").css("background", "url(images/players/Thiago_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 44:
        $(".PlayerNine").css("background", "url(images/players/ronaldinho-legend.png)");
		isLegend = true;
		legendCount = legendCount + 1;
        break;
    default:
        $(".PlayerNine").css("background", "url(images/players/blank.png)");
		isGoldPlayer = false;
		isInForm = false;
		isTOTY = false;
		isLegend = false;
		goldPlayerCount = 0;
		legendCount = 0;
	}
	
}

var pickPlayerTen = function(){
	randomNumber(1,43);

	switch(num) 
	{
    case 1:
        $(".PlayerTen").css("background", "url(images/players/Messi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 2:
        $(".PlayerTen").css("background", "url(images/players/Ronaldo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 3:
        $(".PlayerTen").css("background", "url(images/players/Suarez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 4:
        $(".PlayerTen").css("background", "url(images/players/Neymar_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 5:
        $(".PlayerTen").css("background", "url(images/players/Boateng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 6:
        $(".PlayerTen").css("background", "url(images/players/Bale_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 7:
        $(".PlayerTen").css("background", "url(images/players/Lewa_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
	case 8:
        $(".PlayerTen").css("background", "url(images/players/Ibra_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 9:
        $(".PlayerTen").css("background", "url(images/players/Higuain_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
     case 10:
        $(".PlayerTen").css("background", "url(images/players/Hazard_Upgrade.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 11:
        $(".PlayerTen").css("background", "url(images/players/Aguero_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 12:
        $(".PlayerTen").css("background", "url(images/players/MesutOzil_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 13:
        $(".PlayerTen").css("background", "url(images/players/LukaModric_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 14:
        $(".PlayerTen").css("background", "url(images/players/ThiagoSilva_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 15:
        $(".PlayerTen").css("background", "url(images/players/SergioRamos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 16:
        $(".PlayerTen").css("background", "url(images/players/AlexisSanchez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 17:
        $(".PlayerTen").css("background", "url(images/players/PaulPogba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 18:
        $(".PlayerTen").css("background", "url(images/players/KevinDeBruyne_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 19:
        $(".PlayerTen").css("background", "url(images/players/ToniKroos_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 20:
        $(".PlayerTen").css("background", "url(images/players/Griezmann_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 21:
        $(".PlayerTen").css("background", "url(images/players/Pepe_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 22:
        $(".PlayerTen").css("background", "url(images/players/GeorgioChiellini_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 23:
        $(".PlayerTen").css("background", "url(images/players/DiegoGodin_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 24:
        $(".PlayerTen").css("background", "url(images/players/AndresIniesta_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 25:
        $(".PlayerTen").css("background", "url(images/players/PhillipLahm_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 26:
        $(".PlayerTen").css("background", "url(images/players/MarcoReus_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 27:
        $(".PlayerTen").css("background", "url(images/players/Aubamayeng_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 28:
        $(".PlayerTen").css("background", "url(images/players/GerardPique_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 29:
        $(".PlayerTen").css("background", "url(images/players/DavidAlaba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 30:
        $(".PlayerTen").css("background", "url(images/players/CescFabregas_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 31:
        $(".PlayerTen").css("background", "url(images/players/ClaudioMarchisio_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 32:
        $(".PlayerTen").css("background", "url(images/players/Miranda_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 33:
        $(".PlayerTen").css("background", "url(images/players/Payet_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 34:
        $(".PlayerTen").css("background", "url(images/players/Marcelo_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 35:
        $(".PlayerTen").css("background", "url(images/players/Barzagli_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 36:
        $(".PlayerTen").css("background", "url(images/players/JordiAlba_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 37:
        $(".PlayerTen").css("background", "url(images/players/SantiCazorla_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 38:
        $(".PlayerTen").css("background", "url(images/players/VincentKompany_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 39:
        $(".PlayerTen").css("background", "url(images/players/Ribery_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 40:
        $(".PlayerTen").css("background", "url(images/players/Matuidi_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 41:
        $(".PlayerTen").css("background", "url(images/players/JaviMartinez_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 42:
        $(".PlayerTen").css("background", "url(images/players/Sokratis_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 43:
        $(".PlayerTen").css("background", "url(images/players/Thiago_Gold.png)");
		isGoldPlayer = true;
		goldPlayerCount = goldPlayerCount + 1;
        break;
    case 44:
        $(".PlayerTen").css("background", "url(images/players/ronaldinho-legend.png)");
		isLegend = true;
		legendCount = legendCount + 1;
        break;
    default:
        $(".PlayerTen").css("background", "url(images/players/blank.png)");
		isGoldPlayer = false;
		isInForm = false;
		isTOTY = false;
		isLegend = false;
		goldPlayerCount = 0;
		legendCount = 0;
	}
	
}

/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/

var hidePlayers = function(){
    
$(".PlayerOne_Default").hide();
$(".PlayerTwo").hide();
$(".PlayerThree").hide();
$(".PlayerFour").hide();
$(".PlayerFive").hide();
$(".PlayerSix").hide();
$(".PlayerSeven").hide();
$(".PlayerEight").hide();
$(".PlayerNine").hide();
$(".PlayerTen").hide();
}

var quickSellPlayers = function(){
    
$(".PlayerOne_After").hide("bounce", {times: 1}, 500);
$(".PlayerTwo").delay(100).hide("bounce", {times: 1}, 500);
$(".PlayerThree").delay(150).hide("bounce", {times: 1}, 500);
$(".PlayerFour").delay(200).hide("bounce", {times: 1}, 500);
$(".PlayerFive").delay(250).hide("bounce", {times: 1}, 500);
$(".PlayerSix").delay(300).hide("bounce", {times: 1}, 500);
$(".PlayerSeven").delay(350).hide("bounce", {times: 1}, 500);
$(".PlayerEight").delay(400).hide("bounce", {times: 1}, 500);
$(".PlayerNine").delay(450).hide("bounce", {times: 1}, 500);
$(".PlayerTen").delay(500).hide("bounce", {times: 1}, 500);
}

var revealSixPlayers = function(){
            pickPlayerOne();
			$(".PlayerOne_Default").show( "bounce", 1500);
            $(".PlayerOne_Default").addClass("PlayerOne_After").removeClass("PlayerOne_Default");
			pickPlayerTwo();
			$(".PlayerTwo").delay(1750).fadeIn(1000);
			pickPlayerThree();
			$(".PlayerThree").delay(2000).fadeIn(1000);
			pickPlayerFour();
			$(".PlayerFour").delay(2250).fadeIn(1000);
			pickPlayerFive();
			$(".PlayerFive").delay(2500).fadeIn(1000);
			pickPlayerSix();
			$(".PlayerSix").delay(2750).fadeIn(1000);
			$("#exitSixPlayerPack").delay(3050).fadeIn(1000);
    
}

var revealTenPlayers = function(){
            pickPlayerOne();
			$(".PlayerOne_Default").show( "bounce", 1500);
            $(".PlayerOne_Default").addClass("PlayerOne_After").removeClass("PlayerOne_Default");
			pickPlayerTwo();
			$(".PlayerTwo").delay(1750).fadeIn(1000);
			pickPlayerThree();
			$(".PlayerThree").delay(2000).fadeIn(1000);
			pickPlayerFour();
			$(".PlayerFour").delay(2250).fadeIn(1000);
			pickPlayerFive();
			$(".PlayerFive").delay(2500).fadeIn(1000);
			pickPlayerSix();
			$(".PlayerSix").delay(2750).fadeIn(1000);
            pickPlayerSeven();
            $(".PlayerSeven").delay(3000).fadeIn(1000);
            pickPlayerEight();
            $(".PlayerEight").delay(3250).fadeIn(1000);
            pickPlayerNine();
            $(".PlayerNine").delay(3750).fadeIn(1000);
            pickPlayerTen();
            $(".PlayerTen").delay(3500).fadeIn(1000);
			$("#exitTenPlayerPack").delay(3050).fadeIn(1000);
    
}
/////////////////////////////////////////////////////////////////////////////////




$("#coins").append(" " + coinNumber);
$("#fifa_points").append(" " + pointsNumber);

$(".addTenThousandCoins").click(function(){
    coinNumber = coinNumber + 10000;
	updateCoinDisplay();
});

$(".addSevenFiveHundredFP").click(function(){
    pointsNumber = pointsNumber + 7500;
	updatePointDisplay();
});

$("#SixPlayerPack").click(function(){
	$("#TenPlayerPack").fadeOut();
	$("#TwentyPlayerPack").fadeOut();
	$(this).animate({left: '540px',top: '225px'});
	$("#paySixPlayerPack").fadeIn(500);
	coinButtonValue = 7500;
	pointsButtonValue = 10;
});

$("#TenPlayerPack").click(function(){
	$("#SixPlayerPack").fadeOut();
	$("#TwentyPlayerPack").fadeOut();
	$(this).animate({top: '240px'});
	$("#payTenPlayerPack").fadeIn(500);
	coinButtonValue = 15000;
	pointsButtonValue = 25;

});

$("#TwentyPlayerPack").click(function(){
	$("#SixPlayerPack").fadeOut();
	$("#TenPlayerPack").fadeOut();
	$(this).animate({left: '540px',top: '235px'});
	$("#payTwentyPlayerPack").fadeIn(500);
	coinButtonValue = 50000;
	pointsButtonValue = 45;
});
	
$("#X_SixPlayer").click(function(){
	$("#paySixPlayerPack").fadeOut(500);
	$("#SixPlayerPack").animate({left: '150px',top: '175px'});
	$("#TenPlayerPack").fadeIn();
	$("#TwentyPlayerPack").fadeIn();
});

$("#X_TenPlayer").click(function(){
	$("#payTenPlayerPack").fadeOut(500);
	$("#TenPlayerPack").animate({top: '175px'});
	$("#SixPlayerPack").fadeIn();
	$("#TwentyPlayerPack").fadeIn();
});

$("#X_TwentyPlayer").click(function(){
	$("#payTwentyPlayerPack").fadeOut(500);
	$("#TwentyPlayerPack").animate({left: '900px',top: '175px'});
	$("#TenPlayerPack").fadeIn();
	$("#SixPlayerPack").fadeIn();
});

$("#QuickSellSix").click(function(){
	if(goldPlayerCount == 6){
		pointsNumber = pointsNumber + 12;
		updatePointsDisplay();
        $("#SixPlayerPack").animate({left: '150px',top: '175px'});
         $("#TenPlayerPack").animate({top: '175px'});
        $("#TwentyPlayerPack").animate({left: '900px',top: '175px'});
        quickSellPlayers();
        $(".PlayerOne_After").removeClass("PlayerOne_After").addClass("PlayerOne_Default");
		$("#SixPlayerPack").css("pointer-events", "auto");
        $("#TenPlayerPack").css("pointer-events", "auto");
        $("#TwentyPlayerPack").css("pointer-events", "auto");
		$("#exitSixPlayerPack").fadeOut(1000);
		$("#SixPlayerPack").show("explode", {pieces: 32}, 1000);
		$("#TenPlayerPack").delay(250).show("explode", {pieces: 32}, 1000);
		$("#TwentyPlayerPack").show("explode", {pieces: 32}, 1000);
        goldPlayerCount = 0;
        legendCount = 0;
	}
   
});

$("#QuickSellTen").click(function(){
	if(goldPlayerCount == 10){
		pointsNumber = pointsNumber + 22;
        
		updatePointsDisplay();
        
        $("#SixPlayerPack").animate({left: '150px',top: '175px'});
         $("#TenPlayerPack").animate({top: '175px'});
        $("#TwentyPlayerPack").animate({left: '900px',top: '175px'});
        quickSellPlayers();
        $(".PlayerOne_After").removeClass("PlayerOne_After").addClass("PlayerOne_Default");
		$("#SixPlayerPack").css("pointer-events", "auto");
        $("#TenPlayerPack").css("pointer-events", "auto");
        $("#TwentyPlayerPack").css("pointer-events", "auto");
		$("#exitTenPlayerPack").fadeOut(1000);
		$("#SixPlayerPack").show("explode", {pieces: 32}, 1000);
		$("#TenPlayerPack").delay(250).show("explode", {pieces: 32}, 1000);
		$("#TwentyPlayerPack").show("explode", {pieces: 32}, 1000);
        goldPlayerCount = 0;
        legendCount = 0;
	}
   
});

$(".payWithCoinButton").click(function(){
	if(coinButtonValue == 7500 && coinNumber >= coinButtonValue){
		isOpening6Pack = true;
		isOpening10Pack = false;
		isOpening20Pack = false;
	}
	else if(coinButtonValue == 15000 && coinNumber >= coinButtonValue){
		isOpening6Pack = false;
		isOpening10Pack = true;
		isOpening20Pack = false;
	}
	else if(coinButtonValue == 50000 && coinNumber >= coinButtonValue){
		isOpening6Pack = false;
		isOpening10Pack = false;
		isOpening20Pack = true;
	}
	else{
		isOpening6Pack = false;
		isOpening10Pack = false;
		isOpening20Pack = false;
	}
});

$(".payWithCoinButton").click(function(){
		subtractCoins();
		updateCoinDisplay();
		if(isOpening6Pack == true){
            $("#PLAYERS").fadeIn(10);
			$("#SixPlayerPack").css("pointer-events", "none");
			$("#paySixPlayerPack").fadeOut(500);
			$("#SixPlayerPack").hide( "explode", {pieces: 10 }, 500);
			revealSixPlayers();
		}
        if(isOpening10Pack == true){
            $("#PLAYERS").fadeIn(10);
			$("#TenPlayerPack").css("pointer-events", "none");
			$("#payTenPlayerPack").fadeOut(500);
			$("#TenPlayerPack").hide( "explode", {pieces: 10 }, 500);
			revealTenPlayers();
        }
});

	 
});