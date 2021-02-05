class Modal{
    constructor(message){
        this.message=message
        this.element=this._initialize()
    }
    _initialize(){
        const container=e('div',e('p',this.message),button('OK',this.onClose.bind(this)))
        container.classList.add('modal')
        return container
    }
    onClose(){
        this.element.remove()
        document.getElementById('message').style.display="block"
    }
}
document.getElementById('createBtn').addEventListener('click',()=>{
    const main=document.querySelector('main')
    const modal=new Modal(document.getElementById('message').value)
    document.getElementById('message').style.display="none"
    document.getElementById('message').value=""
    main.appendChild(modal.element)
})
function button(label,callback){
    const elemnt=e('button',label)
    elemnt.addEventListener('click',callback)
    return elemnt
}
function e(type,...content){
    const result=document.createElement(type)
    content.forEach(el=>{
      if(typeof el=='string'){
          const node=document.createTextNode(el)
          result.appendChild(node)
      }else{
          result.appendChild(el)
      }
    })
    return result
}