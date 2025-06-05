//#region generated meta
import type { Context } from "@oomol/types/oocana";
type Inputs = {
  input: string;
};
type Outputs = {
  output: string;
};
//#endregion

export default async function(
  params: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Outputs> {

  process.env["a"] = "aa";

  return { output: "output_value" };
};
