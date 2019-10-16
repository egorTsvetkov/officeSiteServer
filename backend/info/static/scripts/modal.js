
function showModal() {
    //$("#main-div").disable();
    let modalWindow = document.createElement('div');
    let modalWindowBg = document.createElement('div');
    let innerModal = document.getElementById('more-info-panel-inner');
    let tmp2 = innerModal.innerHTML;
    let tmp1 = document.getElementById('00modal00'); 
    let width = $(window).width();
    let height = $(window).height();
    let div_width = width / 2; 
    let x = width / 4;
   
   
    

    modalWindow.setAttribute('id', 'more-info-panel');
    modalWindow.style.backgroundColor = "white"
    modalWindow.style.position = 'absolute';
    modalWindow.style.left = x + 'px';
    modalWindow.style.top = height / 20 + 'px';
    modalWindow.style.width = div_width + 'px';
    modalWindow.style.height = 'auto';
    modalWindow.style.zIndex = 1050;


    modalWindowBg.style.position = 'fixed';
    modalWindowBg.setAttribute('id', 'closeModal');
    modalWindowBg.style.left = '0px';
    modalWindowBg.style.top = '0px';


    modalWindowBg.style.width = width + 'px';
    modalWindowBg.style.height = height + 'px';
    modalWindowBg.style.zIndex = 1040;
    modalWindowBg.style.backgroundColor = 'rgba(0,0,0,0.8)'
    tmp1.appendChild(modalWindowBg);

    document.body.appendChild(modalWindow);
    //document.body.removeChild(innerModal);
    modalWindow.innerHTML = tmp2;

    //создать модальное окно.

}



function hideModal(modalName) {
    let modalWindow = document.getElementById(modalName);
    let modalWindowBg = document.getElementById('closeModal'); 
    let tmp1 = document.getElementById('00modal00');   
    document.body.removeChild(modalWindow);    
    tmp1.removeChild(modalWindowBg);
   // $("#main-div").enable();
}


$(document).click(function(event) {
	if($(event.target)[0].getAttribute('id') == 'closeModal'){
		hideModal('more-info-panel');
	}
    if($(event.target)[0].getAttribute('id') == 'closeModalBtn'){
        hideModal('more-info-panel');
    }
    if($(event.target)[0].getAttribute('id') == 'closeModalX'){
        hideModal('more-info-panel');
    }
    if($(event.target)[0].getAttribute('id') == 'closeModalX1'){
        hideModal('more-info-panel');
    }
});