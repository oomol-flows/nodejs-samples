//#region generated meta
/**
 * @import { Context } from "@oomol/types/oocana";
 * @typedef {{
 *   input: any;
 * }} Inputs;
 * @typedef {{
 * }} Outputs;
 */
//#endregion

/**
 * @param {Inputs} params
 * @param {Context<Inputs, Outputs>} context
 * @returns {Promise<Outputs>}
 */
export default async function (params, context) {
    console.log("input", params.input)
}
