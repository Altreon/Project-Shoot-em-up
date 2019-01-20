#pragma strict

function Update () {
	transform.position.y -= 0.01;
	if(transform.position.y <= -6){
		transform.position.y = 12;
	}
}