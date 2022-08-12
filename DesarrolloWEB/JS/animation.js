const letter1 = document.querySelector('.letter1');
const letter2 = document.querySelector('.letter2');
const letter3 = document.querySelector('.letter3');
const letter4 = document.querySelector('.letter4');
const letter5 = document.querySelector('.letter5');
const letter6 = document.querySelector('.letter6');
const letter7 = document.querySelector('.letter7');
const letter8 = document.querySelector('.letter8');
const letter9 = document.querySelector('.letter9');
const letter10 = document.querySelector('.letter10');
const letter11 = document.querySelector('.letter11');
const letter12 = document.querySelector('.letter12');
const letter13 = document.querySelector('.letter13');
const letter14 = document.querySelector('.letter14');
const letter15 = document.querySelector('.letter15');
const letter16 = document.querySelector('.letter16');
const letter17 = document.querySelector('.letter17');
const letter18 = document.querySelector('.letter18');
const letter19 = document.querySelector('.letter19');
const letter20 = document.querySelector('.letter20');
const letter21 = document.querySelector('.letter21');
const letter22 = document.querySelector('.letter22');
const letter23 = document.querySelector('.letter23');
const letter24 = document.querySelector('.letter24');
const letter25 = document.querySelector('.letter25');

const terciario = '#feba0b';
const quinto = '#fff';
const duration = 0.2;

letter1.style.opacity=0;
letter2.style.opacity=0;
letter3.style.opacity=0;
letter4.style.opacity=0;
letter5.style.opacity=0;
letter6.style.opacity=0;
letter7.style.opacity=0;
letter8.style.opacity=0;
letter9.style.opacity=0;
letter10.style.opacity=0;
letter11.style.opacity=0;
letter12.style.opacity=0;
letter13.style.opacity=0;
letter14.style.opacity=0;
letter15.style.opacity=0;
letter16.style.opacity=0;
letter17.style.opacity=0;
letter18.style.opacity=0;
letter19.style.opacity=0;
letter20.style.opacity=0;
letter21.style.opacity=0;
letter22.style.opacity=0;
letter23.style.opacity=0;
letter24.style.opacity=0;
letter25.style.opacity=0;

