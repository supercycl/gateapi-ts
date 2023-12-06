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

export class UnifiedMode {
    /**
     * Portfolio mode - cross_margin : cross margin - usdt_futures : usdt futures
     */
    'mode': string;
    /**
     * Is it enabled?
     */
    'enabled': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'mode',
            baseName: 'mode',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return UnifiedMode.attributeTypeMap;
    }
}
