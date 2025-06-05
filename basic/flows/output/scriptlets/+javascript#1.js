//#region generated meta
/**
 * @import { Context } from "@oomol/types/oocana";
 * @typedef {{
 *   input: string;
 * }} Inputs;
 * @typedef {{
 *   output: string;
 * }} Outputs;
 */
//#endregion

/**
 * @param {Inputs} params
 * @param {import("@oomol/types/oocana").Context<Inputs, Outputs>} context
 * @returns {Promise<Outputs>}
 */
export default async function (params, context) {

    context.output("output", "one");
    context.outputs({
        "output": "two"
    })

    return { output: "three" };
}
