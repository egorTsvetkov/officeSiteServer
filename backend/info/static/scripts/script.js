let all_unions = {};
let summary = {};
let slideIndex = 0;
let slideIndexModal = 0;
let rooms = document.getElementsByClassName('offices');
let lineLength = 20;
let mobileWidth = 791;// <--------------------------------------------------------------------------- размер для включения модальных окон.


var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;

}


if ($(window).width() <= mobileWidth){
    document.getElementById("_icon").setAttribute("src", "/static/svg/icons-sm.svg");
} else {
    document.getElementById("_icon").setAttribute("src", "/static/svg/icons.svg");
}
function print(data){
    console.log(data);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function unique(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }

    return Object.keys(obj);
}

// init slick
jQuery(function($){
    //main page
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        asNavFor: '.slider-for',
        focusOnSelect: true
    });
    //modal window 
    $('.slider-for-modal').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !isMobile,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.slider-nav-modal'
    });
    $('.slider-nav-modal').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        asNavFor: '.slider-for-modal',
        focusOnSelect: true
    });
});


//adaptive height
function resize_body() {
    if ($(window).width() <= mobileWidth){
        document.getElementById("_icon").setAttribute("src", "/static/svg/icons-sm.svg");
    } else {
        document.getElementById("_icon").setAttribute("src", "/static/svg/icons.svg");
    }

    document.getElementsByTagName('body')[0].style.height = $(window).width() * 1.24 + "px";
}
resize_body();
window.addEventListener("resize", resize_body);


//color map and get unions
jQuery(function($) {
    //Запрос для получения данных из БД
    $.get("/api/all/").done(function(data) {
        for (let i = 1; i <= rooms.length; i++) {
            let local_id = data[i]['ID'];
            //Блок отвечающий за выделение объединенных офисов.

            let union = data[i]['UNION'];
            if (union.length > 0) {
                all_unions['union-' + local_id] = union;
            }



            //Значения по умолчанию
            let bgColor = "#FFA602";
            //меняем данные на основе данных из БД
            if (data[i]['OFFICE_STATUS'] == "notfree") {
                bgColor = "#FAEFD8";

            } else if (data[i]['OFFICE_STATUS'] == "none") {
                bgColor = "#FAEFD8";

            } else if (data[i]['OFFICE_STATUS'] == "reserved") {
                bgColor = "#FFC65D";
            }




            //Если есть объединение
            if (union.length > 0) {
                let summary_sqr = 0;
                let summary_price = 0;
                let tmp_union = undefined;
                for (let j = 0; j < union.length; j++) {
                    summary_price += data[union[j]]['FULL_PRICE'];
                    summary_sqr += data[union[j]]['OFFICE_SQUARE'];
                }
                summary_price = Math.round(summary_price);
                summary_sqr = Math.round(summary_sqr * 100) / 100
                summary[i] = {
                    'SQR': summary_sqr,
                    'PRC': summary_price
                };
                rooms[local_id].setAttribute("style", "fill: " + bgColor + ";stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1");
            } else {
                rooms[local_id].setAttribute("style", "fill: " + bgColor + ";stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1");
            }
        }
        let short_union_ids = draw_unions(all_unions);
        getDataForOne(1, false);
    });
});


//change info about office / open modal window
$(document).on("click", ".offices", function() {
    let id = $(this)[0].getAttribute("id");
    if ($(window).width() <= mobileWidth) {
        print('User clicked #'+id);
        $('#InfoModal').modal(); //launch modal
        sleep(1000); //wait so slick can recalculate width
        $(window).trigger('resize'); //call resize to cause size update in slick
        getDataForOne(id, true, function(){ //copy all data from main block to modal window
            document.getElementById('more-info-panel-title-modal').innerText = document.getElementById('more-info-panel-title').innerText;
            document.getElementById('more-info-panel-info-modal').innerText = document.getElementById('more-info-panel-info').innerText;
            for (var i = 0; i < 2;i++) {  
                document.getElementsByClassName('more-info-panel-price-modal')[i].innerText = document.getElementsByClassName('more-info-panel-price')[i].innerText;
                document.getElementsByClassName('more-info-panel-price-all-modal')[i].innerText = document.getElementsByClassName('more-info-panel-price-all')[i].innerText;
                document.getElementsByClassName('more-info-panel-status-modal')[i].innerText = document.getElementsByClassName('more-info-panel-status')[i].innerText;
                document.getElementsByClassName('more-info-panel-square-modal')[i].innerText = document.getElementsByClassName('more-info-panel-square')[i].innerText; 
            }  
        }); 
    }
    else{
        getDataForOne(id, false);
    }
});


//clear slider
function removeChildren(elem) {
    try {
        if (elem.children[0].children[0].children.length != 0) {
            let l = elem.children[0].children[0].children.length;
            for (var i = 0; i < l; i++) {
                $('.slider-for').slick('slickRemove',slideIndex - 1);
                $('.slider-nav').slick('slickRemove',slideIndex - 1);
                if (slideIndex !== 0){
                    slideIndex--;
                }
            }   
        }  
    } catch(e) {
        if (elem.children[1].children[0].children.length != 0) {
            let l = elem.children[1].children[0].children.length;
            for (var i = 0; i < l; i++) {
                $('.slider-for').slick('slickRemove',slideIndex - 1);
                $('.slider-nav').slick('slickRemove',slideIndex - 1);
                if (slideIndex !== 0){
                    slideIndex--;
                }
            }   
        }  
    }
    
}

