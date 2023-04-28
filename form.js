
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


// document.getElementById('next').addEventListener('mouseover',()=>{
     
//     const formfilled=()=>{
//         const input=document.querySelectorAll('#pg1 input');
//         document.querySelectorAll('#pg1 input').forEach(isfilled=>{
//             if(isfilled.value!=='' && isfilled.required){
//                  document.querySelector('#next').style.cursor='pointer';
//                  document.querySelector('#next').disabled=false;
    
//             }
//             else{
//                 console.log('aaa');
                
//             }
//         })
    
//      };

//      formfilled();
    
// })