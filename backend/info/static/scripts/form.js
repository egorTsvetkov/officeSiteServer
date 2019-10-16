let name = $('form')[0][1];
let office = $('form')[0][2];
let contact = $('form')[0][3];	
let phone = $('form')[0][4];
let date = $('form')[0][5];
let time = $('form')[0][6];

function validate(){	
    let isValidated = true;

	if (name.value == ""){
        isValidated = false;
        name.setAttribute('style', "border: 1px solid red !important;");
	}/*
    if (office.value == ""){
        isValidated = false;
        office.setAttribute('style', "border: 1px solid red !important;");
    }*/
    if (contact.value == ""){
        isValidated = false;
        contact.setAttribute('style', "border: 1px solid red !important;");
    }
    if (phone.value == ""){
        isValidated = false;
        phone.setAttribute('style', "border: 1px solid red !important;");
    }
    if (date.value == ""){
        isValidated = false;
        date.setAttribute('style', "border: 1px solid red !important;");
    }
    if (time.value == ""){
        isValidated = false;
        time.setAttribute('style', "border: 1px solid red !important;");
    }
	return isValidated;
}

function fixDate() {
    this.type='date';
}

//fix date input
$(document).on("click", function(e) {
    if (e.target.classList[0] == "form-input") {
        e.target.setAttribute('style', '');
    }
    if (e.target.id != 'form-input-date') {
        $('#form-input-date')[0].type = 'text';
    }
})

function clearField() {
	name.value = ""; 
	office.value = ""; 
	contact.value = "";
	phone.value ="";  
	date.value = "";  
	time.value = ""; 
}

function doAlert(msg, type) {
    alertDiv = document.createElement('div');
    alertDiv.setAttribute('class', 'alert my-alert ' + type);
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerText = msg;
    document.body.appendChild(alertDiv);
    setTimeout(function() {
        document.getElementsByClassName('my-alert')[0].style.top = '20px';
    }, 250);
    setTimeout(function() {
        document.getElementsByClassName('my-alert')[0].style.top = '-60px';
        setTimeout(function() {
            document.body.removeChild(document.getElementsByClassName('my-alert')[0]);
        }, 3000);     
    },3000);
}


function send_view_data() {
    let http = new XMLHttpRequest();
    let url = '/view';
    if(!validate()){ 
    	doAlert("Заполните пожалуйста все поля", "alert-danger");
    	return; 
    }
    let params = $('form').serialize();
    print(params);
    http.open('POST', url, true);
    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
        doAlert("Запись успешно добавлена", "alert-success");
        clearField();
        }
    }
    http.send(params);
}
