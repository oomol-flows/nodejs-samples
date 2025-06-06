import fs from "fs/promises";

//#region generated meta
type Inputs = {
    input: string;
};
type Outputs = {
    output: string;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Outputs> {

    let f = params["input"]

    console.log(f);
    const ls = await fs.lstat(f);
    console.log(ls);

    return { output: "output_value" };
};
