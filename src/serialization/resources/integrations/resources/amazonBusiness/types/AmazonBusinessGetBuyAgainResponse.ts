/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ResponseStatus } from "../../../../common/resources/types/types/ResponseStatus";
import { AmazonBusinessItem } from "./AmazonBusinessItem";

export const AmazonBusinessGetBuyAgainResponse: core.serialization.ObjectSchema<
    serializers.integrations.AmazonBusinessGetBuyAgainResponse.Raw,
    Keet.integrations.AmazonBusinessGetBuyAgainResponse
> = core.serialization.object({
    status: ResponseStatus,
    items: core.serialization.list(AmazonBusinessItem),
});

export declare namespace AmazonBusinessGetBuyAgainResponse {
    interface Raw {
        status: ResponseStatus.Raw;
        items: AmazonBusinessItem.Raw[];
    }
}
