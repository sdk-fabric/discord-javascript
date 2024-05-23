/**
 * ChannelReactionTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {User} from "./User";

export class ChannelReactionTag extends TagAbstract {
    /**
     * @returns {Promise<Array<User>>}
     * @throws {ClientException}
     */
    public async getAll(channelId: string, messageId: string, emoji: string, type?: number, after?: string, limit?: number): Promise<Array<User>> {
        const url = this.parser.url('/channels/:channel_id/messages/:message_id/reactions/:emoji', {
            'channel_id': channelId,
            'message_id': messageId,
            'emoji': emoji,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'type': type,
                'after': after,
                'limit': limit,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<Array<User>>(params);
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

    /**
     * @returns {Promise<void>}
     * @throws {ClientException}
     */
    public async deleteAll(channelId: string, messageId: string): Promise<void> {
        const url = this.parser.url('/channels/:channel_id/messages/:message_id/reactions', {
            'channel_id': channelId,
            'message_id': messageId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request(params);
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