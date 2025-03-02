/**
 * Message automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {MessageEmbed} from "./MessageEmbed";
import {MessageAllowedMentions} from "./MessageAllowedMentions";

export interface Message {
    content?: string
    nonce?: string
    tts?: boolean
    embeds?: Array<MessageEmbed>
    allowed_mentions?: MessageAllowedMentions
    message_reference?: string
    flags?: number
    enforce_nonce?: boolean
}

