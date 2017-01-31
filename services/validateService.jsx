class ValidateService{
	
	validate(value, methods, isSubmitted){
		try{
			if(isSubmitted){
				methods.forEach(method=>{this[method](value); console.log('mta');})
			}
		} catch(e) {
			return  e.message;
		}
		return '';
	}

	notEmpty(value){
		if (value.trim() === '') {
			throw new Error('Value should not be empty');
		}
	}

	email(email){
	    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    if(!re.test(email)){
	    	throw new Error('Email is not valid');
	    }
	}

	password(password){
		let allLetters = /^[a-zA-Z]+$/;
		let letter = /[a-zA-Z]/;
		let number = /[0-9]/;
		if (password.length < 6 || !letter.test(password) || !number.test(password)) {
        	throw new Error ('Invalid password');
    	}
	}
}

export default new ValidateService();
