
// function pauseAnimation() {
//     // let element = document.body.a;
//     // element.style.animationPlayState = 'paused';
//     // let running = element.style.animationPlayState === 'running';
//     // element.style.animationPlayState = running ? 'paused' : 'running';
//
//
// }
//
// const pauseButton = document.querySelector('.pause');

// const handlePauseButtonClick = (event) => {
//     event.preventDefault();
//
//     const intro = document.querySelector('.intro').p;
//
//     intro.style.animationPlayState = 'paused';
//
// }
//
// pauseButton.addEventListener('click', handlePauseButtonClick);



const darkButton = document.querySelector('.dark-mode');

const handleDarkButtonClick = (event) => {

    event.preventDefault();

    const body = document.body;
    const nav = document.querySelector('nav');
    const navLink1 = document.querySelector('.nav-link1');
    const navLink2 = document.querySelector('.nav-link2');
    const navLink3 = document.querySelector('.nav-link3');
    const navLink4 = document.querySelector('.nav-link4');
    const dropBtn = document.querySelector('.dropbtn');
    const paraBorder = document.body.querySelector('.text');
    const modeBtn = document.querySelector('.dark-mode');

    if (body.style.backgroundColor === 'rgb(0, 0, 0)') {
        body.style.backgroundColor = '#FFFFFF';
        body.style.color = '#000000';
        nav.style.backgroundColor = '#FFFFFF';
        navLink1.style.color = '#000000';
        navLink2.style.color = '#000000';
        navLink3.style.color = '#000000';
        navLink4.style.color = '#000000';
        dropBtn.style.color = '#000000';
        dropBtn.style.backgroundColor = '#FFFFFF';
        paraBorder.style.borderColor = '#000000';
        modeBtn.innerHTML = '<i class="fas fa-moon"></i>\n';
    } else {
        body.style.backgroundColor = '#000000';
        body.style.color = '#FFFFFF';
        nav.style.backgroundColor = '#000000';
        navLink1.style.color = '#FFFFFF';
        navLink2.style.color = '#FFFFFF';
        navLink3.style.color = '#FFFFFF';
        navLink4.style.color = '#FFFFFF';
        dropBtn.style.color = '#FFFFFF';
        dropBtn.style.backgroundColor = '#000000';
        paraBorder.style.borderColor = '#01796f';
        modeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>\n';
    }

}

darkButton.addEventListener('click', handleDarkButtonClick);


const dropBtn = document.querySelector('.dropbtn');

const handleDropButtonClick = (event) => {
    event.preventDefault();

    const dropContent = document.querySelector('#dropdown-content');

    if (dropContent.style.display === 'block') {
        dropContent.style.display = 'none';
    } else {
        dropContent.style.display = 'block';
    }
}

dropBtn.addEventListener('click', handleDropButtonClick);

