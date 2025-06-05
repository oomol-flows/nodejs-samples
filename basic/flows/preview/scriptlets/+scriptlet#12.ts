//#region generated meta
import type { Context } from "@oomol/types/oocana";
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
        type: "table",
        data: {
            columns: [1, 2, 3],
            rows: [["a", "b", "c"], ["aa", "bb", "cc"], ["aaa", "bbb"]]
        }
    })

    return { output: "output_value" };
};
