
    function googleTranslateElementInit() {
        setCookie('googtrans', '/en/fr', 1);
        new google.translate.TranslateElement({ pageLanguage: 'ES', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
    }
    function setCookie(key, value, expiry) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    } 
