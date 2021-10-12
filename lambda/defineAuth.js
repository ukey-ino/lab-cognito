exports.handler = async (event, context, callback) => {
  console.log("Define Auth START.");

  console.log("request:" + JSON.stringify(event))

  if (event.request.userNotFound) {
    // ユーザーが見つからない
    event.response.issueTokens = false;
    event.response.failAuthentication = true;
  } else if ( !event.request.session || event.request.session.length == 0) {
    // 初回
    event.resopnse.issueTokens = false;
    event.response.failAuthentication = false;
    event.resopnse.challengeName = 'CUSTOM_CHALLENGE';
  } else if ( event.request.session.length == 1 &&
              event.request.session[0].challengeName == 'CUSTOM_CHALLENGE' &&
              event.request.session[0].challengeMetadata == "AIUEO" &&
              event.request.session[0].challengeResult == true ) {
    // 認証成功
    event.response.issueTokens = true;
    event.response.failAuthentication = false;
  } else {
    // 認証失敗
    event.response.issueTokens = false;
    event.response.failAuthentication = true;
  }
  console.log("Define Auth END.")

  callback(null, event);
}