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

export class UnifiedBalance {
    /**
     * Available amount
     */
    'available'?: string;
    /**
     * Locked amount
     */
    'freeze'?: string;
    /**
     * Borrowed amount
     */
    'borrowed'?: string;
    /**
     * Negative Liabilities
     */
    'negativeLiab'?: string;
    /**
     * Borrowing to Open Positions in Futures
     */
    'futuresPosLiab'?: string;
    /**
     * Equity
     */
    'equity'?: string;
    /**
     * Total freeze
     */
    'totalFreeze'?: string;
    /**
     * Total liabilities
     */
    'totalLiab'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'available',
            baseName: 'available',
            type: 'string',
        },
        {
            name: 'freeze',
            baseName: 'freeze',
            type: 'string',
        },
        {
            name: 'borrowed',
            baseName: 'borrowed',
            type: 'string',
        },
        {
            name: 'negativeLiab',
            baseName: 'negative_liab',
            type: 'string',
        },
        {
            name: 'futuresPosLiab',
            baseName: 'futures_pos_liab',
            type: 'string',
        },
        {
            name: 'equity',
            baseName: 'equity',
            type: 'string',
        },
        {
            name: 'totalFreeze',
            baseName: 'total_freeze',
            type: 'string',
        },
        {
            name: 'totalLiab',
            baseName: 'total_liab',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return UnifiedBalance.attributeTypeMap;
    }
}
