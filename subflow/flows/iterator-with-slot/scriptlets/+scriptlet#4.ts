import type { Context } from "@oomol/types/oocana";
//#region generated meta
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

    console.log(params.input);

    for (let i = 0; i < params.input.length; i++) {
        let item = params.input[i];
        if (item !== i + 2) {
            throw new Error("map error");
        }
    }

    return { output: "output_value" };
};
