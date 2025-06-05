import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import path from "node:path";

//#region generated meta
import type { Context } from "@oomol/types/oocana";
type Inputs = {
    input: any;
};
type Outputs = {
    output: any;
};
//#endregion

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

        let d = context.sessionDir;
        let file = path.join(d, "1.txt");
    
        if (!existsSync(file)) {
            throw new Error("File not exists")
        }
    
        await writeFile(file, "hello world");
    

    return { output: "output_value" };
};
