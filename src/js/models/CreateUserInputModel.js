export class CreateUserInputModel {
  constructor(login, email, password) {
    this.login = login;
    this.email = email;
    this.password = password;
  }
}
export default CreateUserInputModel;