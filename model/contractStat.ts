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

export class ContractStat {
    /**
     * Stat timestamp
     */
    'time'?: number;
    /**
     * Long/short account number ratio
     */
    'lsrTaker'?: number;
    /**
     * Long/short taker size ratio
     */
    'lsrAccount'?: number;
    /**
     * Long liquidation size
     */
    'longLiqSize'?: number;
    /**
     * Long liquidation amount(base currency)
     */
    'longLiqAmount'?: number;
    /**
     * Long liquidation volume(quote currency)
     */
    'longLiqUsd'?: number;
    /**
     * Short liquidation size
     */
    'shortLiqSize'?: number;
    /**
     * Short liquidation amount(base currency)
     */
    'shortLiqAmount'?: number;
    /**
     * Short liquidation volume(quote currency)
     */
    'shortLiqUsd'?: number;
    /**
     * Open interest size
     */
    'openInterest'?: number;
    /**
     * Open interest volume(quote currency)
     */
    'openInterestUsd'?: number;
    /**
     * Top trader long/short account ratio
     */
    'topLsrAccount'?: number;
    /**
     * Top trader long/short position ratio
     */
    'topLsrSize'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'time',
            baseName: 'time',
            type: 'number',
        },
        {
            name: 'lsrTaker',
            baseName: 'lsr_taker',
            type: 'number',
        },
        {
            name: 'lsrAccount',
            baseName: 'lsr_account',
            type: 'number',
        },
        {
            name: 'longLiqSize',
            baseName: 'long_liq_size',
            type: 'number',
        },
        {
            name: 'longLiqAmount',
            baseName: 'long_liq_amount',
            type: 'number',
        },
        {
            name: 'longLiqUsd',
            baseName: 'long_liq_usd',
            type: 'number',
        },
        {
            name: 'shortLiqSize',
            baseName: 'short_liq_size',
            type: 'number',
        },
        {
            name: 'shortLiqAmount',
            baseName: 'short_liq_amount',
            type: 'number',
        },
        {
            name: 'shortLiqUsd',
            baseName: 'short_liq_usd',
            type: 'number',
        },
        {
            name: 'openInterest',
            baseName: 'open_interest',
            type: 'number',
        },
        {
            name: 'openInterestUsd',
            baseName: 'open_interest_usd',
            type: 'number',
        },
        {
            name: 'topLsrAccount',
            baseName: 'top_lsr_account',
            type: 'number',
        },
        {
            name: 'topLsrSize',
            baseName: 'top_lsr_size',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return ContractStat.attributeTypeMap;
    }
}
