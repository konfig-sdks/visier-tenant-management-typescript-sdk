<div align="center">

[![Visit Visier](./header.png)](https://visier.com)

# [Visier](https://visier.com)<a id="visier"></a>

Visier APIs for managing tenants

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`visiertenantmanagement.tenantManagement.createTenant`](#visiertenantmanagementtenantmanagementcreatetenant)
  * [`visiertenantmanagement.tenantManagement.listTenants`](#visiertenantmanagementtenantmanagementlisttenants)
  * [`visiertenantmanagement.tenantManagement.tenantInfo`](#visiertenantmanagementtenantmanagementtenantinfo)
  * [`visiertenantmanagement.tenantManagement.updateTenant`](#visiertenantmanagementtenantmanagementupdatetenant)
  * [`visiertenantmanagement.tenantManagementV1.addTenant`](#visiertenantmanagementtenantmanagementv1addtenant)
  * [`visiertenantmanagement.tenantManagementV1.deleteTenant`](#visiertenantmanagementtenantmanagementv1deletetenant)
  * [`visiertenantmanagement.tenantManagementV1.disableTenant`](#visiertenantmanagementtenantmanagementv1disabletenant)
  * [`visiertenantmanagement.tenantManagementV1.enableTenant`](#visiertenantmanagementtenantmanagementv1enabletenant)
  * [`visiertenantmanagement.tenantManagementV1.getTenant`](#visiertenantmanagementtenantmanagementv1gettenant)
  * [`visiertenantmanagement.tenantManagementV1.getTenants`](#visiertenantmanagementtenantmanagementv1gettenants)
  * [`visiertenantmanagement.tenantManagementV1.updateTenant`](#visiertenantmanagementtenantmanagementv1updatetenant)
  * [`visiertenantmanagement.tenantManagementV1.validateTenant`](#visiertenantmanagementtenantmanagementv1validatetenant)
  * [`visiertenantmanagement.tenantManagementV1.validateTenants`](#visiertenantmanagementtenantmanagementv1validatetenants)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Visier&serviceName=TenantManagement&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { VisierTenantManagement } from "visier-tenant-management-typescript-sdk";

const visiertenantmanagement = new VisierTenantManagement({
  // Defining the base path is optional and defaults to https://vanity.api.visier.io
  // basePath: "https://vanity.api.visier.io",
  apiKeyAuth: "API_KEY",
  accessToken: "ACCESS_TOKEN",
  cookieAuth: "API_KEY",
});

const createTenantResponse =
  await visiertenantmanagement.tenantManagement.createTenant({
    updateAction: "MERGE",
  });

console.log(createTenantResponse);
```

## Reference<a id="reference"></a>


### `visiertenantmanagement.tenantManagement.createTenant`<a id="visiertenantmanagementtenantmanagementcreatetenant"></a>

Prior to processing and loading an analytic tenant's data files, you must provision, or create, that tenant. A
 provisioned analytic tenant is automatically enabled. If the tenant's data is loaded after provisioning, that data
 is immediately accessible by their users.

 This API allows you to create an analytic tenant and identify the
 applications assigned to the tenant. Visier organizes content under a set of modules.

 Contact Visier Support to determine the list of modules allocated to you.

 **Note:** API requests that contain **homeAnalysisId**, **homeAnalysisByUserGroup**, or **clickThroughLink** take
 longer to run because they require publishing a project to production.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTenantResponse =
  await visiertenantmanagement.tenantManagement.createTenant({
    updateAction: "MERGE",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

A unique identifier for the newly created analytic tenant. Required if creating new tenants.

##### tenantDisplayName: `string`<a id="tenantdisplayname-string"></a>

A new display name to assign to the analytic tenant. Required if creating new tenants.

##### tenantShortName: `string`<a id="tenantshortname-string"></a>

A new short name to assign to the tenant. Required for Enterprise tenants

##### vanityUrlName: `string`<a id="vanityurlname-string"></a>

A new vanity name to assign to the tenant. Required for Enterprise tenants

##### industryCode: `number`<a id="industrycode-number"></a>

The 6-digit NAICS code for the industry to which the analytic tenant belongs. If the code is unknown, type 000000.  For 2-digit codes, add trailing zeros at the end to reach 6 digits, such as 620000. Required if creating new tenants.

##### primaryBusinessLocation: [`BusinessLocationDTO`](./models/business-location-dto.ts)<a id="primarybusinesslocation-businesslocationdtomodelsbusiness-location-dtots"></a>

The primary location of operations or where business is performed. This field is optional.

##### purchasedModules: `string`[]<a id="purchasedmodules-string"></a>

A comma-separated collection of strings that represent the Visier modules assigned to the new analytic tenant. Required if creating new tenants.

##### embeddableDomains: `string`[]<a id="embeddabledomains-string"></a>

A comma-separated list of strings that represent the URLs, or domains, in which Visier can be embedded. If domains at the administrating tenant level match the domains at the analytic tenant level, you do not need to include a domain for each analytic tenant. This is optional.

##### customProperties: [`CustomPropertyDTO`](./models/custom-property-dto.ts)[]<a id="customproperties-custompropertydtomodelscustom-property-dtots"></a>

A list of objects that represent different customizable properties for the analytic tenant. This is optional.

##### ssoInstanceIssuers: `string`[]<a id="ssoinstanceissuers-string"></a>

A comma-separated list of strings that represent the issuers for the SSO providers that can authenticate this tenant. This is optional.

##### homeAnalysisId: `string`<a id="homeanalysisid-string"></a>

The unique ID of the analysis to display for this tenant when a user logs in. This is optional. Causes the API request to take longer because it must publish a project to production.   Retrieve the ID by opening an analysis in the production version of a tenant and copying the string after the last forward slash (/) in the URL. For example: https://jupiter.visier.com/hr/prod/appcontainer?previewId=-eZPm8xvo3SUMpD4Q5pdE-6mCj9CQ9K699XgqRGwtOxagH5x2IzDFawlWn3hYqFEfU7nP0YK9ASEzmrNfAihGg..&previewType=Production#/analytics/myanalyses/8a4c1d4f-eb61-4da0-9e5b-55bef757c30e   The `homeAnalysisID` is 8a4c1d4f-eb61-4da0-9e5b-55bef757c30e. Alternatively, retrieve the ID by copying the `contentId` found by following the `Embed a visualization` documentation.

##### homeAnalysisByUserGroup: [`HomeAnalysisByUserGroupDTO`](./models/home-analysis-by-user-group-dto.ts)[]<a id="homeanalysisbyusergroup-homeanalysisbyusergroupdtomodelshome-analysis-by-user-group-dtots"></a>

A list of objects representing the analysis to display to specific user groups when users log in. This is optional. Causes the API request to take longer because it must publish a project to production.

##### updateAction: `string`<a id="updateaction-string"></a>

Specifies the way you want to update values. Default is MERGE.  Valid values:  - `MERGE`: Combine the existing values with the new values.  - `REPLACE`: Remove existing values and let the new values take their place.

##### enabled: `boolean`<a id="enabled-boolean"></a>

If true, the tenant is enabled. Enabled tenants have access to Visier visualizations.

##### clickThroughLink: `string`<a id="clickthroughlink-string"></a>

A custom URL to redirect users into your portal to see the relevant content. This URL is used for links that are shared by and with your users through the sharing capability or email content. This is optional. Causes the API request to take longer because it must publish a project to production.

#### 🔄 Return<a id="🔄-return"></a>

[TenantManagementAPIUpdateResponseDTO](./models/tenant-management-apiupdate-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/admin/tenants` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visiertenantmanagement.tenantManagement.listTenants`<a id="visiertenantmanagementtenantmanagementlisttenants"></a>

Use this API to retrieve the full list of analytic tenants managed by you with their current states and the content
 modules assigned to them, and all other relevant details for the tenants if requested.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTenantsResponse =
  await visiertenantmanagement.tenantManagement.listTenants({
    mask: "tenantDisplayName,purchasedModules",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### mask: `string`<a id="mask-string"></a>

A comma separated list of strings that specifies which fields to include in the response.

##### limit: `number`<a id="limit-number"></a>

The maximum number of tenants to return. Default is 400.

##### start: `number`<a id="start-number"></a>

The starting index of the first tenant to return. Default is 0.

#### 🔄 Return<a id="🔄-return"></a>

[TenantManagementAPIListResponseDTO](./models/tenant-management-apilist-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/admin/tenants` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visiertenantmanagement.tenantManagement.tenantInfo`<a id="visiertenantmanagementtenantmanagementtenantinfo"></a>

Use this API to retrieve the details for a specified analytic tenant. Doing so allows you to see the current state
 of the tenant, the content modules assigned to it, and all other relevant details for the tenant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const tenantInfoResponse =
  await visiertenantmanagement.tenantManagement.tenantInfo({
    tenantId: "tenantId_example",
    mask: "tenantDisplayName,purchasedModules",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantId: `string`<a id="tenantid-string"></a>

The ID of the tenant to retrieve.

##### mask: `string`<a id="mask-string"></a>

A comma separated list of strings that specifies which fields to include in the response.

#### 🔄 Return<a id="🔄-return"></a>

[TenantManagementAPIGetResponseDTO](./models/tenant-management-apiget-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/admin/tenants/{tenantId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visiertenantmanagement.tenantManagement.updateTenant`<a id="visiertenantmanagementtenantmanagementupdatetenant"></a>

You may need to update analytic tenants as they grow and as your organization upgrades the content available to them.
 You may also encounter a scenario where an analytic tenant transitions across different industries. To make updates
 to your tenants, use this API.

 * To ensure that the analytic tenant receives accurate benchmarks and predictive functionality, update their industry code in the Visier system.
 * To programmatically assign the Home analysis that analytic tenants see at login, use this API to set the default Home analysis for a tenant and specific user groups of that tenant.

 You can use this API to update any field on an analytic tenant, except tenantCode.

 **Note:** API requests that contain **homeAnalysisId**, **homeAnalysisByUserGroup**, or **clickThroughLink** take
 longer to run because they require publishing a project to production.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTenantResponse =
  await visiertenantmanagement.tenantManagement.updateTenant({
    updateAction: "MERGE",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

A unique identifier for the newly created analytic tenant. Required if creating new tenants.

##### tenantDisplayName: `string`<a id="tenantdisplayname-string"></a>

A new display name to assign to the analytic tenant. Required if creating new tenants.

##### tenantShortName: `string`<a id="tenantshortname-string"></a>

A new short name to assign to the tenant. Required for Enterprise tenants

##### vanityUrlName: `string`<a id="vanityurlname-string"></a>

A new vanity name to assign to the tenant. Required for Enterprise tenants

##### industryCode: `number`<a id="industrycode-number"></a>

The 6-digit NAICS code for the industry to which the analytic tenant belongs. If the code is unknown, type 000000.  For 2-digit codes, add trailing zeros at the end to reach 6 digits, such as 620000. Required if creating new tenants.

##### primaryBusinessLocation: [`BusinessLocationDTO`](./models/business-location-dto.ts)<a id="primarybusinesslocation-businesslocationdtomodelsbusiness-location-dtots"></a>

The primary location of operations or where business is performed. This field is optional.

##### purchasedModules: `string`[]<a id="purchasedmodules-string"></a>

A comma-separated collection of strings that represent the Visier modules assigned to the new analytic tenant. Required if creating new tenants.

##### embeddableDomains: `string`[]<a id="embeddabledomains-string"></a>

A comma-separated list of strings that represent the URLs, or domains, in which Visier can be embedded. If domains at the administrating tenant level match the domains at the analytic tenant level, you do not need to include a domain for each analytic tenant. This is optional.

##### customProperties: [`CustomPropertyDTO`](./models/custom-property-dto.ts)[]<a id="customproperties-custompropertydtomodelscustom-property-dtots"></a>

A list of objects that represent different customizable properties for the analytic tenant. This is optional.

##### ssoInstanceIssuers: `string`[]<a id="ssoinstanceissuers-string"></a>

A comma-separated list of strings that represent the issuers for the SSO providers that can authenticate this tenant. This is optional.

##### homeAnalysisId: `string`<a id="homeanalysisid-string"></a>

The unique ID of the analysis to display for this tenant when a user logs in. This is optional. Causes the API request to take longer because it must publish a project to production.   Retrieve the ID by opening an analysis in the production version of a tenant and copying the string after the last forward slash (/) in the URL. For example: https://jupiter.visier.com/hr/prod/appcontainer?previewId=-eZPm8xvo3SUMpD4Q5pdE-6mCj9CQ9K699XgqRGwtOxagH5x2IzDFawlWn3hYqFEfU7nP0YK9ASEzmrNfAihGg..&previewType=Production#/analytics/myanalyses/8a4c1d4f-eb61-4da0-9e5b-55bef757c30e   The `homeAnalysisID` is 8a4c1d4f-eb61-4da0-9e5b-55bef757c30e. Alternatively, retrieve the ID by copying the `contentId` found by following the `Embed a visualization` documentation.

##### homeAnalysisByUserGroup: [`HomeAnalysisByUserGroupDTO`](./models/home-analysis-by-user-group-dto.ts)[]<a id="homeanalysisbyusergroup-homeanalysisbyusergroupdtomodelshome-analysis-by-user-group-dtots"></a>

A list of objects representing the analysis to display to specific user groups when users log in. This is optional. Causes the API request to take longer because it must publish a project to production.

##### updateAction: `string`<a id="updateaction-string"></a>

Specifies the way you want to update values. Default is MERGE.  Valid values:  - `MERGE`: Combine the existing values with the new values.  - `REPLACE`: Remove existing values and let the new values take their place.

##### enabled: `boolean`<a id="enabled-boolean"></a>

If true, the tenant is enabled. Enabled tenants have access to Visier visualizations.

##### clickThroughLink: `string`<a id="clickthroughlink-string"></a>

A custom URL to redirect users into your portal to see the relevant content. This URL is used for links that are shared by and with your users through the sharing capability or email content. This is optional. Causes the API request to take longer because it must publish a project to production.

#### 🔄 Return<a id="🔄-return"></a>

[TenantManagementAPIUpdateResponseDTO](./models/tenant-management-apiupdate-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/admin/tenants/:tenantId` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visiertenantmanagement.tenantManagementV1.addTenant`<a id="visiertenantmanagementtenantmanagementv1addtenant"></a>

Prior to processing and loading an analytic tenant's data files, you must provision, or create, that tenant.
 A provisioned analytic tenant is automatically enabled. If the tenant's data is loaded after provisioning, that
 data is immediately accessible by their users.

 This API allows you to create an analytic tenant and identify the applications assigned to the tenant. Visier
 organizes content under a set of modules.

 Contact Visier Support to determine the list of modules allocated to you.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTenantResponse =
  await visiertenantmanagement.tenantManagementV1.addTenant({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

The unique identifier of the analytic tenant.

##### tenantDisplayName: `string`<a id="tenantdisplayname-string"></a>

The display name that is assigned to the analytic tenant.

##### purchasedModules: `string`[]<a id="purchasedmodules-string"></a>

A comma-separated list of strings that represent the Visier modules assigned to the analytic tenant.

##### industryCode: `number`<a id="industrycode-number"></a>

The 6-digit NAICS code for the industry to which the analytic tenant belongs. If the code is unknown, type 000000.   For 2-digit codes, add trailing zeros at the end to reach 6 digits, such as 620000.

##### embeddableDomains: `string`[]<a id="embeddabledomains-string"></a>

A comma-separated list of strings that represent the URLs, or domains, in which Visier can be embedded. If  domains at the administrating tenant level match the domains at the analytic tenant level, you do not need  to include a domain for each analytic tenant.

##### customProperties: [`CustomTenantPropertyDTO`](./models/custom-tenant-property-dto.ts)[]<a id="customproperties-customtenantpropertydtomodelscustom-tenant-property-dtots"></a>

A set of key-value pairs that represent different customizable properties for the analytic tenant.

##### ssoInstanceIssuers: `string`[]<a id="ssoinstanceissuers-string"></a>

A comma-separated list of strings that represent the issuers for the SSO providers that can authenticate this tenant.

#### 🔄 Return<a id="🔄-return"></a>

[TenantProvisionAPIDTO](./models/tenant-provision-apidto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/tenants` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visiertenantmanagement.tenantManagementV1.deleteTenant`<a id="visiertenantmanagementtenantmanagementv1deletetenant"></a>

Warning! Deprovisioning an analytic tenant is not reversible.
 Before deprovisioning, you must disable an analytic tenant. For more information, see **`/v1/admin/tenants/:tenantId/disable`**.

 This API removes an analytic tenant permanently from the Visier system. If you are unsure whether an analytic tenant
 may be re-enabled on any of the Visier modules at any time, you may instead want to disable the analytic tenant.

 If successful, the response returns the status "Deprovisioned". This indicates that the tenant is scheduled for
 deprovisioning, which may take several days to complete.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTenantResponse =
  await visiertenantmanagement.tenantManagementV1.deleteTenant({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantId: `string`<a id="tenantid-string"></a>

The ID of the tenant. For example, WFF_{XXX}~{YYY} where {XXX} is the administrating tenant code and {YYY}  is the analytic tenant code.

#### 🔄 Return<a id="🔄-return"></a>

[TenantStatusAPIDTO](./models/tenant-status-apidto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/tenants/:tenantId` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visiertenantmanagement.tenantManagementV1.disableTenant`<a id="visiertenantmanagementtenantmanagementv1disabletenant"></a>

Use this API to disable an analytic tenant and remove access to Visier visualizations for the tenant's users.

 You must disable an analytic tenant before deprovisioning, or removing, it from the system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const disableTenantResponse =
  await visiertenantmanagement.tenantManagementV1.disableTenant({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantId: `string`<a id="tenantid-string"></a>

The ID of the tenant. For example, WFF_{XXX}~{YYY} where {XXX} is the administrating tenant code and {YYY}  is the analytic tenant code.

#### 🔄 Return<a id="🔄-return"></a>

[TenantStatusAPIDTO](./models/tenant-status-apidto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/tenants/:tenantId/disable` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visiertenantmanagement.tenantManagementV1.enableTenant`<a id="visiertenantmanagementtenantmanagementv1enabletenant"></a>

An analytic tenant is enabled when you provision or create the tenant.

 Use this API to enable a tenant that you have specifically disabled; for example, if you previously did not
 want that tenant to have access to Visier visualizations, but now do.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const enableTenantResponse =
  await visiertenantmanagement.tenantManagementV1.enableTenant({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantId: `string`<a id="tenantid-string"></a>

The ID of the tenant. For example, WFF_{XXX}~{YYY} where {XXX} is the administrating tenant code and {YYY}  is the analytic tenant code.

#### 🔄 Return<a id="🔄-return"></a>

[TenantStatusAPIDTO](./models/tenant-status-apidto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/tenants/:tenantId/enable` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visiertenantmanagement.tenantManagementV1.getTenant`<a id="visiertenantmanagementtenantmanagementv1gettenant"></a>

Use this API to retrieve all details for a specified analytic tenant. Doing so allows you to see the current state
 of the tenant, the content modules assigned to it, and all other relevant details for the tenant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTenantResponse =
  await visiertenantmanagement.tenantManagementV1.getTenant({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantId: `string`<a id="tenantid-string"></a>

The ID of the tenant. For example, WFF_{XXX}~{YYY} where {XXX} is the administrating tenant code and {YYY}  is the analytic tenant code.

#### 🔄 Return<a id="🔄-return"></a>

[TenantDetailAPIDTO](./models/tenant-detail-apidto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/tenants/:tenantId` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visiertenantmanagement.tenantManagementV1.getTenants`<a id="visiertenantmanagementtenantmanagementv1gettenants"></a>

Use this API to retrieve the full list of analytic tenants managed by you with their current states and the
 content modules assigned to them, and all other relevant details for the tenants if requested.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTenantsResponse =
  await visiertenantmanagement.tenantManagementV1.getTenants({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The limit of analytic tenant details to retrieve.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

##### details: `boolean`<a id="details-boolean"></a>

If true, the response returns information about the data version and modules.

#### 🔄 Return<a id="🔄-return"></a>

[AllTenantsStatusAPIDTO](./models/all-tenants-status-apidto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/tenants` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visiertenantmanagement.tenantManagementV1.updateTenant`<a id="visiertenantmanagementtenantmanagementv1updatetenant"></a>

You may need to update analytic tenants as they grow and as your organization upgrades the content available to
 them. You may also encounter a scenario where an analytic tenant transitions across different industries.

 To ensure that the analytic tenant receives accurate benchmarks and predictive functionality, update their
 industry code in the Visier system.

 You can use this API to update any field on an analytic tenant, except tenantCode.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTenantResponse =
  await visiertenantmanagement.tenantManagementV1.updateTenant({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantDisplayName: `string`<a id="tenantdisplayname-string"></a>

A display name that is assigned to the new analytic tenant.

##### industryCode: `number`<a id="industrycode-number"></a>

The 6-digit NAICS code for the industry to which the analytic tenant belongs. If the code is unknown, type 000000.   For 2-digit codes, add trailing zeros at the end to reach 6 digits, such as 620000.

##### purchasedModules: `string`[]<a id="purchasedmodules-string"></a>

A comma-separated collection of strings that represent the Visier modules assigned to the new analytic tenant.

##### embeddableDomains: `string`[]<a id="embeddabledomains-string"></a>

A comma-separated list of strings that represent the URLs, or domains, in which Visier can be embedded. If  domains at the administrating tenant level match the domains at the analytic tenant level, you do not need  to include a domain for each analytic tenant.

##### customProperties: Record<string, `string`><a id="customproperties-record"></a>

A set of key-value pairs that represent different customizable properties for the analytic tenant.

##### ssoInstanceIssuers: `string`[]<a id="ssoinstanceissuers-string"></a>

A comma-separated list of strings that represent the issuers for the SSO providers that can authenticate this tenant.

##### tenantId: `string`<a id="tenantid-string"></a>

The ID of the tenant to update.

#### 🔄 Return<a id="🔄-return"></a>

[TenantProvisionAPIDTO](./models/tenant-provision-apidto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/tenants/:tenantId` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visiertenantmanagement.tenantManagementV1.validateTenant`<a id="visiertenantmanagementtenantmanagementv1validatetenant"></a>

Use this API to retrieve the metric values for an individual analytic tenant. The metric values included in the
 response are the tenant's configured summary metrics. Administrators can configure summary metrics in a project:
 - Sign in to Visier as an administrator.
 - In a project, on the navigation bar, click the Home button.
 - Click Dashboard, and then click Edit Summary Metrics.
 - Select the metrics that you want to validate, and then close the Summary Metrics dialog.
 - Publish the project to production.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const validateTenantResponse =
  await visiertenantmanagement.tenantManagementV1.validateTenant({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantId: `string`<a id="tenantid-string"></a>

The ID of the tenant. For example, WFF_{XXX}~{YYY} where {XXX} is the administrating tenant code and {YYY}  is the analytic tenant code.

#### 🔄 Return<a id="🔄-return"></a>

[TenantPreviewEntriesSummaryDTO](./models/tenant-preview-entries-summary-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/validation/tenants/:tenantId` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visiertenantmanagement.tenantManagementV1.validateTenants`<a id="visiertenantmanagementtenantmanagementv1validatetenants"></a>

As you onboard more analytic tenants, you can validate the data visible to your users to ensure it matches the
 source systems from which it was exported and that it matches what your expectations are for this data.

 The metric values included in the response are the tenant's configured summary metrics. Administrators can
 configure summary metrics in a project:
 - Sign in to Visier as an administrator.
 - In a project, on the navigation bar, click the Home button.
 - Click Dashboard, and then click Edit Summary Metrics.
 - Select the metrics that you want to validate, and then close the Summary Metrics dialog.
 - Publish the project to production.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const validateTenantsResponse =
  await visiertenantmanagement.tenantManagementV1.validateTenants({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The limit of analytic tenant details to retrieve.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

#### 🔄 Return<a id="🔄-return"></a>

[TenantPreviewEntriesSummaryListDTO](./models/tenant-preview-entries-summary-list-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/validation/tenants` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
