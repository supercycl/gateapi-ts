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

/**
 * The returned result is a map type, where the key represents the market and the value represents the taker and maker fee rates.
 */
export class FuturesFee {
    /**
     * Taker fee
     */
    'takerFee'?: string;
    /**
     * maker fee
     */
    'makerFee'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'takerFee',
            baseName: 'taker_fee',
            type: 'string',
        },
        {
            name: 'makerFee',
            baseName: 'maker_fee',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return FuturesFee.attributeTypeMap;
    }
}
