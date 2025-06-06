import type { Context } from "@oomol/types/oocana";
//#region generated meta
type Inputs = {
    input: any[];
};
type Outputs = {
    output: any;
};
//#endregion

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {
    if (params.input.length != 3) {
        throw new Error("stack cache error")
    }
    return { output: "output_value" };
};
