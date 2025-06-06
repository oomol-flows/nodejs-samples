//#region generated meta
type Inputs = {
    input: string;
};
type Outputs = {
    output: string;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Outputs> {

    context.output("output", "one");
    context.outputs({
        "output": "two"
    })

    return { output: "three" };
};
