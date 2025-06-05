//#region generated meta
/**
 * @import { Context } from "@oomol/types/oocana";
 * @typedef {{
 *   vvvv: string;
 *   input: string;
 *   sub: string;
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

    console.log(`input: ${params.input} vvvv: ${params.vvvv} sub: ${params.sub}`);

    if (params.input !== params.vvvv) {
        throw new Error("node values don't match");
    }
    if (params.input !== params.sub) {
        throw new Error("subflow values don't match");
    }
    if (params.vvvv !== "static") {
        throw new Error("value not right");
    }
}
