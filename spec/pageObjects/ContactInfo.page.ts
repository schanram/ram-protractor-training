import {AngularScreen} from "../testInfrastructure"

export class ContactInfo extends AngularScreen {
    
    name = element(by.binding('ctrl.displayUser.name'));
    email = element(by.binding('ctrl.displayUser.email'));
    phone = element(by.binding('ctrl.displayUser.name')); 
    nameInput = element(by.model('ctrl.user.name'));
    emailInput = element(by.model('ctrl.user.email'));
    phoneInput = element(by.model('ctrl.user.phone'));
    saveBtn = element(by.buttonText("Save"));

    constructor() {
        super(browser.baseUrl + "#/exercise1");
        this.open();
    }

    // FA - we should not have getter or setters for just to set the private variables.
    // get name() {
    //     return this._name;
    // }
}   
