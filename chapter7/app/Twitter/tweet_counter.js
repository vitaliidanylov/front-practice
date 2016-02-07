var ntwitter = require("ntwitter"),    
	redis = require("redis"), // require the redis module    
	credentials = require("./credentials.json"),    
	redisClient,    
	counts = {},    
	twitter;
	twitter = ntwitter(credentials);

client = redis.createClient();
// the callback gets two arguments 
	client.get("awesome", function (err, awesomeCount) {    
	// check to make sure there's no error    
	if (err !== null) {        
		console.log("ERROR: " + err);
        // exit the function        
        return;    
    }
    // initialize our counter to the integer version    
    // of the value stored in Redis, or 0 if it's not    
    // set    
    counts.awesome = parseInt(awesomeCount,10) || 0;
 
 	twitter.stream(        
 		"statuses/filter",        
 		{ track: ["awesome", "cool", "rad", "gnarly", "groovy"] },        
 		function(stream) {
 		        stream.on("data", function(tweet) {                
 		        if (tweet.text.indexOf("awesome") >= -1) {                    
 		        // increment the key on the client                    
 		        client.incr("awesome");                    
 		        counts.awesome = counts.awesome + 1; 
  }            
});        
 		    }    
 		    ); 
 });
module.exports = counts; 