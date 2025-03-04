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

export class OptionsMyTrade {
    /**
     * Trade ID
     */
    'id'?: number;
    /**
     * Trading time
     */
    'createTime'?: number;
    /**
     * Options contract name
     */
    'contract'?: string;
    /**
     * Order ID related
     */
    'orderId'?: number;
    /**
     * Trading size
     */
    'size'?: number;
    /**
     * Trading price (quote currency)
     */
    'price'?: string;
    /**
     * Underlying price (quote currency)
     */
    'underlyingPrice'?: string;
    /**
     * Trade role. Available values are `taker` and `maker`
     */
    'role'?: OptionsMyTrade.Role;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'number',
        },
        {
            name: 'createTime',
            baseName: 'create_time',
            type: 'number',
        },
        {
            name: 'contract',
            baseName: 'contract',
            type: 'string',
        },
        {
            name: 'orderId',
            baseName: 'order_id',
            type: 'number',
        },
        {
            name: 'size',
            baseName: 'size',
            type: 'number',
        },
        {
            name: 'price',
            baseName: 'price',
            type: 'string',
        },
        {
            name: 'underlyingPrice',
            baseName: 'underlying_price',
            type: 'string',
        },
        {
            name: 'role',
            baseName: 'role',
            type: 'OptionsMyTrade.Role',
        },
    ];

    static getAttributeTypeMap() {
        return OptionsMyTrade.attributeTypeMap;
    }
}

export namespace OptionsMyTrade {
    export enum Role {
        Taker = <any>'taker',
        Maker = <any>'maker',
    }
}
