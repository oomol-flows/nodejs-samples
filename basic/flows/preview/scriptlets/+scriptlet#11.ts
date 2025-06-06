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
        type: "html",
        data: "<H1>1111</H1>" // URL
    })

    return { output: "output_value" };
};
