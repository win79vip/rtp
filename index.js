var x = [846, 277, 1, 776, 103, 336, 802, 321, 435, 741, 662, 846, 21, 385, 317, 564, 399, 336, 856, 602, 217, 893, 581, 274, 0, 15, 277, 1, 475, 621, 776, 103, 321, 435, 741, 662, 109, 602, 217, 893, 581, 274, 856, 126, 166, 368, 391, 492, 142, 710, 503, 850, 996, 363, 588, 633, 293, 936, 960, 268, 491, 514, 991, 914, 962, 794, 61, 830, 198, 843, 187, 10, 409, 848, 583, 885, 629, 414, 670, 60, 349, 874, 753, 232, 527, 3, 27, 721, 350, 374, 917, 41, 833, 948, 776, 103, 336, 802, 21, 385, 317, 564, 399, 475, 621, 582, 709, 239, 341, 182, 191, 48, 32, 908, 540, 144, 110, 632, 141, 729, 522, 215, 567, 812, 12, 145, 54, 32, 342, 123, 21, 214, 321, 32, 34, 211, 543, 32, 40, 423, 21, 22, 253, 121, 122, 123, 124, 213, 215, 22, 211, 543, 453, 64, 43, 402, 200, 929, 816, 454, 424, 587, 72, 488, 269, 238, 958, 772, 185, 959, 685, 966, 889, 522, 215, 567, 812, 12, 145, 54, 32, 342, 123, 21, 403, 80, 533, 96, 136, 122, 969, 314, 323, 722, 457, 379, 838, 909, 809, 626, 704, 767, 90, 683, 447, 281, 357, 438, 825, 366, 991, 914, 962, 794, 61, 414, 670, 60, 349, 874, 753, 232, 527, 3, 27, 721, 350, 374, 917, 218]; 

for (let i = 1; i <= 226; i++) 
{
    const d = new Date(); 
    var date = d.getUTCDate(); 
    var day = d.getUTCDay() + 1; 
    var year = d.getUTCFullYear(); 
    var month = d.getUTCMonth() + 1; 
    var hour = d.getUTCHours(); 
    var min = d.getMinutes(); 
    
    if (min < 30) 
    { 
        min = 1; 
    } 
    else 
    { 
        min = 2; 
    }
    
    var xx = day + year * month * date;
    xx = Math.pow(xx, hour * min); 
    xx = xx * x[i]; 
    if (i == 5 || i == 6 || i == 2 || i == 114 || i == 73 || i == 41 || i == 4 || i == 92 || i == 134 || i == 10 || i == 78 || i == 66) 
    { 
        xx = xx % 27; xx += 65; 
    } 
    else 
    { 
        xx = xx % 83; 
        xx += 8; 
    }
    
    const as = "percent-bar-" + i; 
    const asd = "percent-txt-" + i; 
    var percentTxt = document.getElementById("percent-txt-" + i); 
    var bar = document.getElementById("percent-bar-" + i); 
    const bartext = document.getElementById("card-title" + i); 
    percentTxt.innerHTML = xx + "%"; 
    $("#percent-bar-" + i).attr("aria-valuenow", xx).css("width", xx + "%"); 
    
    if (xx < 30) 
    { 
        bar.classList.add("red"); 
    } 
    else if (xx > 70) 
    { 
        bar.classList.add("green"); 
    } 
    else 
    { 
        bar.classList.add("yellow"); 
    }
}