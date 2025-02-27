/*
Visier Tenant Management APIs

Visier APIs for managing tenants

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TenantManagementAPIGetResponseDTO } from './tenant-management-apiget-response-dto';

/**
 * 
 * @export
 * @interface TenantManagementAPIListResponseDTO
 */
export interface TenantManagementAPIListResponseDTO {
    /**
     * A list of objects representing all the analytic tenants.
     * @type {Array<TenantManagementAPIGetResponseDTO>}
     * @memberof TenantManagementAPIListResponseDTO
     */
    'tenants'?: Array<TenantManagementAPIGetResponseDTO>;
    /**
     * The limit of analytic tenants to return. The maximum value is 1000. The default is 150.
     * @type {number}
     * @memberof TenantManagementAPIListResponseDTO
     */
    'limit'?: number;
    /**
     * The index to start retrieving values from, also known as offset. The index begins at 0.
     * @type {number}
     * @memberof TenantManagementAPIListResponseDTO
     */
    'start'?: number;
}

