//#region generated meta
/**
 * @typedef {{
 *   input: any;
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

    const { input } = params;
    
    if (typeof input == "string") {
        console.log("input is accept as string")
    } else {
        throw new Error("behavior changed");
    }

    return { output: "output_value" };
}
