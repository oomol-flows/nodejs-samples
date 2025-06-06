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

    context.preview({
        type: "markdown", 
        data: "# Hello World"
    });

    return { output: "output_value" };
};
