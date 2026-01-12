// greeting for when you first start the application
const greetings = {
    morning: () => {
        console.log('Good Morning!, ready to work?');
    },
    evening: () => {
        console.log('Good Afternoon!, Ready to work?');
    }
}
const greetTime = () => {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    if(hour < 12){
        console.log(`the current time is ${hour}:${minute}am`)
        greetings.morning();
    } else {
        console.log(`the current time is ${hour}:${minute}pm in the afternoon`)
        greetings.evening();
    }
};

module.exports = {
    greetings,
    greetTime,
};