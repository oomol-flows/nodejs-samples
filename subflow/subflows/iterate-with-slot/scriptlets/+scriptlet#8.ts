//#region generated meta
type Inputs = {
    item: any;
    length: number;
    array: any[];
};
type Outputs = {
    array: any;
    result: any;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    const {item, length, array} = params;
    array.push(item); 
    if (array.length < length) {
        return {array}
    } else {
        return {result: array }
    }
};
