(function(){
    const mail = document.getElementById("email");

    const url = new URL(location.href);
    const params = url.searchParams;

    const get_mail = params.get("email");

    const slice = get_mail.split('@');
    const un = slice[0];
    const encoded = un.slice(0, un.length * 0.3) + "*".repeat(un.length * 0.7);
    mail.textContent = encoded + '@' + slice[1];

})()