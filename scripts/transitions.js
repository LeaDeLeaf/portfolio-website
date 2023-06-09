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
        const resumeBtn = document.getElementById("btnHref");
        
        if(anchors[i] != resumeBtn){

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

        } else {

            resumeBtn.addEventListener('click', function(){
                window.location.reload;
            })

        }
    }



}