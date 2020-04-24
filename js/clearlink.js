/*
CLCP v2.1 Clear Links to Current Page
Jonathan Snook
This code is offered unto the public domain
http://www.snook.ca/jonathan/
*/

window.onload = clearCurrentLink;

function clearCurrentLink(){

    var nav = document.getElementById("primarynav");
    var a = nav.getElementsByTagName("A");
    for(var i=0;i<a.length;i++)
        if(a[i].href == window.location.href.split("#")[0])
    removeNode(a[i]);
}

function removeNode(n){
    if(n.hasChildNodes())
    // gets the text from the link and moves it to the previous node.
        for(var i=0;i<n.childNodes.length;i++) {
                var strong = document.createElement('strong');
        var label = n.childNodes[i].cloneNode(true);
        strong.appendChild(label);
        n.parentNode.appendChild(strong);
}
    n.parentNode.removeChild(n);

}