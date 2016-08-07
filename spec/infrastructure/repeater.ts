export abstract class Repeater {
    
    constructor(public locator: protractor.RepeaterLocator, public rows:protractor.ElementArrayFinder) {}

    /**
     * Returns the element used to render the specified row
     */
    abstract row(index: number): protractor.ElementFinder;

    /**
     * Returns the single screen elements used to render a field within a specified row
     */
    abstract cell(fieldName: string, rowIndex: number): protractor.ElementFinder;
    
    /**
     * Returns the screen elements used to render the field specified for all rows in the angular repeater
     */
    abstract column(fieldName: string): protractor.ElementArrayFinder;
        
    /**
     * Returns the value of the specified field for all rows in the angular repeater
     */
    abstract columnValues(fieldName: string): webdriver.promise.Promise<string[]>;

    /**
     * Returns the array of elements that matches the specified tag name.
     */
    abstract columnElements(tagName: string): protractor.ElementArrayFinder;

    /**
     * Returns the first matching element for the ElementArrayFinder.
     */
    first = () => this.rows.first();
    
    /**
     * Returns the last matching element for the ElementArrayFinder. 
     */
    last = () => this.rows.last();
    
    /**
     * Returns the number of elements represented by the ElementArrayFinder.
     */
    count = () => this.rows.count();
}