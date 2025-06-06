import type { Context } from "@oomol/types/oocana";

//#region generated meta
type Inputs = {
    input: string;
};
type Outputs = {
    output: Buffer;
};
//#endregion

export default async function(
    _params: Inputs,
    _context: Context<Inputs, Outputs>
): Promise<Outputs> {
    return { output: Buffer.from("abc") };
};
