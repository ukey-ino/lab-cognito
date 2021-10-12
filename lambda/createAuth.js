exports.handler = async (event, context, callback) => {
  console.log("create Auth START.");

  if (event.request.challengeName == "CUSTOM_CHALLENGE") {
    event.response.challengeMetadata = "AIUEO";
  }

  console.log("create Auth END.")

  callback(null, event);
}