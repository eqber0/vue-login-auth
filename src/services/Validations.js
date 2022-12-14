export default class Validations {
  static checkEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true
    }
    return false
  }

  static minLength(name, minLength) {
    if (name.length < minLength) {
      return false
    }
    return true
  }
}
