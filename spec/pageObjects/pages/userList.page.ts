import {AngularScreen} from "../../infrastructure"

export class UserListPage extends AngularScreen {
    users = element.all(by.repeater('row in ctrl.userList'));
    emails = element.all(by.repeater('row in ctrl.userList').column('email'));

    constructor() {
        super(browser.baseUrl + "#/exercise2");
        this.open();
    }

    findEmail(emailToFind: string): protractor.ElementArrayFinder {
        return this.emails.filter((element: protractor.ElementFinder) => element.getText().then((text: string) => text === emailToFind));
    }
}
