var intercomclip:AudioClip;
var isintercomclip = false;
var hasplayed = false;


function OnTriggerEnter(o:Collider){



Debug.Log("trigger fired");

isintercomclip = true;

}

function OnTriggerExit(o:Collider){
Debug.Log("Trigger fired 2");

if(isintercomclip == true){
playIntercom();
}}


function playIntercom(){

if(!hasplayed){
audio.PlayOneShot(intercomclip);
isintercomclip = false;
hasplayed=true;}

}