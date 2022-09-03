class Validator {
    constructor (form) {
        this.patterns = {
            name: /^[a-zа-яё]+$/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i
        };
        this.errors = {
            name: 'Имя должно содержать только буквы',
            phone: 'Телефон долженб быть записан в виде +7(123)456-78-90',
            email: 'e-mail должен быть name@mail.com\ru'
        };
        this.errorClass = 'error-msg';
        this.form = form;
        this.valid = false;
        this._validateForm();
    }
    validate(regexp, value){
        regexp.test(value)
    }
    _validateForm(){
        let errors = [...document.getElementById(this.form).querySelectorAll(`.${this.errorClass}`)];
        for (let error of errors) {
            error.remove();
        }
        let formFields = [...document.getElementById(this.form).getElementsByTagName('input')];
        for (let field of formFields) {
            this._validateForm(field);
    }
    if (![...document.getElementById(this.form).querySelectorAll('.invalid')].length){
        this.valid = true;
    }
}
_validate(field){
    if(this.patterns[field.name]){
        if(!this.patterns[field.name].test(field.value)){
            field.classList.add('invalid');
            this._addErrorMsg(field);
            this._watchField(field);
        }
    }
}
_addErrorMsg(field){
    let error= `<div class="${this.errorClass}">${this.errors[field.name]}</div> `;
    field.parentNode.insertAdjacentHTML('beforeend', error);
}
_watchField(field){
    field.addEventListener('input', () => {
        let error = field.parentNode.querySelector(`.${thiserrorClass}`);
        if(this.patterns[field.name].test(field.value)) {
            field.classList.remove('invalid');
            field.classList.add('valid');
            if (error) {
                error.remove();
            }
        } else {
            field.classList.remove('valid');
            field.classList.add('invalid');
            if (!error){
                this._addErrorMsg(field);
            }
        }
    })
}
}

new Validator();