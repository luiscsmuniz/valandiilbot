const sort = () => {
    const x = Math.floor(Math.random() * (100 - 1) + 1)
  
    return x
  }
  
  module.exports = {
    name: "bang",
    cooldown: 2,
    execute(client, channel, tags, args) {
      const value = sort()
  
      if (!args) return
  
      const user = args.split(' ')[0]
  
      if (value >= 71 && value <= 92) {
        client.say(
          channel,
          `/timeout ${user} 10s`
        )
        return client.say(
          channel,
          '(　-_･) ︻デ══一 acertou!!!',
        )
      }
  
      if (value >= 93 && value <= 100) {
        client.say(
          channel,
          `/timeout ${user} 30s`
        )
        return client.say(
          channel,
          '( -_･) ︻デ══一  (× _ ×#  HeadShot',
        )
      }
  
      return client.say(
        channel,
        '(　-_･) ︻デ══一 errou...',
      )
  
    }
  };
  