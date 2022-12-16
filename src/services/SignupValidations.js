import Validations from "./Validations"

export default class SignupValidations {
  constructor(email, password) {
    this.email = email
    this.password = password
  }

  checkValidations() {
    let errors = []
    if (!Validations.checkEmail(this.email)) {
      errors["email"] = "Invalid Email"
    }

    if (!Validations.minLength(this.password, 6)) {
      errors["password"] = "password should be of 6 characters"
    }

    return errors
  }

  static getErrorMessage(errorCode) {
    switch (errorCode) {
      case "EMAIL_EXISTS":
        return "Email already exist."
      case "EMAIL_NOT_FOUND":
        return "Email not found."
      case "INVALID_PASSWORD":
        return "Invalid Password"
      default:
        return "Unexpected error please try again."
    }
  }
}
