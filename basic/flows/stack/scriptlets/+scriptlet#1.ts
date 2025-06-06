import type { Context } from "@oomol/types/oocana";
//#region generated meta
type Inputs = {
};
type Outputs = {
    output: any;
};
//#endregion

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    for (let i =0; i < 3; i++) {
        context.output("output", i)
    }
};
