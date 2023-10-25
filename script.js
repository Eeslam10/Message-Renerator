
const messages = ["Love all, trust a few, do wrong to none", "You call it madness, but I call it love", "We can only learn to love by loving", "A life lived in love will never be dull", "Life is the flower for which love is the honey"]

const generateMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    randomMessages = messages[randomIndex];
    console.log(randomMessages)
};

generateMessage()

