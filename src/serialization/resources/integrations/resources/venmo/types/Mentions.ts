/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Mentions: core.serialization.ObjectSchema<
    serializers.integrations.Mentions.Raw,
    Keet.integrations.Mentions
> = core.serialization.object({
    count: core.serialization.number(),
    data: core.serialization.unknown(),
});

export declare namespace Mentions {
    interface Raw {
        count: number;
        data?: unknown;
    }
}
