#pragma strict
var i:int = 0;
function Start () {

}

function Update () {
	transform.rotation = Quaternion.Euler(0,0,i);
	i++;
}