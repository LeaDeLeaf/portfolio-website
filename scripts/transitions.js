window.onload = () => {

    var animate1 = anime({
        targets: '.logo polygon',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: function(el, i) { return i * 400 },
        direction: 'alternate',
        loop: true
    });

    var animate2 = anime({
        targets: '.logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 50,
        delay: function(el, i) { return i * 30 },
        direction: 'alternate',
        loop: true
    });
    
    const transition_el = document.querySelector('.transition');
    const transition_logo = document.querySelector('.logo');
    const anchors = document.querySelectorAll('a');  


    setTimeout(() => {
        transition_el.classList.remove('is-active');
        transition_logo.classList.remove('logo-is-active');
    }, 2500);

    for (let i = 0; i < anchors.length; i++){
        const anchor = anchors[i];
        const hrefBtn = document.getElementById("btnHref");
        const hrefBtn2 = document.getElementById("btnHref2");
        const contactBtn = document.getElementById("contactBtn");
        
        if(anchors[i] == hrefBtn){

            hrefBtn.addEventListener('click', function(){
                window.location.reload;
            })

        } else if(anchors[i] == hrefBtn2){

            hrefBtn2.addEventListener('click', function(){
                window.location.reload;
            })

        } else if(anchors[i] == contactBtn){

            window.open('', 'TheWindow');
            document.getElementById('formInput').submit();

            // setTimeout(function(){
            //     contactBtn.addEventListener('click', function(){
            //         clearForm(document.getElementById("formInput"));
            //     })
            // }, 3000)

        } else {

            anchor.addEventListener('click', e => {
                e.preventDefault();
                // let target = e.target.href;
    
                // window.alert(e.href);
                transition_el.classList.add('is-active');
                transition_logo.classList.add('logo-is-active');
    
                setTimeout(() => {
                    window.location.href = anchor;
                }, 2500);
            });

        }
    }

}

// function clearForm(oForm) {
   
//     var elements = oForm.elements;
     
//     oForm.reset();
  
//     for(i=0; i<elements.length; i++) {
       
//     field_type = elements[i].type.toLowerCase();
   
//     switch(field_type) {
   
//       case "text":
//       case "password":
//       case "email":
//       case "textarea":
//             case "hidden":  
       
//         elements[i].value = "";
//         break;
         
//       case "radio":
//       case "checkbox":
//           if (elements[i].checked) {
//             elements[i].checked = false;
//         }
//         break;
  
//       case "select-one":
//       case "select-multi":
//                   elements[i].selectedIndex = -1;
//         break;
  
//       default:
//         break;
//     }
//       }
//   }