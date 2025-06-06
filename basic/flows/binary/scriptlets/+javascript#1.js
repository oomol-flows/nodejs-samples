//#region generated meta
/**
 * @typedef {{
 *   input: Buffer;
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

    const buff = params.input;
    const str = buff.toString();

    if (str !== "abc") {
        throw new Error("Invalid input");
    } else {
        console.log("Valid input");
    }
}
