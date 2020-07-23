var list = document.getElementById("List");

function addtask(){
    var input = document.getElementById("input");
    var li = document.createElement("li");
    var text = document.createTextNode(input.value);
    li.appendChild(text);
    list.appendChild(li);


    var dlt = document.createElement("button");
    var dlttext = document.createTextNode("DELETE");
    dlt.appendChild(dlttext);
    li.appendChild(dlt);
    var edit = document.createElement("button");
    var edittext = document.createTextNode("EDIT");
    edit.appendChild(edittext);
    li.appendChild(edit);
    dlt.setAttribute("onclick","dlt(this)")
    dlt.setAttribute("class","dltbtn")
    edit.setAttribute("onclick","edt(this)")
    edit.setAttribute("class","editbtn")
    li.setAttribute("class","lii")
    input.value= "";

}
function dlt(e){ // by passing e as parameter and giving this in the class function we can call the actual button
    e.parentNode.remove()   //remove() is a function used to remove nodes. 
}
function edt(e){
    console.log(e.parentNode.firstChild.nodeValue)
    var newvalue = prompt("enter new task",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = newvalue;
}
function dltAll(){
    list.innerHTML = ""
}