/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ResponseStatus } from "../../../../common/resources/types/types/ResponseStatus";

export const GetTransactionsResponse: core.serialization.ObjectSchema<
    serializers.integrations.GetTransactionsResponse.Raw,
    Keet.integrations.GetTransactionsResponse
> = core.serialization.object({
    status: ResponseStatus,
    transactions: core.serialization.string(),
});

export declare namespace GetTransactionsResponse {
    interface Raw {
        status: ResponseStatus.Raw;
        transactions: string;
    }
}
