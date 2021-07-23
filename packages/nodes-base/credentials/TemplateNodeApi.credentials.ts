import {
    ICredentialType,
    NodePropertyTypes,
} from 'n8n-workflow';

export class TemplateNodeApi implements ICredentialType {
    name = 'templateNodeApi';
    displayName = 'TemplateNode API';
    documentationUrl = 'templateNode';
    properties = [
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string' as NodePropertyTypes,
            default: '',
        },
    ];

    // DON'T FORGET TO ADD THE PATH TO package.json
    // "dist/credentials/TemplateNodeApi.credentials.js"
}
