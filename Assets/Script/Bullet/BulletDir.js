#pragma strict

var speed:float;
	
function Start () {
	Destroy(gameObject, 5);
}

function Update () {
    transform.position += transform.up * speed;
}