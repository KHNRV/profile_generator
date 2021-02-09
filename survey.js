const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name, activity, listen, meal, food, sport, superpower;

rl.question(
  "What's your name? Nicknames are also acceptable :) \n",
  (answer) => {
    name = answer;
    rl.question("What's an activity you like doing? \n", (answer) => {
      activity = answer;
      rl.question("What do you listen to while doing that? \n", (answer) => {
        listen = answer;
        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.) \n",
          (answer) => {
            meal = answer;
            rl.question(
              "What's your favourite thing to eat for that meal? \n",
              (answer) => {
                food = answer;
                rl.question(
                  "Which sport is your absolute favourite? \n",
                  (answer) => {
                    sport = answer;
                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at! \n",
                      (answer) => {
                        superpower = answer;
                        setTimeout(() => {
                          console.log(`
                  ------------------------
                  ----- YOUR PROFILE -----
                  ------------------------
                  
                  ${name} is not an ordinary person. Every morning, ${name} practices ${activity} 
                  while playing ${sport} at the same time. While being impressive, this is far 
                  from being ${name}'s superpower. Did you know that ${name} is the only person
                  in the world with the power of ${superpower}. Yep, and apparently it's pretty
                  impressive to watch while listening to ${listen}. Between us, I heard that 
                  ${name}'s superpower secret reside in eating ${food} every day for ${meal}.
                  Impressive right?!`);
                        }, 1000);
                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
