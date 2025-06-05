//#region generated meta
import type { Context } from "@oomol/types/oocana";
type Inputs = {
    input: string;
};
type Outputs = {
    output: string;
};
//#endregion

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    return { output: params.input };
};
