/**
 * ChannelMessageTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {ErrorException} from "./ErrorException";
import {Message} from "./Message";

export class ChannelMessageTag extends TagAbstract {
    /**
     * Retrieves the messages in a channel.
     *
     * @returns {Promise<Array<Message>>}
     * @throws {ErrorExceptionException}
     * @throws {ClientException}
     */
    public async getAll(channelId: string, around?: string, before?: string, after?: string, limit?: number): Promise<Array<Message>> {
        const url = this.parser.url('/channels/:channel_id/messages', {
            'channel_id': channelId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'around': around,
                'before': before,
                'after': after,
                'limit': limit,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<Array<Message>>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new ErrorException(error.response.data);
                    case 404:
                        throw new ErrorException(error.response.data);
                    case 500:
                        throw new ErrorException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Retrieves a specific message in the channel. Returns a message object on success.
     *
     * @returns {Promise<Message>}
     * @throws {ErrorExceptionException}
     * @throws {ClientException}
     */
    public async get(channelId: string, messageId: string): Promise<Message> {
        const url = this.parser.url('/channels/:channel_id/messages/:message_id', {
            'channel_id': channelId,
            'message_id': messageId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new ErrorException(error.response.data);
                    case 404:
                        throw new ErrorException(error.response.data);
                    case 500:
                        throw new ErrorException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Post a message to a guild text or DM channel. Returns a message object. Fires a Message Create Gateway event. See message formatting for more information on how to properly format messages.
     *
     * @returns {Promise<Message>}
     * @throws {ErrorExceptionException}
     * @throws {ClientException}
     */
    public async create(channelId: string, payload: Message): Promise<Message> {
        const url = this.parser.url('/channels/:channel_id/messages', {
            'channel_id': channelId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new ErrorException(error.response.data);
                    case 404:
                        throw new ErrorException(error.response.data);
                    case 500:
                        throw new ErrorException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Edit a previously sent message. The fields content, embeds, and flags can be edited by the original message author. Other users can only edit flags and only if they have the MANAGE_MESSAGES permission in the corresponding channel. When specifying flags, ensure to include all previously set flags/bits in addition to ones that you are modifying. Only flags documented in the table below may be modified by users (unsupported flag changes are currently ignored without error).
     *
     * @returns {Promise<Message>}
     * @throws {ErrorExceptionException}
     * @throws {ClientException}
     */
    public async update(channelId: string, messageId: string, payload: Message): Promise<Message> {
        const url = this.parser.url('/channels/:channel_id/messages/:message_id', {
            'channel_id': channelId,
            'message_id': messageId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PATCH',
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new ErrorException(error.response.data);
                    case 404:
                        throw new ErrorException(error.response.data);
                    case 500:
                        throw new ErrorException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Delete a message. If operating on a guild channel and trying to delete a message that was not sent by the current user, this endpoint requires the MANAGE_MESSAGES permission.
     *
     * @returns {Promise<void>}
     * @throws {ErrorExceptionException}
     * @throws {ClientException}
     */
    public async remove(channelId: string, messageId: string): Promise<void> {
        const url = this.parser.url('/channels/:channel_id/messages/:message_id', {
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
                    case 400:
                        throw new ErrorException(error.response.data);
                    case 404:
                        throw new ErrorException(error.response.data);
                    case 500:
                        throw new ErrorException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Crosspost a message in an Announcement Channel to following channels. This endpoint requires the SEND_MESSAGES permission, if the current user sent the message, or additionally the MANAGE_MESSAGES permission, for all other messages, to be present for the current user.
     *
     * @returns {Promise<Message>}
     * @throws {ErrorExceptionException}
     * @throws {ClientException}
     */
    public async crosspost(channelId: string, messageId: string): Promise<Message> {
        const url = this.parser.url('/channels/:channel_id/messages/:message_id/crosspost', {
            'channel_id': channelId,
            'message_id': messageId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new ErrorException(error.response.data);
                    case 404:
                        throw new ErrorException(error.response.data);
                    case 500:
                        throw new ErrorException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
