
function nexxt(){
    const fname=document.getElementById('fname').value;
    const lname=document.getElementById('lname').value;
    if(fname!='' && lname!=''){
        const pg1=document.getElementById("pg1");
        const pg2=document.getElementById("pg2");
        pg1.style.display="none";
        pg2.style.display="block";
    }
    else
      alert(1);
}