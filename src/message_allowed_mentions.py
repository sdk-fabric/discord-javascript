"""
message_allowed_mentions automatically generated by SDKgen please do not edit this file manually
https://sdkgen.app
"""

from dataclasses import dataclass
from dataclasses_json import dataclass_json
from typing import List
@dataclass_json
@dataclass
class MessageAllowedMentions:
    parse: List[str]
    roles: List[str]
    users: List[str]
    replied_user: bool
