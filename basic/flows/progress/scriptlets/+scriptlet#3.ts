//#region generated meta
import type { Context } from "@oomol/types/oocana";
type Inputs = {
    input: string;
};
type Outputs = {
    output: any;
};
//#endregion

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        // reportProgress has 300ms throttle
        context.reportProgress((i + 1) * 20);
    }

    return { output: "output_value" };
};
