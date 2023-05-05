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

/* tslint:disable:no-unused-locals */
import { CreateUniLoan } from '../model/createUniLoan';
import { MaxUniBorrowable } from '../model/maxUniBorrowable';
import { UniCurrencyPair } from '../model/uniCurrencyPair';
import { UniLoan } from '../model/uniLoan';
import { UniLoanInterestRecord } from '../model/uniLoanInterestRecord';
import { UniLoanRecord } from '../model/uniLoanRecord';
import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class MarginUniApi {
    protected client: ApiClient;

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client;
        } else {
            this.client = new ApiClient();
        }
    }

    /**
     *
     * @summary List lending markets
     */
    public async listUniCurrencyPairs(): Promise<{ response: AxiosResponse; body: Array<UniCurrencyPair> }> {
        const localVarPath = this.client.basePath + '/margin/uni/currency_pairs';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = [];
        return this.client.request<Array<UniCurrencyPair>>(config, 'Array<UniCurrencyPair>', authSettings);
    }

    /**
     *
     * @summary Get detail of lending market
     * @param currencyPair Currency pair
     */
    public async getUniCurrencyPair(currencyPair: string): Promise<{ response: AxiosResponse; body: UniCurrencyPair }> {
        const localVarPath =
            this.client.basePath +
            '/margin/uni/currency_pairs/{currency_pair}'.replace(
                '{' + 'currency_pair' + '}',
                encodeURIComponent(String(currencyPair)),
            );
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currencyPair' is not null or undefined
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling getUniCurrencyPair.');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = [];
        return this.client.request<UniCurrencyPair>(config, 'UniCurrencyPair', authSettings);
    }

    /**
     *
     * @summary List loans
     * @param opts Optional parameters
     * @param opts.currencyPair Currency pair
     * @param opts.currency Retrieve data of the specified currency
     * @param opts.page Page number
     * @param opts.limit Maximum response items.  Default: 100, minimum: 1, Maximum: 100
     */
    public async listUniLoans(opts: {
        currencyPair?: string;
        currency?: string;
        page?: number;
        limit?: number;
    }): Promise<{ response: AxiosResponse; body: Array<UniLoan> }> {
        const localVarPath = this.client.basePath + '/margin/uni/loans';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }

        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<UniLoan>>(config, 'Array<UniLoan>', authSettings);
    }

    /**
     *
     * @summary Borrow or repay
     * @param createUniLoan
     */
    public async createUniLoan(createUniLoan: CreateUniLoan): Promise<{ response: AxiosResponse; body?: any }> {
        const localVarPath = this.client.basePath + '/margin/uni/loans';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);

        // verify required parameter 'createUniLoan' is not null or undefined
        if (createUniLoan === null || createUniLoan === undefined) {
            throw new Error('Required parameter createUniLoan was null or undefined when calling createUniLoan.');
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(createUniLoan, 'CreateUniLoan'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<any>(config, '', authSettings);
    }

    /**
     *
     * @summary Get load records
     * @param opts Optional parameters
     * @param opts.type type: borrow - borrow, repay - repay
     * @param opts.currency Retrieve data of the specified currency
     * @param opts.currencyPair Currency pair
     * @param opts.page Page number
     * @param opts.limit Maximum response items.  Default: 100, minimum: 1, Maximum: 100
     */
    public async listUniLoanRecords(opts: {
        type?: 'borrow' | 'repay';
        currency?: string;
        currencyPair?: string;
        page?: number;
        limit?: number;
    }): Promise<{ response: AxiosResponse; body: Array<UniLoanRecord> }> {
        const localVarPath = this.client.basePath + '/margin/uni/loan_records';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(opts.type, "'borrow' | 'repay'");
        }

        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<UniLoanRecord>>(config, 'Array<UniLoanRecord>', authSettings);
    }

    /**
     *
     * @summary List interest records
     * @param opts Optional parameters
     * @param opts.currencyPair Currency pair
     * @param opts.currency Retrieve data of the specified currency
     * @param opts.page Page number
     * @param opts.limit Maximum response items.  Default: 100, minimum: 1, Maximum: 100
     */
    public async listUniLoanInterestRecords(opts: {
        currencyPair?: string;
        currency?: string;
        page?: number;
        limit?: number;
    }): Promise<{ response: AxiosResponse; body: Array<UniLoanInterestRecord> }> {
        const localVarPath = this.client.basePath + '/margin/uni/interest_records';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }

        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<UniLoanInterestRecord>>(config, 'Array<UniLoanInterestRecord>', authSettings);
    }

    /**
     *
     * @summary Get maximum borrowable
     * @param currency Retrieve data of the specified currency
     * @param currencyPair Currency pair
     */
    public async getUniBorrowable(
        currency: string,
        currencyPair: string,
    ): Promise<{ response: AxiosResponse; body: MaxUniBorrowable }> {
        const localVarPath = this.client.basePath + '/margin/uni/borrowable';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling getUniBorrowable.');
        }

        // verify required parameter 'currencyPair' is not null or undefined
        if (currencyPair === null || currencyPair === undefined) {
            throw new Error('Required parameter currencyPair was null or undefined when calling getUniBorrowable.');
        }

        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');

        localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(currencyPair, 'string');

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<MaxUniBorrowable>(config, 'MaxUniBorrowable', authSettings);
    }
}
