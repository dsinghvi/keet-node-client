/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ResponseStatus } from "../../../../common/resources/types/types/ResponseStatus";
import { AmazonItem } from "./AmazonItem";

export const AmazonGetBuyAgainResponse: core.serialization.ObjectSchema<
    serializers.integrations.AmazonGetBuyAgainResponse.Raw,
    Keet.integrations.AmazonGetBuyAgainResponse
> = core.serialization.object({
    status: ResponseStatus,
    items: core.serialization.list(AmazonItem),
});

export declare namespace AmazonGetBuyAgainResponse {
    interface Raw {
        status: ResponseStatus.Raw;
        items: AmazonItem.Raw[];
    }
}
