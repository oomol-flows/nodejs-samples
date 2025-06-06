import type { Context } from "@oomol/types/oocana";
//#region generated meta
type Inputs = {
  input: string;
};
type Outputs = {
  output: any;
};
//#endregion

export default async function (
  inputs: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Outputs> {
  
  if (inputs.input !== "static") {
    throw new Error("Invalid value input");
  }

  return { output: inputs.input };
}
