//#region generated meta
type Inputs = {
    a: string;
};
type Outputs = {
    b: any;
    c: any;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

  return { a: "a", b: "b", c: "c" } as Outputs;
};
