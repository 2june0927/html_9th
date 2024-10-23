window.onload = function(){
    document.querySelector(".btn_mo_gnb").addEventListener("click",function(e){
        e.preventDefault()
        document.querySelector("nav.mo").classList.add("on")
        return false
    })
    document.querySelector(".btn_close").addEventListener("click",function(e){
        e.preventDefault()
        document.querySelector("nav.mo").classList.remove("on")
    })
}
