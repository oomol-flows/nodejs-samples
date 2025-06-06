//#region generated meta
type Inputs = {
    a: any[];
};
type Outputs = {
    item: any;
    length: number;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {
    for (let i=0; i < params.a.length; i ++) {
        context.outputs({
            item: params.a[i],
            length: params.a.length,
        })
    }
};
