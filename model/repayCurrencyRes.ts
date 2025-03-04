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

export class RepayCurrencyRes {
    /**
     * Has the repayment been successful
     */
    'succeeded'?: boolean;
    /**
     * Error identifier for unsuccessful operations; empty for successful.
     */
    'label'?: string;
    /**
     * Error description in case of operation failure; empty when successful.
     */
    'message'?: string;
    /**
     * Repayment currency
     */
    'currency'?: string;
    /**
     * Principal
     */
    'repaidPrincipal'?: string;
    /**
     * Principal
     */
    'repaidInterest'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'succeeded',
            baseName: 'succeeded',
            type: 'boolean',
        },
        {
            name: 'label',
            baseName: 'label',
            type: 'string',
        },
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'repaidPrincipal',
            baseName: 'repaid_principal',
            type: 'string',
        },
        {
            name: 'repaidInterest',
            baseName: 'repaid_interest',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return RepayCurrencyRes.attributeTypeMap;
    }
}
