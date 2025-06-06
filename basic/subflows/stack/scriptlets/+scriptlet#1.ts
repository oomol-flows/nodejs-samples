//#region generated meta
type Inputs = {
    item: any;
};
type Outputs = {
    item: any;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    // your code

    return { item: params.item };
};
