function contact() {
    event.preventDefault(event);
    // emailjs
    //     .sendForm(
    //         event.target
    //         "DTAOKfmzhLP-5xspo"
    //     ).then(() => {
    //         console.log('This worked')
    //     })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ".modal__overlay--visible"
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += ".modal__overlay--visible"
        console.log('It worked 1')
    }, 1000);

}


