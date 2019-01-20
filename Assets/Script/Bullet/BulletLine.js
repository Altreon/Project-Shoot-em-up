#pragma strict

var speed:float;
	
function Awake () {
	Destroy(gameObject, 5);
}

function Update () {
    transform.position += transform.up * speed;
}