/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const XProfile: core.serialization.ObjectSchema<
    serializers.integrations.XProfile.Raw,
    Keet.integrations.XProfile
> = core.serialization.object({
    id: core.serialization.string(),
    restId: core.serialization.string(),
    name: core.serialization.string(),
    profileUrl: core.serialization.string(),
    numFollowers: core.serialization.number(),
    numFollowing: core.serialization.number(),
    verified: core.serialization.boolean(),
    userIsFollowing: core.serialization.boolean(),
});

export declare namespace XProfile {
    interface Raw {
        id: string;
        restId: string;
        name: string;
        profileUrl: string;
        numFollowers: number;
        numFollowing: number;
        verified: boolean;
        userIsFollowing: boolean;
    }
}