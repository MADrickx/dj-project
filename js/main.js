var w = window.innerWidth;
        var h = window.innerHeight;
        var input1 = document.getElementById("c-radio1");
        var input2 = document.getElementById("c-radio2");
        var input3 = document.getElementById("c-radio3");
        var itemsArr = document.getElementsByClassName("c-main-content-items");
        var march = document.getElementById('march');
        var april = document.getElementById('april');
        var may = document.getElementById('may');
        const texts = document.querySelectorAll('.c-main-schedule-content-box-nav-txt-list');
        var textsArr = Array.from(texts);
        const months = document.querySelectorAll('.c-main-schedule-content-box-nav-list-item');
        var monthsArr = Array.from(months);
        var radio1 = document.getElementById("radio1");
        var radio2 = document.getElementById("radio2");
        var radio3 = document.getElementById("radio3");
        var radio4 = document.getElementById("radio4");
        var radio5 = document.getElementById("radio5");
        var p1 = document.getElementById("p1");
        var p2 = document.getElementById("p2");
        var p3 = document.getElementById("p3");
        var p4 = document.getElementById("p4");
        var p5 = document.getElementById("p5");
        var vLines = document.querySelectorAll('.vertical-line');
        if (w<=768){
            window.addEventListener("click", ev => {
            if (input1.checked){
                itemsArr[0].classList.remove("hidden")
                itemsArr[1].classList.add("hidden")
                itemsArr[2].classList.add("hidden")
            } else if (input2.checked){
                itemsArr[0].classList.add("hidden")
                itemsArr[1].classList.remove("hidden")
                itemsArr[2].classList.add("hidden")
            } else {
                itemsArr[0].classList.add("hidden")
                itemsArr[1].classList.add("hidden")
                itemsArr[2].classList.remove("hidden")
            }
        });
        } else if (w<=960){
            window.addEventListener("click", ev => {
            if (input1.checked){
                itemsArr[0].classList.remove("hidden")
                itemsArr[1].classList.remove("hidden")
                itemsArr[2].classList.add("hidden")
            } else {
                itemsArr[0].classList.add("hidden")
                itemsArr[1].classList.remove("hidden")
                itemsArr[2].classList.remove("hidden")
            }
        });
        } else {
            itemsArr[0].classList.remove("hidden")
            itemsArr[1].classList.remove("hidden")
            itemsArr[2].classList.remove("hidden")
        }

        function scheduleActive(e){
            months.forEach((month) => {
            month.addEventListener('click', () => {
                months.forEach(l => l.classList.remove('schedule-active'));
                month.classList.add('schedule-active');
                });
            });
            var target = e.target;
            var id = target.id;
            if(id === 'li1'){
                march.classList.remove('hidden');
                april.classList.add('hidden');
                may.classList.add('hidden')
            } else if(id === 'li2'){
                march.classList.add('hidden');
                april.classList.remove('hidden');
                may.classList.add('hidden')
            } else if(id === 'li3'){
                march.classList.add('hidden');
                april.classList.add('hidden');
                may.classList.remove('hidden')
            } else {
                return;
            }
        }

        function checkWindowSize(){
            var w = window.innerWidth;
            var h = window.innerHeight;
            if (w<=768){
                itemsArr[0].classList.remove("hidden")
                itemsArr[1].classList.add("hidden")
                itemsArr[2].classList.add("hidden")
            } else if (w<=960 && w>768){
                itemsArr[0].classList.remove("hidden")
                itemsArr[1].classList.remove("hidden")
                itemsArr[2].classList.add("hidden")
            } else{
                itemsArr[0].classList.remove("hidden")
                itemsArr[1].classList.remove("hidden")
                itemsArr[2].classList.remove("hidden")
            }
        }
        
        function appearP(){
            if (radio1.checked){
                p1.classList.remove("hidden");
                p2.classList.add("hidden");
                p3.classList.add("hidden");
                p4.classList.add("hidden");
                p5.classList.add("hidden");
                vLines[0].classList.add("vertical-line-")
                vLines[1].classList.remove("vertical-line-")
                vLines[2].classList.remove("vertical-line-")
                vLines[3].classList.remove("vertical-line-")
            } else if (radio2.checked){
                p1.classList.add("hidden");
                p2.classList.remove("hidden");
                p3.classList.add("hidden");
                p4.classList.add("hidden");
                p5.classList.add("hidden");
                vLines[0].classList.add("vertical-line-smol")
                vLines[1].classList.add("vertical-line-")
                vLines[2].classList.remove("vertical-line-")
                vLines[3].classList.remove("vertical-line-")
            } else if (radio3.checked){
                p1.classList.add("hidden");
                p2.classList.add("hidden");
                p3.classList.remove("hidden");
                p4.classList.add("hidden");
                p5.classList.add("hidden");
                vLines[0].classList.add("vertical-line-smol")
                vLines[1].classList.add("vertical-line-smol2")
                vLines[2].classList.add("vertical-line-")
                vLines[3].classList.remove("vertical-line-")
            } else if (radio4.checked){
                p1.classList.add("hidden");
                p2.classList.add("hidden");
                p3.classList.add("hidden");
                p4.classList.remove("hidden");
                p5.classList.add("hidden");
                vLines[0].classList.add("vertical-line-smol")
                vLines[1].classList.add("vertical-line-smol2")
                vLines[2].classList.add("vertical-line-smol")
                vLines[3].classList.add("vertical-line-")
            } else {
                p1.classList.add("hidden");
                p2.classList.add("hidden");
                p3.classList.add("hidden");
                p4.classList.add("hidden");
                p5.classList.remove("hidden");
                vLines[0].classList.remove("vertical-line-")
                vLines[1].classList.remove("vertical-line-")
                vLines[2].classList.remove("vertical-line-")
                vLines[3].classList.remove("vertical-line-")
            }
        }

        function play(){
            var remaining = document.getElementById("remaining").innerHTML;
            var audio = new Audio("../assets/John_Williams_Cantina_Band_Ringtone_(by Fringster.com).mp3");
            var temps = 0.1;
            var i;
            document.getElementById("elasped").innerHTML;
            audio.oncanplaythrough = function(){
                audio.play();
                }
                audio.loop = true;
                audio.onended = function(){
                audio.play();

            }
            for(i=0;i<267;i++){
                var temps;
                setTimeout(function(){ 
                    temps =+ 0.01;
                    if (temps === remaining){
                        return;
                    };
                    document.getElementById("elasped").innerHTML = temps;
                    i++
                 }, 1000);
            }
        }   

        window.addEventListener('resize', checkWindowSize);
        window.addEventListener('click', scheduleActive);
        window.addEventListener('click', appearP);
        window.addEventListener('click', play);