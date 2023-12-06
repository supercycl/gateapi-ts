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

import { UnifiedBalance } from './unifiedBalance';

export class UnifiedAccount {
    /**
     * User ID
     */
    'userId'?: number;
    /**
     * Time of the most recent refresh
     */
    'refreshTime'?: number;
    /**
     * Whether account is locked
     */
    'locked'?: boolean;
    'balances'?: { [key: string]: UnifiedBalance };
    /**
     * The total asset value in USDT. Sum of `(available + freeze) * price`
     */
    'total'?: string;
    /**
     * The total borrowed amount in USDT equivalent. Sum of `borrowed * price`
     */
    'borrowed'?: string;
    /**
     * Total initial margin
     */
    'totalInitialMargin'?: string;
    /**
     * Total margin balance
     */
    'totalMarginBalance'?: string;
    /**
     * Total maintenance margin
     */
    'totalMaintenanceMargin'?: string;
    /**
     * Total initial margin rate
     */
    'totalInitialMarginRate'?: string;
    /**
     * Total maintenance margin rate
     */
    'totalMaintenanceMarginRate'?: string;
    /**
     * Total available margin
     */
    'totalAvailableMargin'?: string;
    /**
     * Total amount of the portfolio margin account
     */
    'unifiedAccountTotal'?: string;
    /**
     * Total liabilities of the portfolio margin account
     */
    'unifiedAccountTotalLiab'?: string;
    /**
     * Total equity of the portfolio margin account
     */
    'unifiedAccountTotalEquity'?: string;
    /**
     * Leverage
     */
    'leverage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'userId',
            baseName: 'user_id',
            type: 'number',
        },
        {
            name: 'refreshTime',
            baseName: 'refresh_time',
            type: 'number',
        },
        {
            name: 'locked',
            baseName: 'locked',
            type: 'boolean',
        },
        {
            name: 'balances',
            baseName: 'balances',
            type: '{ [key: string]: UnifiedBalance; }',
        },
        {
            name: 'total',
            baseName: 'total',
            type: 'string',
        },
        {
            name: 'borrowed',
            baseName: 'borrowed',
            type: 'string',
        },
        {
            name: 'totalInitialMargin',
            baseName: 'total_initial_margin',
            type: 'string',
        },
        {
            name: 'totalMarginBalance',
            baseName: 'total_margin_balance',
            type: 'string',
        },
        {
            name: 'totalMaintenanceMargin',
            baseName: 'total_maintenance_margin',
            type: 'string',
        },
        {
            name: 'totalInitialMarginRate',
            baseName: 'total_initial_margin_rate',
            type: 'string',
        },
        {
            name: 'totalMaintenanceMarginRate',
            baseName: 'total_maintenance_margin_rate',
            type: 'string',
        },
        {
            name: 'totalAvailableMargin',
            baseName: 'total_available_margin',
            type: 'string',
        },
        {
            name: 'unifiedAccountTotal',
            baseName: 'unified_account_total',
            type: 'string',
        },
        {
            name: 'unifiedAccountTotalLiab',
            baseName: 'unified_account_total_liab',
            type: 'string',
        },
        {
            name: 'unifiedAccountTotalEquity',
            baseName: 'unified_account_total_equity',
            type: 'string',
        },
        {
            name: 'leverage',
            baseName: 'leverage',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return UnifiedAccount.attributeTypeMap;
    }
}
