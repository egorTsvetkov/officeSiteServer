
function draw_unions(unions) {
    let map_elements = document.getElementsByClassName('offices');
    let real_unions = [];
    //Довавляем классы объединения каждому элемену.
    
    for (let i = 0; i < map_elements.length; i++) {
        let union = unions['union-' + i];
        if (union != null) {
            for (let j = 0; j < map_elements.length; j++) {
                if (union.includes(map_elements[j].getAttribute('id'))) {
                    map_elements[j].classList.add('united-' + i);
                }
            }
        }
    }

    //console.log(map_elements);
    //убираем повторы.
    let required_class;
    for (let j = 0; j < map_elements.length; j++) {
        required_class = map_elements[j].classList.item(1);
        //console.log(required_class + ' ' + j);
        if (required_class != null) {
            //console.log('Yes, it is not null: ' + j)
            if (!real_unions.includes(required_class)) {
                //console.log('Push class to real_unions')
                real_unions.push(required_class);   
            }
            //console.log(map_elements[j].classList)
            map_elements[j].setAttribute('class', 'offices ' + required_class)
            //console.log('Changed classList of ' + map_elements[j]);
            //console.log(map_elements[j].classList)

        }
    }
    
    
    
    // Подсветка
    for (let i = 0; i < real_unions.length; i++) {
        $('.' + real_unions[i]).hover(function() { // Mouse over
            $(this).siblings().stop().fadeTo(150, 1);
            $(this).siblings('.' + real_unions[i]).stop().fadeTo(150, 0.5);

        }, function() { // Mouse out
            $(this).siblings().stop().fadeTo(150, 1);
        });
    }
    
    return real_unions;
}


function collect_ids(unions_) {
    let map_elements = document.getElementsByTagName('path');
    let unions_ids = {};
    let tmp = [];

    for (let i = 0; i < unions_.length; i++) {
        for (let j = 0; j < map_elements.legth; j++) {
            if ($(map_elements[j]).hasClass(unions_[i])) {
                tmp.push(map_elements[j]);
            }
        }
        unions_ids[unions_[i]] = tmp;
        tmp = [];
    }
    return unions_ids;
}