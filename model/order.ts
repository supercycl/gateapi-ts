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
 * Spot order details
 */
export class Order {
    /**
     * Order ID
     */
    'id'?: string;
    /**
     * User defined information. If not empty, must follow the rules below:  1. prefixed with `t-` 2. no longer than 28 bytes without `t-` prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.)  Besides user defined information, reserved contents are listed below, denoting how the order is created:  - 101: from android - 102: from IOS - 103: from IPAD - 104: from webapp - 3: from web - 2: from apiv2 - apiv4: from apiv4
     */
    'text'?: string;
    /**
     * The custom data that the user remarked when amending the order
     */
    'amendText'?: string;
    /**
     * Creation time of order
     */
    'createTime'?: string;
    /**
     * Last modification time of order
     */
    'updateTime'?: string;
    /**
     * Creation time of order (in milliseconds)
     */
    'createTimeMs'?: number;
    /**
     * Last modification time of order (in milliseconds)
     */
    'updateTimeMs'?: number;
    /**
     * Order status  - `open`: to be filled - `closed`: filled - `cancelled`: cancelled
     */
    'status'?: Order.Status;
    /**
     * Currency pair
     */
    'currencyPair': string;
    /**
     * Order Type    - limit : Limit Order - market : Market Order
     */
    'type'?: Order.Type;
    /**
     * Account type, spot - spot account, margin - leveraged account, unified - unified account
     */
    'account'?: string;
    /**
     * Order side
     */
    'side': Order.Side;
    /**
     * When `type` is limit, it refers to base currency.  For instance, `BTC_USDT` means `BTC`  When `type` is `market`, it refers to different currency according to `side`  - `side` : `buy` means quote currency, `BTC_USDT` means `USDT` - `side` : `sell` means base currency，`BTC_USDT` means `BTC`
     */
    'amount': string;
    /**
     * Price can\'t be empty when `type`= `limit`
     */
    'price'?: string;
    /**
     * Time in force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only - poc: PendingOrCancelled, makes a post-only order that always enjoys a maker fee - fok: FillOrKill, fill either completely or none Only `ioc` and `fok` are supported when `type`=`market`
     */
    'timeInForce'?: Order.TimeInForce;
    /**
     * Amount to display for the iceberg order. Null or 0 for normal orders.  Hiding all amount is not supported.
     */
    'iceberg'?: string;
    /**
     * Used in margin or cross margin trading to allow automatic loan of insufficient amount if balance is not enough.
     */
    'autoBorrow'?: boolean;
    /**
     * Enable or disable automatic repayment for automatic borrow loan generated by cross margin order. Default is disabled. Note that:  1. This field is only effective for cross margin orders. Margin account does not support setting auto repayment for orders. 2. `auto_borrow` and `auto_repay` can be both set to true in one order.
     */
    'autoRepay'?: boolean;
    /**
     * Amount left to fill
     */
    'left'?: string;
    /**
     * Amount traded to fill
     */
    'filledAmount'?: string;
    /**
     * Total filled in quote currency. Deprecated in favor of `filled_total`
     */
    'fillPrice'?: string;
    /**
     * Total filled in quote currency
     */
    'filledTotal'?: string;
    /**
     * Average fill price
     */
    'avgDealPrice'?: string;
    /**
     * Fee deducted
     */
    'fee'?: string;
    /**
     * Fee currency unit
     */
    'feeCurrency'?: string;
    /**
     * Points used to deduct fee
     */
    'pointFee'?: string;
    /**
     * GT used to deduct fee
     */
    'gtFee'?: string;
    /**
     * GT used to deduct maker fee
     */
    'gtMakerFee'?: string;
    /**
     * GT used to deduct taker fee
     */
    'gtTakerFee'?: string;
    /**
     * Whether GT fee discount is used
     */
    'gtDiscount'?: boolean;
    /**
     * Rebated fee
     */
    'rebatedFee'?: string;
    /**
     * Rebated fee currency unit
     */
    'rebatedFeeCurrency'?: string;
    /**
     * Orders between users in the same `stp_id` group are not allowed to be self-traded  1. If the `stp_id` of two orders being matched is non-zero and equal, they will not be executed. Instead, the corresponding strategy will be executed based on the `stp_act` of the taker. 2. `stp_id` returns `0` by default for orders that have not been set for `STP group`
     */
    'stpId'?: number;
    /**
     * Self-Trading Prevention Action. Users can use this field to set self-trade prevetion strategies  1. After users join the `STP Group`, he can pass `stp_act` to limit the user\'s self-trade prevetion strategy. If `stp_act` is not passed, the default is `cn` strategy。 2. When the user does not join the `STP group`, an error will be returned when passing the `stp_act` parameter。 3. If the user did not use \'stp_act\' when placing the order, \'stp_act\' will return \'-\'  - cn: Cancel newest, Cancel new orders and keep old ones - co: Cancel oldest, Cancel old orders and keep new ones - cb: Cancel both, Both old and new orders will be cancelled
     */
    'stpAct'?: Order.StpAct;
    /**
     * Order completion statuses include:  - open: Awaiting processing - filled: Fully filled - cancelled: Cancelled by user - liquidate_cancelled: Cancelled due to liquidation - small: Order quantity too small - depth_not_enough: Cancelled due to insufficient market depth - trader_not_enough: Cancelled due to insufficient counterparty - ioc: Not immediately filled because tif is set to ioc - poc: Not met the order strategy because tif is set to poc - fok: Not fully filled immediately because tif is set to fok - stp: Cancelled due to self-trade prevention - unknown: Unknown
     */
    'finishAs'?: Order.FinishAs;
    /**
     * Processing Mode: When placing an order, different fields are returned based on action_mode. This field is only valid during the request and is not included in the response result ACK: Asynchronous mode, only returns key order fields RESULT: No clearing information FULL: Full mode (default)
     */
    'actionMode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'text',
            baseName: 'text',
            type: 'string',
        },
        {
            name: 'amendText',
            baseName: 'amend_text',
            type: 'string',
        },
        {
            name: 'createTime',
            baseName: 'create_time',
            type: 'string',
        },
        {
            name: 'updateTime',
            baseName: 'update_time',
            type: 'string',
        },
        {
            name: 'createTimeMs',
            baseName: 'create_time_ms',
            type: 'number',
        },
        {
            name: 'updateTimeMs',
            baseName: 'update_time_ms',
            type: 'number',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'Order.Status',
        },
        {
            name: 'currencyPair',
            baseName: 'currency_pair',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'Order.Type',
        },
        {
            name: 'account',
            baseName: 'account',
            type: 'string',
        },
        {
            name: 'side',
            baseName: 'side',
            type: 'Order.Side',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'price',
            baseName: 'price',
            type: 'string',
        },
        {
            name: 'timeInForce',
            baseName: 'time_in_force',
            type: 'Order.TimeInForce',
        },
        {
            name: 'iceberg',
            baseName: 'iceberg',
            type: 'string',
        },
        {
            name: 'autoBorrow',
            baseName: 'auto_borrow',
            type: 'boolean',
        },
        {
            name: 'autoRepay',
            baseName: 'auto_repay',
            type: 'boolean',
        },
        {
            name: 'left',
            baseName: 'left',
            type: 'string',
        },
        {
            name: 'filledAmount',
            baseName: 'filled_amount',
            type: 'string',
        },
        {
            name: 'fillPrice',
            baseName: 'fill_price',
            type: 'string',
        },
        {
            name: 'filledTotal',
            baseName: 'filled_total',
            type: 'string',
        },
        {
            name: 'avgDealPrice',
            baseName: 'avg_deal_price',
            type: 'string',
        },
        {
            name: 'fee',
            baseName: 'fee',
            type: 'string',
        },
        {
            name: 'feeCurrency',
            baseName: 'fee_currency',
            type: 'string',
        },
        {
            name: 'pointFee',
            baseName: 'point_fee',
            type: 'string',
        },
        {
            name: 'gtFee',
            baseName: 'gt_fee',
            type: 'string',
        },
        {
            name: 'gtMakerFee',
            baseName: 'gt_maker_fee',
            type: 'string',
        },
        {
            name: 'gtTakerFee',
            baseName: 'gt_taker_fee',
            type: 'string',
        },
        {
            name: 'gtDiscount',
            baseName: 'gt_discount',
            type: 'boolean',
        },
        {
            name: 'rebatedFee',
            baseName: 'rebated_fee',
            type: 'string',
        },
        {
            name: 'rebatedFeeCurrency',
            baseName: 'rebated_fee_currency',
            type: 'string',
        },
        {
            name: 'stpId',
            baseName: 'stp_id',
            type: 'number',
        },
        {
            name: 'stpAct',
            baseName: 'stp_act',
            type: 'Order.StpAct',
        },
        {
            name: 'finishAs',
            baseName: 'finish_as',
            type: 'Order.FinishAs',
        },
        {
            name: 'actionMode',
            baseName: 'action_mode',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return Order.attributeTypeMap;
    }
}

export namespace Order {
    export enum Status {
        Open = <any>'open',
        Closed = <any>'closed',
        Cancelled = <any>'cancelled',
    }
    export enum Type {
        Limit = <any>'limit',
        Market = <any>'market',
    }
    export enum Side {
        Buy = <any>'buy',
        Sell = <any>'sell',
    }
    export enum TimeInForce {
        Gtc = <any>'gtc',
        Ioc = <any>'ioc',
        Poc = <any>'poc',
        Fok = <any>'fok',
    }
    export enum StpAct {
        Cn = <any>'cn',
        Co = <any>'co',
        Cb = <any>'cb',
        Minus = <any>'-',
    }
    export enum FinishAs {
        Open = <any>'open',
        Filled = <any>'filled',
        Cancelled = <any>'cancelled',
        LiquidateCancelled = <any>'liquidate_cancelled',
        DepthNotEnough = <any>'depth_not_enough',
        TraderNotEnough = <any>'trader_not_enough',
        Small = <any>'small',
        Ioc = <any>'ioc',
        Poc = <any>'poc',
        Fok = <any>'fok',
        Stp = <any>'stp',
        Unknown = <any>'unknown',
    }
}
