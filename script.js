// Function to scroll to a particular secion.
//     used in navbar 
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

// To record the message sent by user 
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
