//#region generated meta
type Inputs = {
    input: string;
    object: { s: string; array: any[] };
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

    const { input, object } = params;
    if (input != object.s) {
        throw new Error("Invalid secret")
    }
    if (input != object.array[1]) {
        throw new Error("Invalid secret");
    }

    return { output: "output_value" };
};
