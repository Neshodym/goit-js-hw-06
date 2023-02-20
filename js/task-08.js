const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmint);

function onFormSubmint(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (formRef.email.value === '' || formRef.password.value === '') {
        alert('All fields has to be filled');
    }
    else {
        const formData = {
            email, password,
        }
        console.log(formData);
        event.currentTarget.reset();
    }
};
