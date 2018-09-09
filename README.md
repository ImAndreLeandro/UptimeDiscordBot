# UptimerDiscordBot
Hello there, in this repository I explain how to do a uptimer system for your Discord Bot in JavaScript!
It's actually really simple and easy to do! ;)

### 1- Let's get started
To start we need to regist on our main class a variavel where you store the current date when the bot gets ready/online!
```js
const client = new Discord.Client();
client.start = 0;

client.on("ready", async () => {
  client.start = Date.now();
});
```

### 2- Calculating the time online
To do this, we will need to subtract the current date with the starting date and then divide by 1000 to get in seconds!
And we will use `Math.ceil` because we don't want decimals in our total, just the seconds;
```js
let total = Math.ceil((Date.now() - client.start)/1000);
```

### 3- Making a good-looking message
In order to accomplish this we will need to check how many minutes and hours the total have and if there is any, it will be added to the message!
But let's start by making the inicial!
```js
let hours = 0, minutes = 0, seconds = total;

let msg = "Time:";

msg += `${seconds}s`;
```
So, this isn't getting if it has hours or minutes, so lets start by seeing how many it has and if it has more than `0`, it will added to the message!
```js
let hours = 0, minutes = 0, seconds = total;

while (seconds > 59) {
  seconds -= 60;
  minutes++;
}

while(minutes > 59) {
  minutes -= 60;
  hours;
}

let msg = "Time:";
if (hours > 0) {
  time += ` ${hours}h`;
}
if (minutes > 0) {
  time += ` ${minutes}m`;
}
msg += `${seconds}s`;
```

### 4- Now the command
You can use a command handler or other stuffs but I will make something really simple and then you put it on your command! ;)
```js
client.on("message", async message => {
  let msg = message.content.toLowerCase();
  if (msg === "!uptime") {
    let hours = 0, minutes = 0, seconds = total;

    while (seconds > 59) {
      seconds -= 60;
      minutes++;
    }

    while(minutes > 59) {
      minutes -= 60;
      hours;
    }

    let msg = "Time:";
    if (hours > 0) {
      time += ` ${hours}h`;
    }
    if (minutes > 0) {
      time += ` ${minutes}m`;
    }
    msg += ` ${seconds}s`;
    message.channel.send(msg);
  }
});```
