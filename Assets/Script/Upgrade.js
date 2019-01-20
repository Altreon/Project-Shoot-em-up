#pragma strict

var HP:GameObject[];
var HPB:UI.Button;
var HPPrice:UI.Text;
var Degat:GameObject[];
var DegatsB:UI.Button;
var DegatsPrice:UI.Text;
var Cadence:GameObject[];
var CadenceB:UI.Button;
var CadencePrice:UI.Text;
var Tourelle:GameObject[];
var TourelleB:UI.Button;
var TourellePrice:UI.Text;
var Vitesse:GameObject[];
var VitesseB:UI.Button;
var VitessePrice:UI.Text;
var textR:GameObject;

function Start () {
	//vie
	if(Stats.HP == 10){
		HPPrice.text = "200";
	}else if(Stats.HP == 20){
		HP[0].GetComponent(UI.Image).color = Color.blue;
		HPPrice.text = "500";
	}else if(Stats.HP == 40){
		HP[0].GetComponent(UI.Image).color = Color.blue;
		HP[1].GetComponent(UI.Image).color = Color.blue;
		HPPrice.text = "1000";
	}else if(Stats.HP == 60){
		HP[0].GetComponent(UI.Image).color = Color.blue;
		HP[1].GetComponent(UI.Image).color = Color.blue;
		HP[2].GetComponent(UI.Image).color = Color.blue;
		HPPrice.text = "Level 2";
	}
	
	//dégat
	if(Stats.dommage == 1){
		DegatsPrice.text = "200";
	}else if(Stats.dommage == 2){
		Degat[0].GetComponent(UI.Image).color = Color.blue;
		DegatsPrice.text = "500";
	}else if(Stats.dommage == 4){
		Degat[0].GetComponent(UI.Image).color = Color.blue;
		Degat[1].GetComponent(UI.Image).color = Color.blue;
		DegatsPrice.text = "1000";
	}else if(Stats.dommage == 6){
		Degat[0].GetComponent(UI.Image).color = Color.blue;
		Degat[1].GetComponent(UI.Image).color = Color.blue;
		Degat[2].GetComponent(UI.Image).color = Color.blue;
		DegatsPrice.text = "Level 2";
	}
	
	//cadence
	if(Stats.fireSpeed == 1){
		CadencePrice.text = "200";
	}else if(Stats.fireSpeed == 0.9){
		Cadence[0].GetComponent(UI.Image).color = Color.blue;
		CadencePrice.text = "500";
	}else if(Stats.fireSpeed == 0.8){
		Cadence[0].GetComponent(UI.Image).color = Color.blue;
		Cadence[1].GetComponent(UI.Image).color = Color.blue;
		CadencePrice.text = "1000";
	}else if(Stats.fireSpeed == 0.7){
		Cadence[0].GetComponent(UI.Image).color = Color.blue;
		Cadence[1].GetComponent(UI.Image).color = Color.blue;
		Cadence[2].GetComponent(UI.Image).color = Color.blue;
		CadencePrice.text = "Level 2";
	}
	
	//tourelle
	if(Stats.turret == 1){
		TourellePrice.text = "1000";
	}else if(Stats.turret == 2){
		Tourelle[0].GetComponent(UI.Image).color = Color.blue;
		TourellePrice.text = "2000";
	}else if(Stats.turret == 3){
		Tourelle[0].GetComponent(UI.Image).color = Color.blue;
		Tourelle[1].GetComponent(UI.Image).color = Color.blue;
		TourellePrice.text = "3000";
	}else if(Stats.turret == 4){
		Tourelle[0].GetComponent(UI.Image).color = Color.blue;
		Tourelle[1].GetComponent(UI.Image).color = Color.blue;
		Tourelle[2].GetComponent(UI.Image).color = Color.blue;
		TourellePrice.text = "Level 2";
	}
	
	//vitesse
	if(Stats.speed == 0.025){
		VitessePrice.text = "100";
	}else if(Stats.speed == 0.050){
		Vitesse[0].GetComponent(UI.Image).color = Color.blue;
		VitessePrice.text = "300";
	}else if(Stats.speed == 0.075){
		Vitesse[0].GetComponent(UI.Image).color = Color.blue;
		Vitesse[1].GetComponent(UI.Image).color = Color.blue;
		VitessePrice.text = "600";
	}else if(Stats.speed == 0.1){
		Vitesse[0].GetComponent(UI.Image).color = Color.blue;
		Vitesse[1].GetComponent(UI.Image).color = Color.blue;
		Vitesse[2].GetComponent(UI.Image).color = Color.blue;
		VitessePrice.text = "Level2";
	}
}

