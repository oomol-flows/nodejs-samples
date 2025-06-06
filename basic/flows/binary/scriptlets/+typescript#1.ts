
//#region generated meta
type Inputs = {
    input: string;
};
type Outputs = {
    output: Buffer;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function(
    _params: Inputs,
    _context: Context<Inputs, Outputs>
): Promise<Outputs> {
    return { output: Buffer.from("abc") };
};
