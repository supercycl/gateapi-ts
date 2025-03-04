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
 * Repayment record
 */
export class RepayRecord {
    /**
     * Order ID
     */
    'orderId'?: number;
    /**
     * Repayment record ID
     */
    'recordId'?: number;
    /**
     * Repayment amount
     */
    'repaidAmount'?: string;
    /**
     * Borrowed currency
     */
    'borrowCurrency'?: string;
    /**
     * Collateral
     */
    'collateralCurrency'?: string;
    /**
     * The initial collateralization rate
     */
    'initLtv'?: string;
    /**
     * Borrowing time, timestamp
     */
    'borrowTime'?: number;
    /**
     * Repayment time, timestamp
     */
    'repayTime'?: number;
    /**
     * Total interest
     */
    'totalInterest'?: string;
    /**
     * Principal to be repaid before repayment
     */
    'beforeLeftPrincipal'?: string;
    /**
     * Principal to be repaid after repayment
     */
    'afterLeftPrincipal'?: string;
    /**
     * Collateral quantity before repayment
     */
    'beforeLeftCollateral'?: string;
    /**
     * Collateral quantity after repayment
     */
    'afterLeftCollateral'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'orderId',
            baseName: 'order_id',
            type: 'number',
        },
        {
            name: 'recordId',
            baseName: 'record_id',
            type: 'number',
        },
        {
            name: 'repaidAmount',
            baseName: 'repaid_amount',
            type: 'string',
        },
        {
            name: 'borrowCurrency',
            baseName: 'borrow_currency',
            type: 'string',
        },
        {
            name: 'collateralCurrency',
            baseName: 'collateral_currency',
            type: 'string',
        },
        {
            name: 'initLtv',
            baseName: 'init_ltv',
            type: 'string',
        },
        {
            name: 'borrowTime',
            baseName: 'borrow_time',
            type: 'number',
        },
        {
            name: 'repayTime',
            baseName: 'repay_time',
            type: 'number',
        },
        {
            name: 'totalInterest',
            baseName: 'total_interest',
            type: 'string',
        },
        {
            name: 'beforeLeftPrincipal',
            baseName: 'before_left_principal',
            type: 'string',
        },
        {
            name: 'afterLeftPrincipal',
            baseName: 'after_left_principal',
            type: 'string',
        },
        {
            name: 'beforeLeftCollateral',
            baseName: 'before_left_collateral',
            type: 'string',
        },
        {
            name: 'afterLeftCollateral',
            baseName: 'after_left_collateral',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return RepayRecord.attributeTypeMap;
    }
}
