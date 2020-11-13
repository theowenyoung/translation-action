const tencentcloud = require("tencentcloud-sdk-nodejs")

module.exports = (apiKey, text, lang, addParam, addParam2,addParam3,addParam4) => {
  const TmtClient = tencentcloud.tmt.v20180321.Client

  const clientConfig = {
    credential: {
      secretId: addParam,
      secretKey: apiKey,
    },
    region: addParam2,
    profile: {
      httpProfile: {
        endpoint: "tmt.tencentcloudapi.com",
      },
    },
  }

  const client = new TmtClient(clientConfig)
  const params = {
    SourceText: text,
    Source: addParam3,
    Target: lang,
    ProjectId: addParam4 || 0,
  }
  return client.TextTranslate(params).then(
    data => {
      return data.TargetText
    }
  )

}
