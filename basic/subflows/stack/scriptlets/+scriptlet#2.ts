//#region generated meta
type Inputs = {
    item: any;
    count: number;
};
type Outputs = {
    array: any[];
};
//#endregion
import type { Context } from "@oomol/types/oocana";

let store = {};

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    const node_store_id = context.stacks.reduce((r, c) => {
        return r + `-[${c.node_id}]`
    }, "node")

    const node_array = store[node_store_id] || []

    node_array.push(params.item);

    if (node_array.length === params.count) {
        store[node_store_id] = [];
        return {array: node_array}
    }

    store[node_store_id] = node_array;
    return
};
