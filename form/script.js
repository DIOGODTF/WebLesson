let B7Validator = {
    handleSubmit:(event)=>{
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');
        
        for( let i=0;i<inputs.length;i++){
            let input = inputs[i];
            let check = B7Validator.checkInput(input);
            if (check !== true){
                send = false;
            }
        }
        
        if (send) {
            form.submit();
        }
        
    },
    checkInput:(input)=>{
        let rules = input.getAttibute('data-rules');
        if (rules !== null ){

        }
        return true;
    }
};
let form = document.querySelector('.b7validator');
form.addEventListener('submit', );