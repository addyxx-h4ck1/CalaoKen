// function googleTranslateElementInit() {
//   setCookie('googtrans', '/en/fr', 1)
//   new google.translate.TranslateElement(
//     {
//       pageLanguage: 'ES',
//       layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
//     },
//     'google_translate_element'
//   )
// }

let translate = document.querySelector('.translate')
translate.addEventListener('click', () => {
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {
        pageLanguage: 'fr',
        includedLanguages: 'en,fr', // Add more languages as needed
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      'google_translate_element'
    )
  }
  googleTranslateElementInit()
})
