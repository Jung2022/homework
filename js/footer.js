setInterval( function () {
    
    let today = new Date;
    let week = today.getDay();
    let strTime  = today.toLocaleTimeString();
    let strDate  = today.toLocaleDateString();

    switch(week) {
        case 0:
            day="일요일"; break;
        case 1:
            day="월요일"; break;
        case 2:
            day="화요일"; break;
        case 3:
            day="수요일"; break;
        case 4:
            day="목요일"; break;
        case 5:
            day="금요일"; break;
        case 6:
            day="토요일"; break;
        default:
            day="없는 요일";
    } //switch

        let footer = document.querySelector('footer')
        footer.innerHTML = '<p> 오늘은 ' + strDate + ' ' + day + '입니다.</p>' + '<p> 현재 시각은 ' + strTime + '입니다</p>';
    } , 1000);//setinterval
