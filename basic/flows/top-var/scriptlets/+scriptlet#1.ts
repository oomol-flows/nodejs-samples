//#region generated meta
type Inputs = {
    value: any;
};
type Outputs = {
    output: any;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

let a = 0;

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    while (a < 5) {
        console.log(a);
        a++;
    }
    return {output: a}
};
