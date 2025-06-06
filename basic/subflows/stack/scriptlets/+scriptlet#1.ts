import type { Context } from "@oomol/types/oocana";
//#region generated meta
type Inputs = {
    item: any;
};
type Outputs = {
    item: any;
};
//#endregion

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    // your code

    return { item: params.item };
};
