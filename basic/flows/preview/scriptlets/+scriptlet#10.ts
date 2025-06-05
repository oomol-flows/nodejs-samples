//#region generated meta
import type { Context } from "@oomol/types/oocana";
type Inputs = {
    output: any;
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
        type: "video", 
        data: "" // URL
    })

    return { output: "output_value" };
};
