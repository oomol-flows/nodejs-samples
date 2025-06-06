import type { Context } from "@oomol/types/oocana";
//#region generated meta
type Inputs = {
};
type Outputs = {
    output: any;
};
//#endregion
import { root } from "~/root";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    console.log(root);
    if (root !== "root") {
        throw new Error("root is not root")
    }

    return { output: "output_value" };
};
