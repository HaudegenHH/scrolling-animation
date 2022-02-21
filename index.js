window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('scroll', () => {
  
    let content = document.querySelector('.row')
    let contentPos = content.getBoundingClientRect().top
    let screenPos = window.innerHeight / 1.5
    
    if (contentPos < screenPos){
      content.classList.add('active')
    } else {
      content.classList.remove('active')
    }
    
  })  
})