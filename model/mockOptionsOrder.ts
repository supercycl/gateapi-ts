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
 * Option orders
 */
export class MockOptionsOrder {
    /**
     * Option name, currently only supports options for BTC and ETH with USDT.
     */
    'optionsName': string;
    /**
     * Initial order quantity, not involved in actual calculation
     */
    'size': string;
    /**
     * Unfilled contract quantity, involved in actual calculation
     */
    'left': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'optionsName',
            baseName: 'options_name',
            type: 'string',
        },
        {
            name: 'size',
            baseName: 'size',
            type: 'string',
        },
        {
            name: 'left',
            baseName: 'left',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return MockOptionsOrder.attributeTypeMap;
    }
}
