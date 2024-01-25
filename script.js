function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function undercursor(element) {
    element.classList.add('undercursor');
  }
  
  function cursorleft(element) {
    element.classList.remove('undercursor')
  }
  class messages{
      constructor(name,mobile,message){
        this.name=name;
        this.mobile=mobile;
        this.message=message;
      }
  }
  let msgs =[];
  function submit(nme,mbl,msg){
      let a= new messages(nme,mbl,msg);
        msgs.push(a);
        alert("message sent");
  }
