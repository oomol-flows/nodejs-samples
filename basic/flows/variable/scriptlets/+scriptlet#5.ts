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

    const { input } = params;
    if (input instanceof Date) {
        console.log("variable passed");
    } else {
        throw new Error("variable pass error");
    }

    // Any will transform to string by toJSON
    return { output: params.input };
};
