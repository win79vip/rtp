var x = [281, 357, 438, 825, 366, 893, 991, 914, 962, 794, 61, 414, 670, 0, 581, 274, 321, 435, 741, 662, 846, 277, 1, 776, 103, 336, 856, 602, 217, 893, 626, 704, 767, 90, 683, 447, 60, 349, 874, 753, 232, 527, 3, 27, 721, 350, 374, 917, 218]; 
        for (let i = 1; i <= 226; i++) {
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
            
            if (i == 10 || i == 1 || i == 14 || i == 2) 
            { 
                xx = xx % 27; xx += 65; 
            } 
            else 
            { 
                xx = xx % 81; 
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