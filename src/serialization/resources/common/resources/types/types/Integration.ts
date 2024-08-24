/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Integration: core.serialization.ObjectSchema<serializers.common.Integration.Raw, Keet.common.Integration> =
    core.serialization.object({
        integration: core.serialization.string(),
        isAlive: core.serialization.boolean(),
    });

export declare namespace Integration {
    interface Raw {
        integration: string;
        isAlive: boolean;
    }
}
