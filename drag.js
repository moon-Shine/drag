/*
    功能：区域内拖拽
    参数：
        obj：滚动区域
        obj1：在区域内滚动的盒子
    作者：moon-shine
    时间：2015-12-20
*/
function drag(obj,obj1){
    obj.onmousedown=function(e){
        var ev=e || window.event;
        var disY=ev.clientY-obj.offsetTop;//鼠标距离盒子边框的距离
        var disX=ev.clientX-obj.offsetLeft;//鼠标距离盒子边框的距离
        obj.style.background="#333";

        //alert(disY)
        document.onmousemove=function(e){
            var e=e || window.event;
            dish=e.clientY-disY;//要移动的距离
            disw=e.clientX-disX;//要移动的距离

            maxDisH=obj1.offsetHeight-obj.offsetHeight;
            console.log(maxDisH)
            maxDisw=obj1.offsetWidth-obj.offsetWidth;
            if(dish<0) dish=0;
            if(dish>maxDisH) dish=maxDisH;
            if(disw<0) disw=0;
            if(disw>maxDisw) disw=maxDisw;

            obj.style.top=dish+"px";
            obj.style.left=disw+"px";

        }
        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
            obj.style.background="#5f5e5e";
        }
    }
}