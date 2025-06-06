//#region generated meta
/**
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

    context.output("output", "1");
    context.outputs({
        "output": "2"
    })

    return { output: "3" };
}
