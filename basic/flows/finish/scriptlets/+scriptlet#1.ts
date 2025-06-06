//#region generated meta
type Inputs = {
};
type Outputs = {
    output: any;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
    // need change return type
): Promise<Partial<Outputs> | undefined | void | Symbol> {

    setTimeout(() => {
        context.finish({
            result: {
                output: "aaa"
            }
        })
    }, 1000 * 3);

    return context.keepAlive 
};
