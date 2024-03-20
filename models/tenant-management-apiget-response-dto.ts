/*
Visier Tenant Management APIs

Visier APIs for managing tenants

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BusinessLocationDTO } from './business-location-dto';
import { CustomPropertyDTO } from './custom-property-dto';
import { HomeAnalysisByUserGroupDTO } from './home-analysis-by-user-group-dto';

/**
 * 
 * @export
 * @interface TenantManagementAPIGetResponseDTO
 */
export interface TenantManagementAPIGetResponseDTO {
    /**
     * The tenant code of the analytic tenant. For example, \"WFF_j1r~i1o\"
     * @type {string}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'tenantCode'?: string;
    /**
     * An identifiable tenant name that is displayed within Visier. For example, \"Callisto\".
     * @type {string}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'tenantDisplayName'?: string;
    /**
     * Whether the tenant is enabled or disabled.
     * @type {string}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'status'?: string;
    /**
     * The date that the tenant was created.
     * @type {string}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'provisionDate'?: string;
    /**
     * The data version ID that the tenant is using.
     * @type {string}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'currentDataVersion'?: string;
    /**
     * The date that the data version was published to production.
     * @type {string}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'dataVersionDate'?: string;
    /**
     * The modules assigned to the analytic tenant.
     * @type {Array<string>}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'purchasedModules'?: Array<string>;
    /**
     * The 6-digit NAICS code for the industry to which the analytic tenant belongs.
     * @type {number}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'industryCode'?: number;
    /**
     * The primary location of operations or where business is performed. If undefined, it is omitted from the response.
     * @type {BusinessLocationDTO}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'primaryBusinessLocation'?: BusinessLocationDTO;
    /**
     * If true, the tenant is an administrating tenant.
     * @type {boolean}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'canAdministerOtherTenants'?: boolean;
    /**
     * A comma-separated list of strings that represent the URLs, or domains, in which Visier can be embedded.
     * @type {Array<string>}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'embeddableDomains'?: Array<string>;
    /**
     * A set of key-value pairs that represent different customizable properties for the analytic tenant.
     * @type {Array<CustomPropertyDTO>}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'customProperties'?: Array<CustomPropertyDTO>;
    /**
     * A comma-separated list of strings that represent the issuers for the SSO providers that can authenticate this tenant.
     * @type {Array<string>}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'ssoInstanceIssuers'?: Array<string>;
    /**
     * The name of the administrating tenant used in Visier URLs.
     * @type {string}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'vanityUrlName'?: string;
    /**
     * The unique ID of the analysis that\'s displayed for this tenant when a user logs in.
     * @type {string}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'homeAnalysisId'?: string;
    /**
     * A list of objects representing the analysis displayed to specific user groups when users log in.
     * @type {Array<HomeAnalysisByUserGroupDTO>}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'homeAnalysisByUserGroup'?: Array<HomeAnalysisByUserGroupDTO>;
    /**
     * The custom URL to redirect users into your portal to see the relevant content. This URL is used for links that are shared by and with your users through the sharing capability or email content.
     * @type {string}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'clickThroughLink'?: string;
    /**
     * Whether the click-through link is enabled or disabled.
     * @type {string}
     * @memberof TenantManagementAPIGetResponseDTO
     */
    'clickThroughLinkEnabled'?: string;
}