function Update () {
	//vie
	if(Stats.HP == 10){
		if(Stats.money >= 200){
			HPB.interactable = true;
		}else{
			HPB.interactable = false;
		}
	}else if(Stats.HP == 20){
		if(Stats.money >= 500){
			HPB.interactable = true;
		}else{
			HPB.interactable = false;
		}
	}else if(Stats.HP == 40){
		if(Stats.money >= 1000){
			HPB.interactable = true;
		}else{
			HPB.interactable = false;
		}
	}else{
		HPB.interactable = false;
	}
	
	//dégat
	if(Stats.dommage == 1){
		if(Stats.money >= 200){
			DegatsB.interactable = true;
		}else{
			DegatsB.interactable = false;
		}
	}else if(Stats.dommage == 2){
		if(Stats.money >= 500){
			DegatsB.interactable = true;
		}else{
			DegatsB.interactable = false;
		}
	}else if(Stats.dommage == 4){
		if(Stats.money >= 1000){
			DegatsB.interactable = true;
		}else{
			DegatsB.interactable = false;
		}
	}else{
		DegatsB.interactable = false;
	}
	
	//cadence
	if(Stats.fireSpeed == 1){
		if(Stats.money >= 200){
			CadenceB.interactable = true;
		}else{
			CadenceB.interactable = false;
		}
	}else if(Stats.fireSpeed == 0.9){
		if(Stats.money >= 500){
			CadenceB.interactable = true;
		}else{
			CadenceB.interactable = false;
		}
	}else if(Stats.fireSpeed == 0.8){
		if(Stats.money >= 1000){
			CadenceB.interactable = true;
		}else{
			CadenceB.interactable = false;
		}
	}else{
		CadenceB.interactable = false;
	}
	
	//tourelle
	if(Stats.turret == 1){
		if(Stats.money >= 1000){
			TourelleB.interactable = true;
		}else{
			TourelleB.interactable = false;
		}
	}else if(Stats.turret == 2){
		if(Stats.money >= 2000){
			TourelleB.interactable = true;
		}else{
			TourelleB.interactable = false;
		}
	}else if(Stats.turret == 3){
		if(Stats.money >= 3000){
			TourelleB.interactable = true;
		}else{
			TourelleB.interactable = false;
		}
	}else{
		TourelleB.interactable = false;
	}
	
	//vitesse
	if(Stats.speed == 0.025){
		if(Stats.money >= 100){
			VitesseB.interactable = true;
		}else{
			VitesseB.interactable = false;
		}
	}else if(Stats.speed == 0.050){
		if(Stats.money >= 300){
			VitesseB.interactable = true;
		}else{
			VitesseB.interactable = false;
		}
	}else if(Stats.speed == 0.075){
		if(Stats.money >= 600){
			VitesseB.interactable = true;
		}else{
			VitesseB.interactable = false;
		}
	}else{
		VitesseB.interactable = false;
	}
	

	textR.GetComponent(UI.Text).text = Stats.money.ToString()+" PR";
}

function OnVieClick () {
	if(Stats.HP == 10){
		Stats.HP = 20;
		Stats.money -= 200;
		HP[0].GetComponent(UI.Image).color = Color.blue;
		HPPrice.text = "500";
	}else if(Stats.HP == 20){
		Stats.HP = 40;
		Stats.money -= 500;
		HP[1].GetComponent(UI.Image).color = Color.blue;
		HPPrice.text = "1000";
	}else if(Stats.HP == 40){
		Stats.HP = 60;
		Stats.money -= 1000;
		HP[2].GetComponent(UI.Image).color = Color.blue;
		HPPrice.text = "Level2";
	}
	Stats.Save();
}

function OnDegatClick () {
	if(Stats.dommage == 1){
		Stats.dommage = 2;
		Stats.money -= 200;
		Degat[0].GetComponent(UI.Image).color = Color.blue;
		DegatsPrice.text = "500";
	}else if(Stats.dommage == 2){
		Stats.dommage = 4;
		Stats.money -= 500;
		Degat[1].GetComponent(UI.Image).color = Color.blue;
		DegatsPrice.text = "1000";
	}else if(Stats.dommage == 4){
		Stats.dommage = 6;
		Stats.money -= 1000;
		Degat[2].GetComponent(UI.Image).color = Color.blue;
		DegatsPrice.text = "Level 2";
	}
	Stats.Save();
}

function OnCadenceClick () {
	if(Stats.fireSpeed == 1){
		Stats.fireSpeed = 0.9;
		Stats.money -= 200;
		Cadence[0].GetComponent(UI.Image).color = Color.blue;
		CadencePrice.text = "500";
	}else if(Stats.fireSpeed == 0.9){
		Stats.fireSpeed = 0.8;
		Stats.money -= 500;
		Cadence[1].GetComponent(UI.Image).color = Color.blue;
		CadencePrice.text = "1000";
	}else if(Stats.fireSpeed == 0.8){
		Stats.fireSpeed = 0.7;
		Stats.money -= 1000;
		Cadence[2].GetComponent(UI.Image).color = Color.blue;
		CadencePrice.text = "Level 2";
	}
	Stats.Save();
}

function OnTourelleClick () {
	if(Stats.turret == 1){
		Stats.turret = 2;
		Stats.money -= 1000;
		Tourelle[0].GetComponent(UI.Image).color = Color.blue;
		TourellePrice.text = "2000";
	}else if(Stats.turret == 2){
		Stats.turret = 3;
		Stats.money -= 2000;
		Tourelle[1].GetComponent(UI.Image).color = Color.blue;
		TourellePrice.text = "3000";
	}else if(Stats.turret == 3){
		Stats.turret = 4;
		Stats.money -= 3000;
		Tourelle[2].GetComponent(UI.Image).color = Color.blue;
		TourellePrice.text = "Level 2";
	}
	Stats.Save();
}

function OnVitesseClick () {
	if(Stats.speed == 0.025){
		Stats.speed = 0.050;
		Stats.money -= 100;
		Vitesse[0].GetComponent(UI.Image).color = Color.blue;
		VitessePrice.text = "300";
	}else if(Stats.speed == 0.050){
		Stats.speed = 0.075;
		Stats.money -= 300;
		Vitesse[1].GetComponent(UI.Image).color = Color.blue;
		VitessePrice.text = "600";
	}else if(Stats.speed == 0.075){
		Stats.speed = 0.1;
		Stats.money -= 600;
		Vitesse[2].GetComponent(UI.Image).color = Color.blue;
		VitessePrice.text = "Level 2";
	}
	Stats.Save();
}

function OnGOClick () {
	Application.LoadLevel(Stats.level + 1);
}