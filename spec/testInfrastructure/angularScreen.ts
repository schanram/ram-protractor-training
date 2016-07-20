export class AngularScreen {
    constructor(private url: string) {};

    /**
     * open the screen in the browser
     */
    open = () => {
        browser.get(this.url);
    }
}