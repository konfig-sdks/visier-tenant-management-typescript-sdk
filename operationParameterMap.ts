type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v2/admin/tenants-POST': {
        parameters: [
            {
                name: 'tenantCode'
            },
            {
                name: 'tenantDisplayName'
            },
            {
                name: 'tenantShortName'
            },
            {
                name: 'vanityUrlName'
            },
            {
                name: 'industryCode'
            },
            {
                name: 'primaryBusinessLocation'
            },
            {
                name: 'purchasedModules'
            },
            {
                name: 'embeddableDomains'
            },
            {
                name: 'customProperties'
            },
            {
                name: 'ssoInstanceIssuers'
            },
            {
                name: 'homeAnalysisId'
            },
            {
                name: 'homeAnalysisByUserGroup'
            },
            {
                name: 'updateAction'
            },
            {
                name: 'enabled'
            },
            {
                name: 'clickThroughLink'
            },
        ]
    },
    '/v2/admin/tenants-GET': {
        parameters: [
            {
                name: 'mask'
            },
            {
                name: 'limit'
            },
            {
                name: 'start'
            },
        ]
    },
    '/v2/admin/tenants/{tenantId}-GET': {
        parameters: [
            {
                name: 'tenantId'
            },
            {
                name: 'mask'
            },
        ]
    },
    '/v2/admin/tenants/:tenantId-PUT': {
        parameters: [
            {
                name: 'tenantCode'
            },
            {
                name: 'tenantDisplayName'
            },
            {
                name: 'tenantShortName'
            },
            {
                name: 'vanityUrlName'
            },
            {
                name: 'industryCode'
            },
            {
                name: 'primaryBusinessLocation'
            },
            {
                name: 'purchasedModules'
            },
            {
                name: 'embeddableDomains'
            },
            {
                name: 'customProperties'
            },
            {
                name: 'ssoInstanceIssuers'
            },
            {
                name: 'homeAnalysisId'
            },
            {
                name: 'homeAnalysisByUserGroup'
            },
            {
                name: 'updateAction'
            },
            {
                name: 'enabled'
            },
            {
                name: 'clickThroughLink'
            },
        ]
    },
    '/v1/admin/tenants-POST': {
        parameters: [
            {
                name: 'tenantCode'
            },
            {
                name: 'tenantDisplayName'
            },
            {
                name: 'purchasedModules'
            },
            {
                name: 'industryCode'
            },
            {
                name: 'embeddableDomains'
            },
            {
                name: 'customProperties'
            },
            {
                name: 'ssoInstanceIssuers'
            },
        ]
    },
    '/v1/admin/tenants/:tenantId-DELETE': {
        parameters: [
            {
                name: 'tenantId'
            },
        ]
    },
    '/v1/admin/tenants/:tenantId/disable-PUT': {
        parameters: [
            {
                name: 'tenantId'
            },
        ]
    },
    '/v1/admin/tenants/:tenantId/enable-PUT': {
        parameters: [
            {
                name: 'tenantId'
            },
        ]
    },
    '/v1/admin/tenants/:tenantId-GET': {
        parameters: [
            {
                name: 'tenantId'
            },
        ]
    },
    '/v1/admin/tenants-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'start'
            },
            {
                name: 'details'
            },
        ]
    },
    '/v1/admin/tenants/:tenantId-PUT': {
        parameters: [
            {
                name: 'tenantDisplayName'
            },
            {
                name: 'industryCode'
            },
            {
                name: 'purchasedModules'
            },
            {
                name: 'embeddableDomains'
            },
            {
                name: 'customProperties'
            },
            {
                name: 'ssoInstanceIssuers'
            },
            {
                name: 'tenantId'
            },
        ]
    },
    '/v1/op/validation/tenants/:tenantId-GET': {
        parameters: [
            {
                name: 'tenantId'
            },
        ]
    },
    '/v1/op/validation/tenants-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'start'
            },
        ]
    },
}