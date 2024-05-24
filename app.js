setInterval(function(){

    let date = new Date();
    let getHour = date.getHours();
    let getMin = date.getMinutes();
    let getSecond = date.getSeconds();

    let hour = document.querySelector('.hour');
    let min = document.querySelector('.minute');
    let sec = document.querySelector('.second');
    let ampm = document.querySelector('.ampm');

    if (getHour >= 12){
        ampm.innerHTML = "PM";
    }else{
        ampm.innerHTML = "AM";
    };

    if(getHour > 12){
        let finalHour = getHour - 12;

        if (finalHour < 10){
            finalHour = '0' + finalHour;
           
        }

        hour.innerHTML = finalHour;
    }else{
        finalHour = getHour;
        hour.innerHTML = finalHour;
    };
    
    if (getMin < 10){
        getMin = '0' + getMin;
    }
    
    if (getSecond < 10){
        getSecond = '0' + getSecond;
    }
    min.innerHTML = getMin;
    sec.innerHTML = getSecond;
});