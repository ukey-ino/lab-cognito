var poolData = {
  UserPoolId: '', // INPUT
  ClientId: '', // INPUT
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var userData = {
  Pool: userPool,
}

function start(){
  var userName = $("#username").val();
  userData.Username = userName;
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.setAuthenticationFlowType('CUSTOM_AUTH');
  var AuthenticateDetails = new AmazonCognitoIdentity.AuthenticationDetails({
    Username: userName
  });
  cognitoUser.initiateAuth(AuthenticateDetails, {
    onSuccess: function(result) {
      console.log("SUCCESS");
    },
    onFailure: function(err) {
      console.log("FAILED");
    },
    customChallenge: function(challengeParams) {
      console.log("CHALLENGE");
      var challengeResponses = 'RESULT';
      cognitoUser.sendCustomChallengeAnswer(challengeResponses, this);
    }
  })

}

function next(){

}