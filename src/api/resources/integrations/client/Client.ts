/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { Amazon } from "../resources/amazon/client/Client";
import { AmazonBusiness } from "../resources/amazonBusiness/client/Client";
import { AmazonSeller } from "../resources/amazonSeller/client/Client";
import { Facebook } from "../resources/facebook/client/Client";
import { Instagram } from "../resources/instagram/client/Client";
import { Linkedin } from "../resources/linkedin/client/Client";
import { Uber } from "../resources/uber/client/Client";
import { Venmo } from "../resources/venmo/client/Client";
import { Whatsapp } from "../resources/whatsapp/client/Client";
import { X } from "../resources/x/client/Client";

export declare namespace Integrations {
    interface Options {
        token: core.Supplier<core.BearerToken>;
        /** Override the X-Account-Token header */
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Account-Token header */
        accountToken?: string | undefined;
    }
}

export class Integrations {
    constructor(protected readonly _options: Integrations.Options) {}

    protected _amazon: Amazon | undefined;

    public get amazon(): Amazon {
        return (this._amazon ??= new Amazon(this._options));
    }

    protected _amazonBusiness: AmazonBusiness | undefined;

    public get amazonBusiness(): AmazonBusiness {
        return (this._amazonBusiness ??= new AmazonBusiness(this._options));
    }

    protected _amazonSeller: AmazonSeller | undefined;

    public get amazonSeller(): AmazonSeller {
        return (this._amazonSeller ??= new AmazonSeller(this._options));
    }

    protected _facebook: Facebook | undefined;

    public get facebook(): Facebook {
        return (this._facebook ??= new Facebook(this._options));
    }

    protected _instagram: Instagram | undefined;

    public get instagram(): Instagram {
        return (this._instagram ??= new Instagram(this._options));
    }

    protected _linkedin: Linkedin | undefined;

    public get linkedin(): Linkedin {
        return (this._linkedin ??= new Linkedin(this._options));
    }

    protected _uber: Uber | undefined;

    public get uber(): Uber {
        return (this._uber ??= new Uber(this._options));
    }

    protected _venmo: Venmo | undefined;

    public get venmo(): Venmo {
        return (this._venmo ??= new Venmo(this._options));
    }

    protected _whatsapp: Whatsapp | undefined;

    public get whatsapp(): Whatsapp {
        return (this._whatsapp ??= new Whatsapp(this._options));
    }

    protected _x: X | undefined;

    public get x(): X {
        return (this._x ??= new X(this._options));
    }
}
