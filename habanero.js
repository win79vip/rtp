var x = [213, 20, 21, 385, 317, 564, 399, 475, 191, 219, 0, 21, 23, 543, 24, 504, 621, 180]; 
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
            
            if (i == 1 || i == 5 || i == 9) 
            { 
                xx = xx % 27; xx += 65; 
            } 
            else 
            { 
                xx = xx % 82; 
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