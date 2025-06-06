import fs from "fs/promises";
import path from "node:path";
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
    let output = path.join(context.pkgDir, "1.txt")
  
    await fs.writeFile(output, "Hello World");
  
    return { output };
};
