/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ResponseStatus } from "../../../../common/resources/types/types/ResponseStatus";

export const JoinGroupResponse: core.serialization.ObjectSchema<
    serializers.integrations.JoinGroupResponse.Raw,
    Keet.integrations.JoinGroupResponse
> = core.serialization.object({
    status: ResponseStatus,
});

export declare namespace JoinGroupResponse {
    interface Raw {
        status: ResponseStatus.Raw;
    }
}