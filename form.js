
const eveyNext=document.querySelectorAll('#next');
//disable every next button
const disbaleNext_button=eveyNext.forEach(button=>button.disabled=true);


//go to next or back page

const changePage=(num,direction)=>{
    //for num number to change color to grey
    
    const loosescolor=document.getElementById('number'+num);
    loosescolor.style.background='rgba(128, 128, 128,0.1)';
    loosescolor.style.color='grey';

    ///display to none for num
    const pagetohide=document.getElementById('pg'+num);
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
    const colorbutton=document.getElementById('number'+num);
    colorbutton.style.background='rgb(77, 184, 77)';
    colorbutton.style.color='white';

    //display to flex for num++
    const pagetoshow=document.getElementById('pg'+num);
    pagetoshow.style.display='flex';

};



// const form=()=>{
//     const forms=document.querySelectorAll('form');
//     forms.forEach(form=>{
//         form.onsubmit(events=>{
//             events.preventDefault();

//             events.target.reset();
//         })
//     })
// }

// document.querySelector('.filebox').addEventListener('dragover',()=>0)

// document.querySelectorAll('#next').forEach(button=>{
//     button.disabled=true;
// })


 
// formfilled();

//check is the form is filled or not in each page
 const formFilled=eveyNext.forEach(nextButton=>nextButton.addEventListener('mouseover',()=>{
         console.log(2222)
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
 
}))

//to avoid form submission and reload of the page
eveyNext.forEach(button=>button.addEventListener('click',event =>event.preventDefault()));
