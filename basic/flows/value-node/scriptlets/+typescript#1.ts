//#region generated meta
type Inputs = {
  input: string;
};
type Outputs = {
  output: any;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function (
  inputs: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Outputs> {
  
  if (inputs.input !== "static") {
    throw new Error("Invalid value input");
  }

  return { output: inputs.input };
}
