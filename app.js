
shownotes()
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById('addTxt');
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[]; 
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    shownotes();
})
function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[]; 
    }
    else{
        notesObj=JSON.parse(notes);
    }   
    let html="";
    notesObj.forEach(function(element,index){
        html+=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Notes ${index +1}</h5>
            <p class="card-text">${element}</p>
            
            <button id="${index}" onclick="deletenode(this.id)" class="btn btn-primary">Delete note</button>
        </div>
    </div>`;
    })
    let notesElem=document.getElementById("notes")
    if(notesObj.length!=0){
        notesElem.innerHTML=html;
    }
    else{
        notesElem.innerHTML=`<h3>Please add some notes</h3>`;
    }

}
function deletenode(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[]; 
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();

}
