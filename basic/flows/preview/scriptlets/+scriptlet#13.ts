import type { Context } from "@oomol/types/oocana";
//#region generated meta
type Inputs = {
    input: any;
    output: any;
    input1: any;
    input2: any;
};
type Outputs = {
    output: any;
};
//#endregion

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    // your code

    return { output: "output_value" };
};
