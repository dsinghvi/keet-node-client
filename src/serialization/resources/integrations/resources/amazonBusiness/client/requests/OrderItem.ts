/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Keet from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const OrderItem: core.serialization.Schema<serializers.integrations.OrderItem.Raw, Keet.integrations.OrderItem> =
    core.serialization.object({
        itemUrl: core.serialization.string().optional(),
        asin: core.serialization.string().optional(),
    });

export declare namespace OrderItem {
    interface Raw {
        itemUrl?: string | null;
        asin?: string | null;
    }
}