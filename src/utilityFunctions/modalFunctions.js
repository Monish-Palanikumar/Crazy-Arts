const modalFunctions = {
    closeModal:()=>{
        var modal=document.getElementById('modal_')
        //modal.style.removeProperty('animation')
        modal.style.animation='closeModal 1s'
        modal.style.display='none'
    },
    openModal:(image)=>{
        var modal=document.getElementById('modal_')
        var img=document.getElementById('modalImage')
        img.src=image
        console.log(img)
        modal.style.animation="openModal 1s"
        modal.style.display='block'
        window.addEventListener('click',modalFunctions.outsideClickCloseModal)
    },
    outsideClickCloseModal:(e)=>{
        var modal=document.getElementById('modal_')
        if(e.target === modal)
        {
            modal.style.display='none'
        }
    }
}

export default modalFunctions