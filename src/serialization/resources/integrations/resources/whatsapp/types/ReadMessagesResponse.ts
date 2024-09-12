/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { WhatsAppMessage } from "./WhatsAppMessage";
import { ResponseStatus } from "../../../../common/resources/types/types/ResponseStatus";

export const ReadMessagesResponse: core.serialization.ObjectSchema<
    serializers.integrations.ReadMessagesResponse.Raw,
    Keet.integrations.ReadMessagesResponse
> = core.serialization.object({
    messages: core.serialization.list(WhatsAppMessage),
    status: ResponseStatus,
});

export declare namespace ReadMessagesResponse {
    interface Raw {
        messages: WhatsAppMessage.Raw[];
        status: ResponseStatus.Raw;
    }
}