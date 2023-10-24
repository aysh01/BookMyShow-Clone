var sid = 'AC1b9ea0af8a219e50661c395ac0c75130';
var auth_token = '9d26ff6dd711350837fcdfee2f6f1afe';


var twilio = require('twilio')(sid, auth_token);
// const obj = [""];
// const obj = (ip.address());
// const myJSON = JSON.stringify(obj);

twilio.messages.create({
    from: "+15085076926",
    to: '+917774083311',
    body: "Dear Movie Enthusiast, <br>Thank you for choosing us for your cinematic adventure! 🎬 <br>Your purchase of movie tickets with us means the world. 👍<br>Lights, camera, action! 🍿🎥"
})

    .then((res) => console.log('message sent.'))
    .catch((err) => { console.log(err) });

