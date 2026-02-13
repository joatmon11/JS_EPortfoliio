function contact(event) {
    event.preventDefault(event);
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector ('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'
    emailjs
        .sendForm(
            'service_tr0zxqa',
            'template_gn77da9',
            event.target,
            'DTAOKfmzhLP-5xspo'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList += ' modal__overlay--visible'
        }).catch(() => {
            alert(
                "The email service is temporarily unavailiable.  Please contact me directly at joat.mon.11@gmail.com "
            )
        })
}


