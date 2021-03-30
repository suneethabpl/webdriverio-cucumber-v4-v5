class mercuryToursLoginPage {
    // get inputUsername() { return $("//input[@name='username']") }
    // get inputUsername() { return $$("//*/table/tbody//input") }
    get inputUsername() { return $("username") }
    // get inputUsername() { return $("//input[contains(@name,'username')]") }
    // get inputPassword() { return $("//*/table/tbody//input") }
    // get btnSubmit() { return $$("//*/table/tbody//input") }
    login() {
        // this.inputUsername.waitForExist();
        // const username = this.inputUsername.map(function (element) {
        //     username.setValue("mercury");
        // })
        // const password = this.inputPassword.map(function (element) {
        //     password.setValue("mercury)")
        // })
        // const btn = this.btnSubmit.map(function (element) {
        //     btn.click();
        // })
        // this.inputUsername;
        // this.inputPassword;
        // this.btnSubmit;
    }
}
module.exports = new mercuryToursLoginPage();