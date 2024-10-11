/**
 * UserTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {User} from "./User";

export class UserTag extends TagAbstract {
    /**
     * Returns the user object of the requester's account. For OAuth2, this requires the identify scope, which will return the object without an email, and optionally the email scope, which returns the object with an email.
     *
     * @returns {Promise<User>}
     * @throws {ClientException}
     */
    public async get(): Promise<User> {
        const url = this.parser.url('/users/@me', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<User>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