$(function(){
    $(window).one("load", "", function(){
        letter1.classList.add('animate__animated', 'animate__pulse');
        letter1.style.opacity=1;
        letter1.style.color=terciario;
        letter1.style.setProperty('--animate-duration', duration+'s');

        letter1.addEventListener('animationend', () => {
            letter1.classList.remove('animate__animated', 'animate__pulse');
            letter1.style.color=quinto;

            letter2.classList.add('animate__animated', 'animate__pulse');
            letter2.style.opacity=1;
            letter2.style.color=terciario;
            letter2.style.setProperty('--animate-duration', duration+'s');

            letter2.addEventListener('animationend', () => {
                letter2.classList.remove('animate__animated', 'animate__pulse');
                letter2.style.color=quinto;

                letter3.classList.add('animate__animated', 'animate__pulse');
                letter3.style.opacity=1;
                letter3.style.color=terciario;
                letter3.style.setProperty('--animate-duration', duration+'s');

                letter3.addEventListener('animationend', () => {
                    letter3.classList.remove('animate__animated', 'animate__pulse');
                    letter3.style.color=quinto;
            
                    letter4.classList.add('animate__animated', 'animate__pulse');
                    letter4.style.opacity=1;
                    letter4.style.color=terciario;
                    letter4.style.setProperty('--animate-duration', duration+'s');

                    letter4.addEventListener('animationend', () => {
                        letter4.classList.remove('animate__animated', 'animate__pulse');
                        letter4.style.color=quinto;
                
                        letter5.classList.add('animate__animated', 'animate__pulse');
                        letter5.style.opacity=1;
                        letter5.style.color=terciario;
                        letter5.style.setProperty('--animate-duration', duration+'s');

                        letter5.addEventListener('animationend', () => {
                            letter5.classList.remove('animate__animated', 'animate__pulse');
                            letter5.style.color=quinto;
                    
                            letter6.classList.add('animate__animated', 'animate__pulse');
                            letter6.style.opacity=1;
                            letter6.style.color=terciario;
                            letter6.style.setProperty('--animate-duration', duration+'s');

                            letter6.addEventListener('animationend', () => {
                                letter6.classList.remove('animate__animated', 'animate__pulse');
                                letter6.style.color=quinto;
                        
                                letter7.classList.add('animate__animated', 'animate__rotateIn');
                                letter7.style.opacity=1;
                                letter7.style.color=terciario;
                                letter7.style.setProperty('--animate-duration', duration+'s');
                            

                                letter7.addEventListener('animationend', () => {
                                    letter7.classList.remove('animate__animated', 'animate__rotateIn');
                                    //letter7.style.color=quinto;
                            
                                    letter8.classList.add('animate__animated', 'animate__pulse');
                                    letter8.style.opacity=1;
                                    letter8.style.color=terciario;
                                    letter8.style.setProperty('--animate-duration', duration+'s');

                                    letter8.addEventListener('animationend', () => {
                                        letter8.classList.remove('animate__animated', 'animate__pulse');
                                        letter8.style.color=quinto;
                                
                                        letter9.classList.add('animate__animated', 'animate__pulse');
                                        letter9.style.opacity=1;
                                        letter9.style.color=terciario;
                                        letter9.style.setProperty('--animate-duration', duration+'s');

                                        letter9.addEventListener('animationend', () => {
                                            letter9.classList.remove('animate__animated', 'animate__pulse');
                                            letter9.style.color=quinto;
                                    
                                            letter10.classList.add('animate__animated', 'animate__pulse');
                                            letter10.style.opacity=1;
                                            letter10.style.color=terciario;
                                            letter10.style.setProperty('--animate-duration', duration+'s');

                                            letter10.addEventListener('animationend', () => {
                                                letter10.classList.remove('animate__animated', 'animate__pulse');
                                                letter10.style.color=quinto;
                                        
                                                letter11.classList.add('animate__animated', 'animate__pulse');
                                                letter11.style.opacity=1;
                                                letter11.style.color=terciario;
                                                letter11.style.setProperty('--animate-duration', duration+'s');
                                            
                                                letter11.addEventListener('animationend', () => {
                                                    letter11.classList.remove('animate__animated', 'animate__pulse');
                                                    letter11.style.color=quinto;
                                            
                                                    letter12.classList.add('animate__animated', 'animate__pulse');
                                                    letter12.style.opacity=1;
                                                    letter12.style.color=terciario;
                                                    letter12.style.setProperty('--animate-duration', duration+'s');
                                                
                                                    letter12.addEventListener('animationend', () => {
                                                        letter12.classList.remove('animate__animated', 'animate__pulse');
                                                        letter12.style.color=quinto;
                                                
                                                        letter13.classList.add('animate__animated', 'animate__pulse');
                                                        letter13.style.opacity=1;
                                                        letter13.style.color=terciario;
                                                        letter13.style.setProperty('--animate-duration', duration+'s');
                                                    
                                                        letter13.addEventListener('animationend', () => {
                                                            letter13.classList.remove('animate__animated', 'animate__pulse');
                                                            letter13.style.color=quinto;
                                                    
                                                            letter14.classList.add('animate__animated', 'animate__pulse');
                                                            letter14.style.opacity=1;
                                                            letter14.style.color=terciario;
                                                            letter14.style.setProperty('--animate-duration', duration+'s');
                                                        
                                                            letter14.addEventListener('animationend', () => {
                                                                letter14.classList.remove('animate__animated', 'animate__pulse');
                                                                letter14.style.color=quinto;
                                                        
                                                                letter15.classList.add('animate__animated', 'animate__pulse');
                                                                letter15.style.opacity=1;
                                                                letter15.style.color=terciario;
                                                                letter15.style.setProperty('--animate-duration', duration+'s');
                                                            
                                                                letter15.addEventListener('animationend', () => {
                                                                    letter15.classList.remove('animate__animated', 'animate__pulse');
                                                                    letter15.style.color=quinto;
                                                            
                                                                    letter16.classList.add('animate__animated', 'animate__pulse');
                                                                    letter16.style.opacity=1;
                                                                    letter16.style.color=terciario;
                                                                    letter16.style.setProperty('--animate-duration', duration+'s');
                                                                
                                                                    letter16.addEventListener('animationend', () => {
                                                                        letter16.classList.remove('animate__animated', 'animate__pulse');
                                                                        letter16.style.color=quinto;
                                                                
                                                                        letter17.classList.add('animate__animated', 'animate__pulse');
                                                                        letter17.style.opacity=1;
                                                                        letter17.style.color=terciario;
                                                                        letter17.style.setProperty('--animate-duration', duration+'s');
                                                                    
                                                                        letter17.addEventListener('animationend', () => {
                                                                            letter17.classList.remove('animate__animated', 'animate__pulse');
                                                                            letter17.style.color=quinto;
                                                                    
                                                                            letter18.classList.add('animate__animated', 'animate__pulse');
                                                                            letter18.style.opacity=1;
                                                                            letter18.style.color=terciario;
                                                                            letter18.style.setProperty('--animate-duration', duration+'s');
                                                                        
                                                                            letter18.addEventListener('animationend', () => {
                                                                                letter18.classList.remove('animate__animated', 'animate__pulse');
                                                                                letter18.style.color=quinto;
                                                                        
                                                                                letter19.classList.add('animate__animated', 'animate__pulse');
                                                                                letter19.style.opacity=1;
                                                                                letter19.style.color=terciario;
                                                                                letter19.style.setProperty('--animate-duration', duration+'s');
                                                                            
                                                                                letter19.addEventListener('animationend', () => {
                                                                                    letter19.classList.remove('animate__animated', 'animate__pulse');
                                                                                    letter19.style.color=quinto;
                                                                            
                                                                                    letter20.classList.add('animate__animated', 'animate__pulse');
                                                                                    letter20.style.opacity=1;
                                                                                    letter20.style.color=terciario;
                                                                                    letter20.style.setProperty('--animate-duration', duration+'s');
                                                                                
                                                                                    letter20.addEventListener('animationend', () => {
                                                                                        letter20.classList.remove('animate__animated', 'animate__pulse');
                                                                                        letter20.style.color=quinto;
                                                                                
                                                                                        letter21.classList.add('animate__animated', 'animate__pulse');
                                                                                        letter21.style.opacity=1;
                                                                                        letter21.style.color=terciario;
                                                                                        letter21.style.setProperty('--animate-duration', duration+'s');
                                                                                    
                                                                                        letter21.addEventListener('animationend', () => {
                                                                                            letter21.classList.remove('animate__animated', 'animate__pulse');
                                                                                            letter21.style.color=quinto;
                                                                                    
                                                                                            letter22.classList.add('animate__animated', 'animate__pulse');
                                                                                            letter22.style.opacity=1;
                                                                                            letter22.style.color=terciario;
                                                                                            letter22.style.setProperty('--animate-duration', duration+'s');
                                                                                        
                                                                                            letter22.addEventListener('animationend', () => {
                                                                                                letter22.classList.remove('animate__animated', 'animate__pulse');
                                                                                                letter22.style.color=quinto;
                                                                                        
                                                                                                letter23.classList.add('animate__animated', 'animate__pulse');
                                                                                                letter23.style.opacity=1;
                                                                                                letter23.style.color=terciario;
                                                                                                letter23.style.setProperty('--animate-duration', duration+'s');
                                                                                            
                                                                                                letter23.addEventListener('animationend', () => {
                                                                                                    letter23.classList.remove('animate__animated', 'animate__pulse');
                                                                                                    letter23.style.color=quinto;
                                                                                            
                                                                                                    letter24.classList.add('animate__animated', 'animate__pulse');
                                                                                                    letter24.style.opacity=1;
                                                                                                    letter24.style.color=terciario;
                                                                                                    letter24.style.setProperty('--animate-duration', duration+'s');
                                                                                                
                                                                                                    letter24.addEventListener('animationend', () => {
                                                                                                        letter24.classList.remove('animate__animated', 'animate__pulse');
                                                                                                        letter24.style.color=quinto;
                                                                                                
                                                                                                        letter25.classList.add('animate__animated', 'animate__pulse');
                                                                                                        letter25.style.opacity=1;
                                                                                                        letter25.style.color=terciario;
                                                                                                        letter25.style.setProperty('--animate-duration', duration+'s');
                                                                                                        
                                                                                                        letter25.addEventListener('animationend', () => {
                                                                                                            letter25.classList.remove('animate__animated', 'animate__pulse');
                                                                                                            letter25.style.color=quinto;
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});