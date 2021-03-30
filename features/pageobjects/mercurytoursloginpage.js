class mercuryToursLoginPage {
   
    get inputUsername() { return $("username") }
    // get inputUsername() { return $("//input[contains(@name,'username')]") }
    get inputPassword() { return $("password") }
    get btn() { return $("login") }
    login() {
        this.inputUsername.waitForExist();
        this.inputUsername;
        this.inputPassword;
        this.btnSubmit;
    }
}
module.exports = new mercuryToursLoginPage();