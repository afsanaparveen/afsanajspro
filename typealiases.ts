/*Type Aliases allow defining types with a custom name (an Alias).

Type Aliases can be used for primitives like string or more complex types such as objects and arrays:**/
type PhoneYear = number
type PhoneType = string
type PhoneModel = string
type Phone = {
  year: PhoneYear,
  type: PhoneType,
  model: PhoneModel
}

const phoneYear: PhoneYear = 2001
const phoneType: PhoneType = "Toyota"
const phoneModel: PhoneModel = "Corolla"
const phone: Phone = {
  year: phoneYear,
  type: phoneType,
  model: phoneModel
};
console.log(phone);