//clear slider in modal
function removeChildrenModal(elem) {
    try {
        if (elem.children[0].children[0].children.length != 0) {
            let l = elem.children[0].children[0].children.length;
            for (var i = 0; i < l; i++) {
                $('.slider-for-modal').slick('slickRemove',slideIndexModal - 1);
                $('.slider-nav-modal').slick('slickRemove',slideIndexModal - 1);
                if (slideIndexModal !== 0){
                    slideIndexModal--;
                }
            }   
        }  
    } catch(e) {
        if (elem.children[1].children[0].children.length != 0) {
            let l = elem.children[1].children[0].children.length;
            for (var i = 0; i < l; i++) {
                $('.slider-for-modal').slick('slickRemove',slideIndexModal - 1);
                $('.slider-nav-modal').slick('slickRemove',slideIndexModal - 1);
                if (slideIndexModal !== 0){
                    slideIndexModal--;
                }
            }   
        }  
    }
}


//fills modal slider with images
function place_imgs_modal(imgs) {
	if (imgs.length <=3) {
    	$('.slider-nav-modal').slick('slickSetOption', 'centerMode', false, true);
    }
    else{
    	$('.slider-nav').slick('slickSetOption', 'centerMode', true, true);
    }
    let carousel = document.getElementsByClassName('slider-for-modal')[0];
    let carouselCap = document.getElementsByClassName('slider-nav-modal')[0];
    removeChildrenModal(carousel);
    let temp_img;
    if (imgs.length == 1){
        $('.slider-for-modal').slick('slickAdd', '<img src="'+imgs[0]+'">');
        slideIndexModal++;
    }
    else{
        for (var i = 0; i < imgs.length; i++) {
        $('.slider-for-modal').slick('slickAdd', '<img src="'+imgs[i]+'">');
        $('.slider-nav-modal').slick('slickAdd', '<img src="'+imgs[i]+'">');
        slideIndexModal++;
        } 
    }
}

//fills slider with images
function place_imgs(imgs) {
	//print(    	$('.slider-nav').slick('slickGetOption', 'centerMode', false, true););
	if (imgs.length <=3) {
    	$('.slider-nav').slick('slickSetOption', 'centerMode', false, true);
    }
    else{
    	$('.slider-nav').slick('slickSetOption', 'centerMode', true, true);	
    }
    let carousel = document.getElementsByClassName('slider-for')[0];
    let carouselCap = document.getElementsByClassName('slider-nav')[0];
    removeChildren(carousel);
    let temp_img;
    if (imgs.length == 1){
        $('.slider-for').slick('slickAdd', '<img src="'+imgs[0]+'">');
        slideIndex++;
    }

    else{
        for (var i = 0; i < imgs.length; i++) {
        $('.slider-for').slick('slickAdd', '<img src="'+imgs[i]+'">');
        $('.slider-nav').slick('slickAdd', '<img src="'+imgs[i]+'">');
        slideIndex++;
        } 
    }    
}


//get data from server and put it in into -more-info-panel-
function getDataForOne(id, modal, _callback = function(){}){
    jQuery(function($) {
    	//выделение активного офиса.
        for (var i = 0; i < rooms.length; i++) {
            if (rooms[i].classList.contains('active-office')) {
            	rooms[i].classList.remove('active-office');
            }
        }
        document.getElementById(id).classList.add('active-office');
        let title = document.getElementById('more-info-panel-title');
        let price = document.getElementsByClassName('more-info-panel-price');
        let price_all = document.getElementsByClassName('more-info-panel-price-all');
        let square = document.getElementsByClassName('more-info-panel-square');
        let status = document.getElementsByClassName('more-info-panel-status');
        let info = document.getElementById('more-info-panel-info');
        //Запрос к БД
        $.get("/api/" + id).done(function(data) {
            //Проверяем, есть ли объединения
            let union = data['UNION'];
            if (union.length > 0) {
                let imgs = [];
                for (let i = 0; i < union.length; i++) {
                    imgs = imgs.concat(retr_filename(union[i], isMobile));
                }
                imgs = unique(imgs);
                // call place_imgs
                if (!modal) {
                    place_imgs(imgs);
                }else{
                    place_imgs_modal(imgs);
                }          
                title.innerText = data['TITLE'];

                price[0].innerText = "Цена за кв. м:"
                price[1].innerText = Math.round(summary[id]['PRC']) + " руб.";

                square[0].innerText = "Общая площадь:";
                square[1].innerText = summary[id]['SQR'];

                price_all[0].innerText ="Стоимость:";
                price_all[1].innerText = Math.round((summary[id]['PRC'] * summary[id]['SQR'])) + " руб.";
            } else {
                imgs = retr_filename(id, isMobile);
                if (!modal) {
                    place_imgs(imgs);
                } else {
                    place_imgs_modal(imgs);
                }

                title.innerText = data['TITLE'];

                price[0].innerText = "Цена за кв. м:"
                price[1].innerText = Math.round(data['METER_PRICE']) + " руб.";

                square[0].innerText = "Общая площадь:";
                square[1].innerText = data['OFFICE_SQUARE'];

                price_all[0].innerText ="Стоимость:";
                price_all[1].innerText = Math.round(data['FULL_PRICE']) + " руб.";
                
            }
            if (data['INFO'] != "") {
                info.innerText = 'Дополнительная информация: '+data['INFO'];
            } else{
                info.innerText = '';
            }
            let statusText = "Свободен";
            if (data['OFFICE_STATUS'] == "notfree") {
                statusText = "Занят";
            } else if (data['OFFICE_STATUS'] == "none") {
                statusText = "Не сдается";
            } else if (data['OFFICE_STATUS'] == "reserved") {
                statusText = "Зарезервированно";
            }
            status[0].innerText = "Статус: ";
            status[1].innerText = statusText;
            _callback();
        });
    });
}