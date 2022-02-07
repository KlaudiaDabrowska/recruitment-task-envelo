// const {
//     isFormValid
// } = require("./formValidation")

// const jsdom = require('jsdom');

// describe('form validation', () => {

//     test('is invalid when no phone number given', () => {
//         const documentHTML = `
// <form class="form">
// <label for="phone" class="first-label">Numer telefonu: <p class="required">(*wymagane)</p></label>
// <input type="number" id="phone" name="phone" class="first-input" required>
// <div class="phone-error"></div>
// <label for="code" class="second-label">Kod odbioru: <p class="required">(*wymagane)</p></label>
// <input type="number" id="code" name="code" class="second-input" required>
// <div class="code-error"></div>
// <button type="submit" class="first-submit">Odbierz paczkę </button>
// </form>`;
//         global.document = jsdom.jsdom(documentHTML);

//         expect(isFormValid()).toEqual(false)
//     })
// })
