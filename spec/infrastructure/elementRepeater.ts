import {Repeater} from "./";

export class ElementRepeater extends Repeater {

    constructor(private elem:protractor.ElementFinder, private datasourceName: string, private rangeVariableName: string) {
        super(by.repeater(`${rangeVariableName} in ${datasourceName}`), elem.all(by.repeater(`${rangeVariableName} in ${datasourceName}`)));
    }

    private getColumnName = (fieldName: string) => `${this.rangeVariableName}.${fieldName}`;

    /**
     * @see Repeater
     */
    row(index: number) { 
        return this.elem.element(this.locator.row(index)) 
    };

    /**
     * @see Repeater
     */
    cell(fieldName: string, rowIndex: number) {
        return this.elem.element(this.locator.row(rowIndex).column(this.getColumnName(fieldName)));
    }  
        
    /**
     * @see Repeater
     */
    column(fieldName: string) { 
        return this.elem.all(this.locator.column(this.getColumnName(fieldName))) 
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