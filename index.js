const client = new Discord.Client();
client.start = 0;

client.on("ready", async () => {
  client.start = Date.now();
});

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

client.login(token);
