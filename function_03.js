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
          var i;
            for (i = 0; i < res.length; i++) {
            text += res[i] + "\n";
            } 
        } else {
            text = "please send some parameters";
        }
        
	    return {
            "icon_emoji": ":kmd:",
            "response_type": "ephemeral",
            "replace_original": false,
            "text":  text
        };
}
