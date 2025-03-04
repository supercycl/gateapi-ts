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

export class RepayRecordRepaidCurrency {
    /**
     * Repayment currency
     */
    'currency'?: string;
    /**
     * Currency Index Price
     */
    'indexPrice'?: string;
    /**
     * Repayment amount
     */
    'repaidAmount'?: string;
    /**
     * Principal
     */
    'repaidPrincipal'?: string;
    /**
     * Interest
     */
    'repaidInterest'?: string;
    /**
     * Value of the repayment amount in USDT
     */
    'repaidAmountUsdt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'indexPrice',
            baseName: 'index_price',
            type: 'string',
        },
        {
            name: 'repaidAmount',
            baseName: 'repaid_amount',
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
        {
            name: 'repaidAmountUsdt',
            baseName: 'repaid_amount_usdt',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return RepayRecordRepaidCurrency.attributeTypeMap;
    }
}
