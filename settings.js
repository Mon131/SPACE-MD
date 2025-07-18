require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAGSz8lrSRfN5aAQAAI4HAAAKAAAAY3JlZHMuanNvbpVUXY+iSBT9K5N62o1mRPkSk04WUGkU1Aaxhc08FFAg8mlVoeDE*z5Bu6fnYXe2l6eiqnLuueecW99BUSYELVELJt9BhZMzpKhb0rZCYAKUOooQBn0QQgrBBLjG7sDIor9CMNS80OSu9YashdrI5k6oGH6wSAjXRFhgyydw64Oq9rMk+A0gZ6*S14NiCOeqKLLdrHKa8XE75pIoJIt4bvfqvSeqxOXS9AncOkSY4KSIZ9UB5QjDbInaDUzw5+jr6poKQ5rW05xBfl2PGWL7SBZ0gYvsQSm713ScNKnoFPrn6JuvnqBFBmc*59GWHXlj3ZtvRdOpnAF7iVOG2y7YUBm+qpr8oE+SuEChHqKCJrT9tO695QU5071k9Y656BaNTjjUC8SdULL6tGm3G0klSqCar0Pzc8RTqvKsGUDJES+rnlLHm0xBK28f25thxY9O4mFOsaWarOL8SnyD37OS*h*dbe1ghCg6jn1WmufiftgWnlrXpOVmFbbFyK74CyPVps0yn6O*GU+VLYNH8bZ3frFf3Fg7lXptnXcDw5LMZX5M2GEjRdgqyg*6kNb4dyxH21Oaucss9Lc6Kp0Bq*hLccxLXsoYz2o21Otsqi2yUWZ4J449nPQVbtI8zINzL+LWFjww18pem22OjFUeabnrcUz88nTvKEWtHoLJ8NYHGMUJoRjSpCzueyLXBzA82yjAiN7lBdOFELlV5g7ksZDtlBZN+UWkbnqD6si9DObPQZNde9Pl8*WSPoE+qHAZIEJQ+JwQWuLWRITAGBEw+ftbHxSooQ*junLssA+iBBPqFHWVlTB8d*X9EAZBWRfUbotA7RYIgwnzsY0oTYqYdDrWBcTBITkj9QApAZMIZgT97BBhFIIJxTX6ObVqGXbCayvueS7NJdAH+d2QJOzk5wVRYIc8w42kyYj9i3y9dLCwqr4WiII+KGB3G7iw+KIdEKXlFxOG6Msfrmb+Cfoge0NhJJ7nRwLLiwzLdEDdwe1nA129EFGYZARMgLqoz7HAKDPDdoSxqWmyHstqLIOPht+T83CmV46W*mLO14t5KbgXaz8toTTjB5vIZl0lE4d5j1KqL1aM8*QPIGACwgM3IFzvSvRT0ljcNahz3T0d18fwxeHGyyHbmEsuiB1*KqdqbHB7N6roq7ITZyXdnomjlkxja0ngsU6xzkh2wlyrdjHrgxCdkwD9WkwsC3u4yYuTrdL0QpdmvDMWBcPuzHZQx7UjW6u8shpBdLIizntlyuM6FV8M09vZa8Hec*zMoo3jx83atrdkuRRU7XB5ZPo+U9nbW5bc09ZZ2f1GCbo*DW+W*ae1D+JdAplb*xeMt8fmXwZWiU6rJG8t5CcWXOfmbHcRtLO1jq4sQ0eyhyTvjH3fVrfhHNxu3*qgyiCNSpyDCSC5D0Ef4LLu8qwXUfmbSqrM6LP40XYGCZU*ZmSb5IhQmFfdJPOjsSgKI*Zxa4PL6hmSQ6eAxsl53QW+lavKppC+jxyQu0*HBbj9AFBLAQIUAxQAAAgIAGSz8lrSRfN5aAQAAI4HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAJAEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Mon131',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 'mukalazk12',
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
