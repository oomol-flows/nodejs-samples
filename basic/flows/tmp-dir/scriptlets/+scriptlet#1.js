import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";

//#region generated meta
/**
 * @import { Context } from "@oomol/types/oocana";
 * @typedef {{
 *   input: string;
 * }} Inputs;
 * @typedef {{
 *   output: any;
 * }} Outputs;
 */
//#endregion

/**
 * @param {Inputs} params
 * @param {Context<Inputs, Outputs>} context
 * @returns {Promise<Outputs>}
 */
export default async function (params, context) {

  let p = context.tmpPkgDir;
  let output = path.join(p, "output.txt");

  // check output file exist
  // tmp dir should clean after flow success
  if (existsSync(output)) {
    throw new Error("Output file already exists")
  }
  

  await fs.writeFile(output, "Hello World");

  return { output };
}
