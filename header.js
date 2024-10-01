addEventListener('scroll', function(){
    const header = document.querySelector('#header');
    if(window.scrollY > 820){
        header.classList.add('scrolledBg');
    }else{
        header.classList.remove('scrolledBg');
    }
    
    const headerLogo = document.querySelector('.headerLogo');
    const headerLogoSticky = document.querySelector('.headerLogoSticky');
    if(window.scrollY > 60){
        headerLogo.classList.remove('active');
        headerLogoSticky.classList.add('active');
        
    }else{
        headerLogo.classList.add('active');
        headerLogoSticky.classList.remove('active');
    }
});