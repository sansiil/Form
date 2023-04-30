
const eveyNext=document.querySelectorAll('#next');
//disable every next button
const disbaleNext_button=eveyNext.forEach(button=>button.disabled=true);


//go to next or back page

const changePage=(num,direction)=>{
    //for num number to change color to grey


    //can use window.id 0r wind[id] instead of document .getElemnetById(id)

    const loosescolor=window['number'+num];  //document.getElementById('number'+num);
    loosescolor.style.background='rgba(128, 128, 128,0.1)';
    loosescolor.style.color='grey';

    ///display to none for num
    const pagetohide=window['pg'+num];   //document.getElementById('pg'+num);
    pagetohide.style.display='none';

    //next page if direction is positive
    //else back page

    if (direction>0){
        num++;
    }
    else{
        num--;
    }
    
    
    //for num++ number to change color to green
    const colorbutton=window['number'+num];  //document.getElementById('number'+num);
    colorbutton.style.background='rgb(77, 184, 77)';
    colorbutton.style.color='white';

    //display to flex for num++
    const pagetoshow=window['pg'+num];  //document.getElementById('pg'+num);
    pagetoshow.style.display='flex';

};


//check if the form is filled or not when mouse is hovered over next button
 const formFilled=eveyNext.forEach(nextButton=>nextButton.addEventListener('mouseover',()=>{
         
        //to get all  form pages
        const allPages=document.querySelectorAll('main main'); 


        //query selector all are in node list
        //converting into array by using Array.from(nodelist)
        //to use functions like find, filter as they work on array.
        const displayedPage=Array.from(allPages).find(page=>page.style.display==='flex' || page.style.display==='');

        //find all input inside displayedPage
        const allInputs=displayedPage.querySelectorAll('input');

        const allInputsArr=Array.from(allInputs);

        //for required input to be true means all are filled
        //flag variable
        let allInputsFilled=true;

        //loop through every input in the displayed page
        for(let i=0;i<allInputsArr.length;i++){
             if(allInputsArr[i].required && allInputsArr[i].value===''){
                allInputsFilled=false;
                break;
            }
        };


        const next=displayedPage.querySelector('#next');

        next.disabled=!allInputsFilled;

        //if true then cursor is set to pointer;
        if(allInputsFilled){
           next.style.cursor='pointer';
        }
        else{
            next.style.cursor='not-allowed';
        }
 
}));

//to avoid form submission and reload of the page
eveyNext.forEach(button=>button.addEventListener('click',event =>event.preventDefault()));


const fileInput=document.querySelector('#pg3 input').addEventListener('change',()=>{

    const imageName=document.querySelector('#pg3 input').files[0].name;
    const addName=document.querySelector('.filebox');
    

    if(document.querySelectorAll('#pg3 h3').length<=0){
    
        const h3=document.createElement('h3'); 
        h3.innerText=imageName; 
        addName.appendChild(h3);   
    }
    else {
        const h3=document.querySelector('#pg3 h3');
        h3.innerText=imageName;   
    }
    
    
});

const qrGenerator=()=>{

      const fname=window['fname'].value;
      const mname=window['mname'].value;
      const lname=window['lname'].value;
      const dob=window['dob'].value;
      const phnum=window['phnum'].value;
      const address=window['address'].value;


      const img=document.createElement('img');
      document.querySelector('.qr').appendChild(img);

     
      img.src='http://api.qrserver.com/v1/create-qr-code/?size=100x100&data='+ 'First Name:'+fname+"%0AMiddle Name:"+mname+
              '%0ALast Name:'+lname+'%0ADOB:'+dob+"%0APhone Number:"+phnum+"%0AAddress:"+address;

      
};

//run qr when next button of pg3 is presses

document.querySelector('#pg3 #next').addEventListener('click',()=>qrGenerator());










