function init(){
    var btnagregar = document.getElementById("add");
    var btneliminar = document.getElementById("remove");
    var hElement = document.getElementById("head");
    var clsName;
    alert(hElement + " | " + clsName);

    if(btnagregar.addEventListener){
        btnagregar.addEventListener("click", function(){
            clsName =document.getElementById("classes").value;
                if(clsName=="formal"){
                    hElement.classList.add('formal');
                }
                else if(clsName=="letterpress"){
                    hElement.classList.add('letterpress');
                }
                else if("offset"){
                    hElement.classList.add('offset');
                }
        }, false);
    }
    else if(btnagregar.attachEvent){
        btnagregar.attachEvent("onclick", function(){
            clsName =document.getElementById("classes").value;
            if(clsName=="formal"){
                hElement.classList.add('formal');
            }else if(clsName=="letterpress"){
                hElement.classList.add('letterpress');
            }else if("offset"){
                hElement.classList.add('offset');
            }
    });
    }

    if(btneliminar.addEventListener){
        btneliminar.addEventListener("click", function(){
        clsName =document.getElementById("classes").value;
        if(clsName=="formal"){
            hElement.classList.remove('formal');
        }
        else if(clsName=="letterpress"){
            hElement.classList.remove('letterpress');
        }
        else if("offset"){
            hElement.classList.remove('offset');
        }
    }, false);
    }
    else if(btneliminar.attachEvent){
        btneliminar.attachEvent("onclick", function(){
        clsName =document.getElementById("classes").value;
        if(clsName=="formal"){
            hElement.classList.remove('formal');
        }
        else if(clsName=="letterpress"){
             hElement.classList.remove('letterpress');
        }
        else if("offset"){
            hElement.classList.remove('offset');
                }
            });
        }
   }
   if(window.addEventListener){
        window.addEventListener("load", init, false);
   }
   else if(window.attachEvent){
        window.attachEvent("onload", init);
   }
