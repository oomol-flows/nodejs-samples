//#region generated meta
import type { Context } from "@oomol/types/oocana";
type Inputs = {
    input: any;
};
type Outputs = {
    output: any;
};
//#endregion

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    if (params.input !== 5) {
        throw new Error("Input must be 5")
    }

    return { output: "output_value" };
};
