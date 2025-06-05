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

    context.preview({
        type: "text/javascript",
        data: "let a = 'aaa'",
    })

    return { output: "output_value" };
};
