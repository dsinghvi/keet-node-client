/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const WhatsAppMessage: core.serialization.ObjectSchema<
    serializers.integrations.WhatsAppMessage.Raw,
    Keet.integrations.WhatsAppMessage
> = core.serialization.object({
    sender: core.serialization.string(),
    message: core.serialization.string(),
    timestamp: core.serialization.string(),
});

export declare namespace WhatsAppMessage {
    interface Raw {
        sender: string;
        message: string;
        timestamp: string;
    }
}
