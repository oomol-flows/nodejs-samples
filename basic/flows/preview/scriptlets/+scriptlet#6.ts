import type { Context } from "@oomol/types/oocana";
//#region generated meta
type Inputs = {
    input: any;
};
type Outputs = {
    output: any;
};
//#endregion

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    context.preview({
        type: "image",
        data: [
            "https://avatars.githubusercontent.com/u/0",
            "https://avatars.githubusercontent.com/u/0",
            "https://avatars.githubusercontent.com/u/0"
        ]
    })

    return { output: "output_value" };
};
