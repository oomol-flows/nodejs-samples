
//#region generated meta
type Inputs = {
    number: any[];
    en: any[];
};
type Outputs = {
    output: any;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    const { number, en } = params;

    if (!arraysEqual(number, ["1", "2", "3"])) {
        throw new Error("number is not ['1', '2', '3']")
    }

    if (!arraysEqual(en, ["one", "two", "three"])) {
        throw new Error("en is not ['one', 'two', 'three']")
    }


    return { output: "output_value" };
};

function arraysEqual(arr1, arr2) {
    // Check if the lengths are equal
    if (arr1.length !== arr2.length) return false;
    // Check each element
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

