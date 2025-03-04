/**
 * Gate API v4
 * Welcome to Gate.io API  APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SubAccountKeyPerms } from './subAccountKeyPerms';

export class SubAccountKey {
    /**
     * User ID
     */
    'userId'?: string;
    /**
     * Mode: 1 - classic 2 - portfolio account
     */
    'mode'?: number;
    /**
     * API key name
     */
    'name'?: string;
    'perms'?: Array<SubAccountKeyPerms>;
    /**
     * ip white list (list will be removed if no value is passed)
     */
    'ipWhitelist'?: Array<string>;
    /**
     * API Key
     */
    'key'?: string;
    /**
     * State 1 - normal 2 - locked 3 - frozen
     */
    'state'?: number;
    /**
     * Creation time
     */
    'createdAt'?: number;
    /**
     * Last update time
     */
    'updatedAt'?: number;
    /**
     * Last access time
     */
    'lastAccess'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'userId',
            baseName: 'user_id',
            type: 'string',
        },
        {
            name: 'mode',
            baseName: 'mode',
            type: 'number',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'perms',
            baseName: 'perms',
            type: 'Array<SubAccountKeyPerms>',
        },
        {
            name: 'ipWhitelist',
            baseName: 'ip_whitelist',
            type: 'Array<string>',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'state',
            baseName: 'state',
            type: 'number',
        },
        {
            name: 'createdAt',
            baseName: 'created_at',
            type: 'number',
        },
        {
            name: 'updatedAt',
            baseName: 'updated_at',
            type: 'number',
        },
        {
            name: 'lastAccess',
            baseName: 'last_access',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return SubAccountKey.attributeTypeMap;
    }
}
