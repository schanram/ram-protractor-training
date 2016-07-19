export class UpdateContactPage {
    displayName = element(by.binding('ctrl.displayUser.name'));
    name = element(by.model('ctrl.user.name'));

    displayEmail = element(by.binding('ctrl.displayUser.email')); 
    email = element(by.model('ctrl.user.email'));

    displayPhone = element(by.binding('ctrl.displayUser.phone')); 
    phone = element(by.model('ctrl.user.phone'));

    private saveBtn = element(by.id('save-button'));

    constructor() {
    }

    getDisplayName(): webdriver.promise.Promise<string> {
        return this.displayName.getText();
    }

    getName(): webdriver.promise.Promise<string> {
        return this.name.getAttribute('value');
    }

    setName(name: string) {
        this.name.sendKeys(name);
    }

    getDisplayEmail(): webdriver.promise.Promise<string> {
        return this.displayEmail.getText();
    }

    getEmail(): webdriver.promise.Promise<string> {
        return this.email.getAttribute('value');
    }

    setEmail(name: string) {
        this.email.sendKeys(name);
    }

    getDisplayPhone(): webdriver.promise.Promise<string> {
        return this.displayPhone.getText();
    }

    getPhone(): webdriver.promise.Promise<string> {
        return this.phone.getAttribute('value');
    }

    setPhone(phoneNumber: string) {
        this.phone.sendKeys(phoneNumber);
    }

    save() {
        this.saveBtn.click();
    }
}
