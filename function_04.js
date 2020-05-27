/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
function main(params) {
        var text = "";
        if (params.text != undefined && params.text != null && params.text != "") {
          var res = params.text.split(" ");  
          
          if (Number.isInteger(parseInt(res[0])) && Number.isInteger(parseInt(res[1]))) {
            var answer = parseInt(res[0]) +  parseInt(res[1]);
            text = "I am adding " + res[0] + "+" + res[1] + " = " + answer;
          } else {
                text = "please send two integers";
          }
        } else {
            text = "please send two parameters";
        }
        
	    return {
            "icon_emoji": ":kmd:",
            "response_type": "ephemeral",
            "replace_original": false,
            "text":  text
        };
}
