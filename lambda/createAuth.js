exports.handler = async (event, context, callback) => {
  console.log("create Auth START.");

  console.log("request:" + JSON.stringify(event))

  if (event.request.challengeName == "CUSTOM_CHALLENGE") {
    console.log("CUSTOM");
    event.response.publicChallengeParameters = {};
    event.response.publicChallengeParameters.dismiss = "unknown"; // 少なくとも1つ必要
    event.response.privateChallengeParameters = {};
    event.response.challengeMetadata = "AIUEO";
  }

  console.log("create Auth END.")

  callback(null, event);
}