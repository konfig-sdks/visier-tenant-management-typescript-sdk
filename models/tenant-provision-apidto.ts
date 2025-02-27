/*
Visier Tenant Management APIs

Visier APIs for managing tenants

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomTenantPropertyDTO } from './custom-tenant-property-dto';

/**
 * 
 * @export
 * @interface TenantProvisionAPIDTO
 */
export interface TenantProvisionAPIDTO {
    /**
     * The unique identifier of the analytic tenant.
     * @type {string}
     * @memberof TenantProvisionAPIDTO
     */
    'tenantCode'?: string;
    /**
     * The display name that is assigned to the analytic tenant.
     * @type {string}
     * @memberof TenantProvisionAPIDTO
     */
    'tenantDisplayName'?: string;
    /**
     * A comma-separated list of strings that represent the Visier modules assigned to the analytic tenant.
     * @type {Array<string>}
     * @memberof TenantProvisionAPIDTO
     */
    'purchasedModules'?: Array<string>;
    /**
     * The 6-digit NAICS code for the industry to which the analytic tenant belongs. If the code is unknown, type 000000.   For 2-digit codes, add trailing zeros at the end to reach 6 digits, such as 620000.
     * @type {number}
     * @memberof TenantProvisionAPIDTO
     */
    'industryCode'?: number;
    /**
     * A comma-separated list of strings that represent the URLs, or domains, in which Visier can be embedded. If  domains at the administrating tenant level match the domains at the analytic tenant level, you do not need  to include a domain for each analytic tenant.
     * @type {Array<string>}
     * @memberof TenantProvisionAPIDTO
     */
    'embeddableDomains'?: Array<string>;
    /**
     * A set of key-value pairs that represent different customizable properties for the analytic tenant.
     * @type {Array<CustomTenantPropertyDTO>}
     * @memberof TenantProvisionAPIDTO
     */
    'customProperties'?: Array<CustomTenantPropertyDTO>;
    /**
     * A comma-separated list of strings that represent the issuers for the SSO providers that can authenticate this tenant.
     * @type {Array<string>}
     * @memberof TenantProvisionAPIDTO
     */
    'ssoInstanceIssuers'?: Array<string>;
}

