//#region generated meta
type Inputs = {
    input: any;
    output: string;
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

    // your code

    return { output: "output_value" };
};
