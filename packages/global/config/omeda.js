module.exports = ({
  clientKey = 'client_cma',
  brandKey = 'cma',
  appId = process.env.OMEDA_APP_ID,
  inputId = process.env.OMEDA_INPUT_ID,
  graphqlUri = 'https://graphql.omeda.parameter1.com/',
  rapidIdentification = { productId: 13 },
  promoCodeCookieName,
  promoCodeDefault,
} = {}) => ({
  clientKey,
  brandKey,
  appId,
  inputId,
  graphqlUri,
  rapidIdentification,
  promoCodeCookieName,
  promoCodeDefault,
});
