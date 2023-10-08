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

export class SubAccountTransfer {
    /**
     * Transfer currency name
     */
    'currency': string;
    /**
     * Sub account user ID
     */
    'subAccount': string;
    /**
     * Transfer direction. to - transfer into sub account; from - transfer out from sub account
     */
    'direction': SubAccountTransfer.Direction;
    /**
     * Transfer amount
     */
    'amount': string;
    /**
     * Main account user ID
     */
    'uid'?: string;
    /**
     * The custom ID provided by the customer serves as a safeguard against duplicate transfers. It can be a combination of letters (case-sensitive), numbers, hyphens \'-\', and underscores \'_\', with a length ranging from 1 to 64 characters.
     */
    'clientOrderId'?: string;
    /**
     * Transfer timestamp
     */
    'timest'?: string;
    /**
     * Where the operation is initiated from
     */
    'source'?: string;
    /**
     * Target sub user\'s account. `spot` - spot account, `futures` - perpetual contract account, `cross_margin` - cross margin account, `delivery` - delivery account
     */
    'subAccountType'?: SubAccountTransfer.SubAccountType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'subAccount',
            baseName: 'sub_account',
            type: 'string',
        },
        {
            name: 'direction',
            baseName: 'direction',
            type: 'SubAccountTransfer.Direction',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'uid',
            baseName: 'uid',
            type: 'string',
        },
        {
            name: 'clientOrderId',
            baseName: 'client_order_id',
            type: 'string',
        },
        {
            name: 'timest',
            baseName: 'timest',
            type: 'string',
        },
        {
            name: 'source',
            baseName: 'source',
            type: 'string',
        },
        {
            name: 'subAccountType',
            baseName: 'sub_account_type',
            type: 'SubAccountTransfer.SubAccountType',
        },
    ];

    static getAttributeTypeMap() {
        return SubAccountTransfer.attributeTypeMap;
    }
}

export namespace SubAccountTransfer {
    export enum Direction {
        To = <any>'to',
        From = <any>'from',
    }
    export enum SubAccountType {
        Spot = <any>'spot',
        Futures = <any>'futures',
        CrossMargin = <any>'cross_margin',
        Delivery = <any>'delivery',
    }
}
