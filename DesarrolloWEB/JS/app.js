(function(){
    const btnOpenModal = document.getElementById("openModal");
  
        btnOpenModal.addEventListener('click', (e) => {
            const nameClass = document.getElementById("modalCVContainer").className;
            if(nameClass == "displayNoneCV"){
              const ModalCV = document.getElementById("modalCVContainer");
  
              ModalCV.classList.replace("displayNoneCV", "displayFlex");
              ModalCV.style.display = "flex";
            }
            if(nameClass == "displayFlex"){
              const ModalCV = document.getElementById("modalCVContainer");
  
              ModalCV.classList.replace("displayFlex", "displayNoneCV");
              ModalCV.style.display = "none";
            }
        });
  })();

  (function(){
    const btnCloseModal1 = document.getElementById("closeModal1");
    const btnCloseModal2 = document.getElementById("closeModal2");
  
        btnCloseModal1.addEventListener('click', (e) => {
            const nameClass = document.getElementById("modalCVContainer").className;
            if(nameClass == "displayNoneCV"){
              const ModalCV = document.getElementById("modalCVContainer");
  
              ModalCV.classList.replace("displayNoneCV", "displayFlex");
              ModalCV.style.display = "flex";
            }
            if(nameClass == "displayFlex"){
              const ModalCV = document.getElementById("modalCVContainer");
  
              ModalCV.classList.replace("displayFlex", "displayNoneCV");
              ModalCV.style.display = "none";
            }
        });

        btnCloseModal2.addEventListener('click', (e) => {
            const nameClass = document.getElementById("modalCVContainer").className;
            if(nameClass == "displayNoneCV"){
              const ModalCV = document.getElementById("modalCVContainer");
  
              ModalCV.classList.replace("displayNoneCV", "displayFlex");
              ModalCV.style.display = "flex";
            }
            if(nameClass == "displayFlex"){
              const ModalCV = document.getElementById("modalCVContainer");
  
              ModalCV.classList.replace("displayFlex", "displayNoneCV");
              ModalCV.style.display = "none";
            }
        });
  })();