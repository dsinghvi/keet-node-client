/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Keet from "../../../../api/index";
import * as core from "../../../../core";
import { ResponseStatus } from "../../common/resources/types/types/ResponseStatus";

export const CreateLinkResponse: core.serialization.ObjectSchema<
    serializers.CreateLinkResponse.Raw,
    Keet.CreateLinkResponse
> = core.serialization.object({
    status: ResponseStatus,
    linkToken: core.serialization.string(),
});

export declare namespace CreateLinkResponse {
    interface Raw {
        status: ResponseStatus.Raw;
        linkToken: string;
    }
}