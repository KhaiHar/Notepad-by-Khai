/*
* Save a text file 
*/
function savefilefunction(){

  var data = document.getElementById('content').value;
    blob = new Blob([data], { type: 'text/plain' }),
    anchor = document.createElement('a');
    anchor.download = "textfile.txt";
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
    anchor.click();
  }

    /* Open New Notepad Window */
  function opennewwindow() {
    var myWindow = window.open("index.html", "", "");
  }

  /* load txt file and display on textarea */
  function uploadFile(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("content").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
  }

function clearTextarea() {
  document.getElementById("content").value = "";
  document.getElementById('count-words').innerHTML = '';
  document.getElementById('content').style.textAlign = '';
}

function changeTextSize() {
  var input = document.getElementById('fontsize').value;
  
  document.getElementById('content').style.fontSize = input + "px";
} 

function italicfont(){
  var italicfont=document.getElementById("content").style.fontStyle;
  if(italicfont!=='italic'){
    document.getElementById("content").style.fontStyle = "italic";
  }
  else{
    document.getElementById("content").style.fontStyle = "normal";
  } 
}

function Bold() 
{
 
   var  bold = document.getElementById("content").style.fontWeight ;
 
 if(bold == 'normal')
    {
        document.getElementById("content").style.fontWeight = 'bold';
    }
 else
    {
        document.getElementById("content").style.fontWeight = 'normal';
    }
}

function underline(){
  var underlinetext=document.getElementById('content').style.textDecoration;
  if(underlinetext!=='underline'){
    document.getElementById('content').style.textDecoration='underline';
  }
  else{
    document.getElementById('content').style.textDecoration='none';
  } 
}  

function colorpicker(color) 
{
  document.getElementById("content").style.color = color.value;
}

function bgcolorpicker(color) 
{
  document.getElementById("content").style.backgroundColor = color.value;
}

function changeFont(font){
  document.getElementById("content").style.fontFamily = font.value;
}

function aboutnotepad() {
  alert("Notepad App\nMade by: Muhamad Khairuddin Bin Hj Abd Rahman\nCopyright 2021");
}

function alignleft(){
  var alignleft=document.getElementById('content').style.textAlign;
  if(alignleft!=='left'){
    document.getElementById('content').style.textAlign ='left';
  }
  else{
    document.getElementById('content').style.textAlign ='initial';
  } 
} 

function aligncenter(){
  var alignleft=document.getElementById('content').style.textAlign;
  if(alignleft!=='center'){
    document.getElementById('content').style.textAlign ='center';
  }
  else{
    document.getElementById('content').style.textAlign ='initial';
  } 
} 

function alignright(){
  var alignleft=document.getElementById('content').style.textAlign;
  if(alignleft!=='right'){
    document.getElementById('content').style.textAlign ='right';
  }
  else{
    document.getElementById('content').style.textAlign ='initial';
  } 
} 

function alignjustify(){
  var alignleft=document.getElementById('content').style.textAlign;
  if(alignleft!=='justify'){
    document.getElementById('content').style.textAlign ='justify';
  }
  else{
    document.getElementById('content').style.textAlign ='initial';
  } 
} 
