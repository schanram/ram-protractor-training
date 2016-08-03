import {Repeater} from "./";

export class ScreenRepeater extends Repeater {

    constructor(private datasourceName: string, private rangeVariableName: string) {        
        super(by.repeater(`${rangeVariableName} in ${datasourceName}`), element.all(by.repeater(`${rangeVariableName} in ${datasourceName}`)));
    }

    private getColumnName = (fieldName: string) => `${this.rangeVariableName}.${fieldName}`;

    /**
     * @see Repeater
     */
    row(index: number) { 
        return element(this.locator.row(index)) 

        // Returns the DIV for the second cat.
        // var secondCat = element(by.repeater('cat in pets').row(1));
    };

    /**
     * @see IRepeater
     */
    cell(fieldName: string, rowIndex: number) {
        return element(this.locator.row(rowIndex).column(this.getColumnName(fieldName)));

        // Returns the SPAN for the first cat's name.
        // var firstCatName = element(by.repeater('cat in pets').row(0).column('cat.name'));
    }  
    
    /**
     * @see Repeater
     */
    column(fieldName: string) { 
        return element.all(this.locator.column(this.getColumnName(fieldName))) 

        // Returns a promise that resolves to an array of WebElements containing
        // all the elements with a binding to the book's name.
        // var divs = element.all(by.repeater('book in library').column('book.name'));
    };
        
    /**
     * @see Repeater
     */
    columnValues(fieldName: string) { 
        return this.column(fieldName).getText();
    }

    /**
     * @see Repeater
     */
    columnElements(tagName: string): protractor.ElementArrayFinder {
        return this.rows.filter((el, index) => el.getTagName().then(tag => tag === tagName)); 
    }
}