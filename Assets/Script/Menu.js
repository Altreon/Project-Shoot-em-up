#pragma strict

var stats:GameObject;

function Awake () {
	Screen.SetResolution(800, 600, false, 180);
	DontDestroyOnLoad(stats);
}

function Update () {

}

function OnGUI () {
	if (GUI.Button(Rect(Screen.width/2-40,Screen.height/2+30,100,30),"Nouvelle partie")){
		PlayerPrefs.DeleteAll();
		Stats.level = 0;
		Stats.Save();
		Stats.SaveLevel();
		Application.LoadLevel(2);
    }
    if(Stats.level != 0){
    	if (GUI.Button(Rect(Screen.width/2-40,Screen.height/2-10,100,30),"Continuer")){
    		Stats.Load();
			Application.LoadLevel(1);
    	}
    }
}