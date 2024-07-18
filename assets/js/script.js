function changeText (){
    document.getElementById('text-bio').textContent = "My name is Laura Barahona and I have been working as a Front-End Developer for two years. I am currently studying to become a Full-Stack Developer, so I am constantly learning and updating myself. In addition to my love for new technologies, I am very interested in literature, neuroscience, art and, of course, kittens. If you are interested in my profile, you can follow me on my social networks, so we can collaborate together!"
}

function changeColorBoton() {
    document.getElementById('boton-js').style.backgroundImage = "url('assets/img/bandera.png')";
    document.getElementById('boton-js').style.color = 'white';
}

  function resetColorBoton() {
    document.getElementById('boton-js').style.backgroundImage = "none";
    document.getElementById('boton-js').style.backgroundColor = "#E8B4D0";
}
    

const btn = document.getElementById('boton-js');

btn.addEventListener('click', changeText );
btn.addEventListener('mouseover', changeColorBoton);
btn.addEventListener('mouseout', resetColorBoton);