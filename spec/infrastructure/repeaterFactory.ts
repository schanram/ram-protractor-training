import {Repeater, ScreenRepeater, ElementRepeater} from "./";

export class RepeaterFactory {
    static getRepeater(repeaterType:string, datasourceName:string, rangeVariableName:string, elem:protractor.ElementFinder = null):Repeater {
        if(repeaterType === SCREEN_REPEATER) {
            return new ScreenRepeater(datasourceName, rangeVariableName);
        } else if(repeaterType === ELEMENT_REPEATER) {
            return new ElementRepeater(elem, datasourceName, rangeVariableName);
        }
    }
}

const SCREEN_REPEATER = "screenRepeater";
const ELEMENT_REPEATER = "elementRepeater";