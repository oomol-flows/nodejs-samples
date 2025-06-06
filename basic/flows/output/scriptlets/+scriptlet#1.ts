
//#region generated meta
type Inputs = {
    number: any[];
    en: any[];
};
type Outputs = {
    output: any;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {




    return { output: "output_value" };
};
