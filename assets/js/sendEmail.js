function sendMail(contactForm){

emailjs.send("service_lml46fl","template_g5jid09",{
    from_name: contactForm.name.value,
    holiday_type: contactForm.holidaytype.value,
    from_email: contactForm.emailaddress.value,
}).then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

