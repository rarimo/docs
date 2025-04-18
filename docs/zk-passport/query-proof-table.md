Example values are available [here](https://github.com/rarimo/passport-zk-circuits/?tab=readme-ov-file#query-circuit-public-signals).
Circom works only with hex or decimal representation of signals. ASCII is used for convertion even for birthdates.

Glossary:
- Event - abstract representation of one-time verification
- Uniqueness - regiration time is earlier than event start time or passport was registered only once.


| Index | JS SDK Pub signal Name          | Description                                                                               |
|-------|-----------------------------|-------------------------------------------------------------------------------------|
| 0     | nullifier                   | The unique identifier in terms of event. If you need keep your users unique use nullifier as primary key.    |
| 1     | birthDate                   | Never should be requested without extreme need. Use birthDateLowerbound and birthDateUpperbound instead.                                  |
| 2     | expirationDate              | Please do not request it also. Use expirationDateLowerbound and expirationDateUpperbound.                                                   |
| 3     | name                        | First name of the user.                                                                                   |
| 4     | nameResidual                | Last name of the user.                                                                                    |
| 5     | nationality                 | Nationality in ISO 3166-1 alpha-3 format.                                                                                  |
| 6     | citizenship                 | Citizenship in ISO 3166-1 alpha-3 format.                                                                           |
| 7     | sex                         | M or F.                                                                                   |
| 8     | documentNumber              | Never tried to reveal....                                                                                   |
| 9     | eventID                     | Unique random indetifier of event. It guarantees the untracability.         |
| 10    | eventData                   | Some arbitrary data with constraints on it. Could be eth address or hash of email etc.                                     |
| 11    | idStateRoot                 | Root of registration tree.         |
| 12    | selector                    | Bitmask of [selected](https://github.com/rarimo/passport-zk-circuits/blob/main/README.md#selector) fields to reveal.                        |
| 13    | currentDate                 | Just current date in `yyMMdd` format.                                                                     |
| 14    | timestampLowerbound         | The value must be less than registration time.                                                                                   |
| 15    | timestampUpperbound         | The value must be greater than registration time.                                                                                    |
| 16    | identityCounterLowerbound   | The value must be less than number of registrations of the same passport.                                                                   |
| 17    | identityCounterUpperbound   | The value must be greater or equal than number of registrations of the same passport.                                                       |
| 18    | birthDateLowerbound         | The value must be less than actual birth date.                                                                      |
| 19    | birthDateUpperbound         | The value must be greater than actual birth date.                                                                           |
| 20    | expirationDateLowerbound    | The value must be less than expiration date of the passport.                                                                       |
| 21    | expirationDateUpperbound    | The value must be greater than expiration date of the passport.                                                                       |
| 22    | citizenshipMask             | Ask Denchik.                                                                                   |


## Verificator svc parametert table

| Json payload attribute | Selector value                                                                          |
| :--------------------- | :----------------------------------------------------------------------------- |
| age_lower_bound        | 32768                                                                             |
| uniqueness             | 2560                                                                           |
| nationality            | 32                                                                            |
| nationality_check      | 32                                                                           |
| event_id               | - |
| sex                    | 64                                                                           |
| expiration_lower_bound | 4096                                                                           |
