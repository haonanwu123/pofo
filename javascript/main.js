let flag = true,
             imgH,
             imgW,
             img = document.getElementsByClassName("project-img")[2];
img.onclick = function() {
    imgH = img.height;
    imgW = img.width;
    if(flag){
        flag = false;
        img.height = imgH * 2;
        img.width = imgW * 2;
    }else{
        flag = true;
        img.height = imgH / 2;
        img.width = imgW / 2;
    }
}