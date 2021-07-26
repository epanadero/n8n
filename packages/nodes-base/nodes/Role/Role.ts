import {
    IExecuteFunctions,
} from 'n8n-core';

import {
    IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

import {
    OptionsWithUri,
} from 'request';

export class Role implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Role',
        name: 'role',
        icon: 'file:role.svg',
        group: ['transform'],
        version: 1,
        description: 'Consume Role API',
        defaults: {
            name: 'Role',
            color: '#1A82e2',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            /*
            If you want to add created credentials:

            {
                name: 'templateNodeApi',
                required: true,
            },


            */
        ],
        properties: [
            // Node properties which the user gets displayed and
            // can change on the node.


        ],
    };

    // DON'T FORGET TO ADD THE PATH TO package.json
    // "dist/nodes/Account/Account.node.js"

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

        //Here is where the magic occours!! Put your variables and logic here!
        /*
        let responseData;
        const resource = this.getNodeParameter('resource', 0) as string;
        const operation = this.getNodeParameter('operation', 0) as string;
        //Get credentials the user provided for this node
        const credentials = this.getCredentials('templateNodeApi') as IDataObject;

        if (resource === 'contact') {
            if (operation === 'create') {
                // get email input
                const email = this.getNodeParameter('email', 0) as string;
                // get additional fields input
                const additionalFields = this.getNodeParameter('additionalFields', 0) as IDataObject;
                const data: IDataObject = {
                    email,
                };

                Object.assign(data, additionalFields);

                //Make http request according to <https://sendgrid.com/docs/api-reference/>
                const options: OptionsWithUri = {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${credentials.apiKey}`,
                    },
                    method: 'PUT',
                    body: {
                        contacts: [
                            data,
                        ],
                    },
                    uri: `https://api.sendgrid.com/v3/marketing/contacts`,
                    json: true,
                };

                responseData = await this.helpers.request(options);
            }
        }

        // Map data to n8n data
        return [this.helpers.returnJsonArray(responseData)];
        */


        return [[]];
    }
}
