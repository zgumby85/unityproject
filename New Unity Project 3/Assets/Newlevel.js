#pragma strict

var nextLevel : String;
 
 
 
function OnTriggerEnter() {

Debug.Log("Trigger Activated");
 
    //------------//
 
    Application.LoadLevel (nextLevel);
 
    //------------//
 
}