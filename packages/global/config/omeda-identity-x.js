module.exports = ({
  omedaConfig,
  idxConfig,
  rapidIdentProductId,
  websiteBehaviorAttributeId,
  // Passed through, if specified.
  appendPromoCodeToHook = [],
  appendBehaviorToHook = [],
  appendDemographicToHook = [],
}) => ({
  clientKey: omedaConfig.clientKey,
  brandKey: omedaConfig.brandKey,
  appId: omedaConfig.appId,
  inputId: omedaConfig.inputId,
  rapidIdentProductId,
  idxConfig,

  /**
   * Behavior config is now mandatory and can be generated by the CLI.
   * @see https://github.com/parameter1/identity-x-omeda-cli
   *  */
  behaviors: {
    logIn: 9,
    verifyEmail: 11,
    submitProfile: 10,
  },
  behaviorAttributes: {
    website: {
      id: 7,
      valueId: websiteBehaviorAttributeId,
    },
    actionSource: {
      id: 6,
      valueIds: {
        default: 21141,
        newsletterSignup: 21143,
        comments: 21145,
        contentGate: 21139,
      },
    },
    newsletterSignupType: {
      id: 4,
      valueIds: {
        default: 21138,
        pushdown: 21136,
        inlineContent: 21144,
        inlineSection: 21142,
        footer: 21134,
      },
    },
    contentGateType: {
      id: 5,
      valueIds: {
        default: 21135,
        metered: 21137,
        printPreview: 21140,
      },
    },
  },
  appendPromoCodeToHook,
  appendBehaviorToHook,
  appendDemographicToHook,
});
