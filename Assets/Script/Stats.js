#pragma strict

static var money:int = 0;
static var HP:int = 10;
static var dommage:int = 1;
static var turret:int = 1;
static var speed:float = 0.1;
static var fireSpeed:float = 0.25;
static var level:int = 1;

function Start () {
	level = PlayerPrefs.GetInt("level");
}

static function Load () {
	money = PlayerPrefs.GetInt("money");
	HP = PlayerPrefs.GetInt("HP");
	dommage = PlayerPrefs.GetInt("dommage");
	turret = PlayerPrefs.GetInt("turret");
	speed = PlayerPrefs.GetFloat("speed");
	fireSpeed = PlayerPrefs.GetFloat("fireSpeed");
}

static function Save () {
	PlayerPrefs.SetInt("money", money);
	PlayerPrefs.SetInt("HP", HP);
	PlayerPrefs.SetInt("dommage", dommage);
	PlayerPrefs.SetInt("turret", turret);
	PlayerPrefs.SetFloat("speed", speed);
	PlayerPrefs.SetFloat("fireSpeed", fireSpeed);
}

static function SaveMoney () {
	PlayerPrefs.SetInt("money", money);
}

static function SaveLevel () {
	level ++;
	PlayerPrefs.SetInt("level", level);
}

function Update () {
}