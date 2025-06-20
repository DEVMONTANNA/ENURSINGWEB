// function rockPaperScissorsGame() {
//   let storeValue = ["Rock", "Paper", "Scissors"];
//   let randomNumberGenerator = Math.floor(Math.random() * 4);

//   let userChoice = prompt(
//     "Choose an option. 'Rock', 'Paper', 'Scissors' "
//   ).toLowerCase();

//   let computerChoice = storeValue[randomNumberGenerator].toLowerCase();
//   console.log("Computer chose " + computerChoice);
//   console.log("User chose " + userChoice);

//   switch (userChoice + " and " + computerChoice) {
//     case "rock and scissors":
//     case "scissors and paper":
//     case "paper and rock":
//       console.log("User Wins!!!!!");

//       break;
//     case "scissors and rock":
//     case "paper and scissors":
//     case "rock and paper":
//       console.log("Computer wins!!!!");

//       break;
//     case "scissors and scissors":
//     case "paper and paper":
//     case "rock and rock":
//       console.log("its a tie");

//       break;

//     default:
//       console.log("Invalid choice, pls make a choice");
//   }
// }

// rockPaperScissorsGame();

// function secretNumberGuess() {
//   let computerRandomNum = Math.floor(Math.random() * 10) + 1;
//   console.log(computerRandomNum);

//   let userInput = Number(prompt("Choose a number from 1-10"));
//   let numberOfAttempts = Number(localStorage.getItem("numberOfAttempts")) || 0;
//   numberOfAttempts++;
//   localStorage.setItem("numberOfAttempts", numberOfAttempts);

//   console.log(`You chose number ${userInput}`);

//   if (userInput > computerRandomNum) {
//     console.log("Too High try again");
//   } else if (userInput < computerRandomNum) {
//     console.log("Too low Try again ");
//   } else if (userInput === computerRandomNum) {
//     console.log("You guessed the number correctly");
//     console.log("You attempted " + numberOfAttempts + " times before getting the correct guess");
//     localStorage.removeItem("numberOfAttempts")
//   } else {
//     console.log("Invalid ");
//   }

//   const playAgain = prompt("Do you want to play Again ? (yes/no)");
//   let playAgainPrompt = playAgain ? playAgain.toLowerCase() : "no";
//   if (playAgainPrompt === "yes") {
//     secretNumberGuess();
//   } else {
//     console.log("Thanks for playing, see you next time");
//   }
// }

// secretNumberGuess();

// function precious() {
//   alert("Precious is a good boy");
//   let vvv = document.querySelector(".pres");
//   vvv.style.color = "white";
//   vvv.style.background = 'blue'
//   vvv.style.border = 'none'
//   vvv.style.padding = '20px'
//   vvv.style.borederRadius = '20px'

//   console.log(vvv);
// }

const objectArry = [
  {
    name: ["Goodluck", "Montanna", "Chiedozie"],
    age: [12, 20, 22, 30],
    hobbies: ["playing", "sleeping", "reading"],
  },
  {
    name: ["f", "c", "d"],
    age: [12, 20, 22, 30],
    hobbies: ["playing", "sleeping", "reading"],
  },
];

// console.log(objectArry[0].name.slice(0, 1));

const englishQuestions = [
  {
    question: "Which of the following is a grammatically correct sentence?",
    options: [
      "He don't like to read.",
      "He doesn't likes to read.",
      "He doesn't like to read.",
      "He not like to read.",
    ],
    answer: "He doesn't like to read.",
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "They has finished their homework.",
      "They have finished their homework.",
      "They is finished their homework.",
      "They are finished their homework.",
    ],
    answer: "They have finished their homework.",
  },
  {
    question: "Which sentence is in the past tense?",
    options: [
      "I eat breakfast at 8 AM.",
      "I am eating breakfast.",
      "I ate breakfast at 8 AM.",
      "I will eat breakfast at 8 AM.",
    ],
    answer: "I ate breakfast at 8 AM.",
  },
  {
    question: "Choose the sentence with correct subject-verb agreement:",
    options: [
      "The dogs barks loudly.",
      "The dog bark loudly.",
      "The dog barks loudly.",
      "The dogs barks loud.",
    ],
    answer: "The dog barks loudly.",
  },
  {
    question: "Which of the following is the correct use of punctuation?",
    options: [
      "Let's eat grandma!",
      "Lets eat, grandma!",
      "Let's eat, grandma!",
      "Lets, eat grandma!",
    ],
    answer: "Let's eat, grandma!",
  },
  {
    question: "What is the synonym of the word 'happy'?",
    options: ["Angry", "Joyful", "Tired", "Sad"],
    answer: "Joyful",
  },
  {
    question: "What is the antonym of the word 'honest'?",
    options: ["Truthful", "Sincere", "Dishonest", "Kind"],
    answer: "Dishonest",
  },
  {
    question: "Choose the correct form of the verb: 'She _____ a book now.'",
    options: ["read", "reads", "is reading", "has read"],
    answer: "is reading",
  },
  {
    question: "Which sentence is in the future tense?",
    options: [
      "He will travel tomorrow.",
      "He travels now.",
      "He is travelling.",
      "He traveled yesterday.",
    ],
    answer: "He will travel tomorrow.",
  },
  {
    question: "Which word is a **conjunction**?",
    options: ["Because", "Running", "Quickly", "Happiness"],
    answer: "Because",
  },
];

const foundationOfNursingQuestions = [
  {
    foundationQuestions: "Who is considered the founder of modern nursing?",
    foundationOptions: [
      "Florence Nightingale",
      "Clara Barton",
      "Mary Seacole",
      "Lillian Wald",
    ],
    foundationAnswer: "Florence Nightingale",
  },
  {
    foundationQuestions:
      "Which of the following best describes evidence-based practice in nursing?",
    foundationOptions: [
      "Using trial and error to provide care",
      "Following doctor's instructions blindly",
      "Using clinical expertise and research evidence to make decisions",
      "Repeating past routines",
    ],
    foundationAnswer:
      "Using clinical expertise and research evidence to make decisions",
  },
  {
    foundationQuestions: "What is the primary goal of the nursing process?",
    foundationOptions: [
      "To complete paperwork",
      "To deliver individualized, effective patient care",
      "To impress hospital administrators",
      "To reduce hospital expenses",
    ],
    foundationAnswer: "To deliver individualized, effective patient care",
  },
  {
    foundationQuestions:
      "Which of the following is a legal responsibility of a professional nurse?",
    foundationOptions: [
      "Documenting patient care accurately",
      "Administering medication without prescription",
      "Ignoring patient complaints",
      "Sharing patient details publicly",
    ],
    foundationAnswer: "Documenting patient care accurately",
  },
  {
    foundationQuestions: "What is the purpose of patient advocacy in nursing?",
    foundationOptions: [
      "To promote the nurse’s opinion",
      "To challenge hospital rules",
      "To protect patient rights and interests",
      "To assist hospital PR teams",
    ],
    foundationAnswer: "To protect patient rights and interests",
  },
];

let htmlOutput = "";
const pharm = document.querySelector(".FoundationOfNursingContainerr");

foundationOfNursingQuestions.forEach((quest, i) => {
  htmlOutput += `<p>Q${i + 1}: ${quest.foundationQuestions}</p>`;
  htmlOutput += "<ul>";
  quest.foundationOptions.forEach((optt) => {
    htmlOutput += `<input class="checker" type='checkbox'>${optt}</input><br>`;
    htmlOutput += `<p class="stater" style="display:none"></p>`;
  });
  htmlOutput += "</ul>";
});

htmlOutput += `<button style="background-color:#7fb0f1; color:white; border:none " onClick="closeSection2()">Back</button>`;
htmlOutput += `<button style="background-color:#7fb0f1;  float:right; color:white; border:none " onClick="reloadPage()">Submit</button>`;

pharm.innerHTML = htmlOutput;

let htmlOutputEnglish = "";
const container = document.querySelector(".quizContainer");
englishQuestions.forEach((q, index) => {
  htmlOutputEnglish += `<p>Q${index + 1}: ${q.question}</p>`;
  htmlOutputEnglish += "<ul>";
  q.options.forEach((opp) => {
    htmlOutputEnglish += `<li style="list-style-type: none">
    <label>
    <input class="checker" type="checkbox" value="${opp} "> ${opp} 
     </label>
      <p class="staterv" style="display:none"></p>
      </li>`;
  });
  htmlOutputEnglish += "</ul>";
});
htmlOutputEnglish += `<button style="background-Color:#7fb0f1; color:white; border:none "   onClick="closeSection()">Back</button>`;
htmlOutputEnglish += `<button  class='hidesubmit' style=" background-color:#7fb0f1; float:right; color:white; border:none   " onClick="submit()">Submit</button>`;
container.innerHTML = htmlOutputEnglish;

document.querySelectorAll(".checker").forEach((checkbox) => {
  if (localStorage.getItem("score") === null) {
    localStorage.setItem("score", "0");
  }
  checkbox.addEventListener("change", function () {
    const li = this.closest("li");
    const statP = li?.querySelector(".staterv");
    // const statP = this.closest("li")?.querySelector(".starterv");
    if (!statP) {
      console.warn("starterv not found");
      return;
    }

    if (this.checked) {
      statP.innerHTML = "✅ You selected: " + this.value;
      statP.style.display = "block";
      if (
        this.value.trim() === englishQuestions[0].answer.trim() ||
        this.value.trim() === englishQuestions[1].answer.trim() ||
        this.value.trim() === englishQuestions[2].answer.trim() ||
        this.value.trim() === englishQuestions[3].answer.trim() ||
        this.value.trim() === englishQuestions[4].answer.trim() ||
        this.value.trim() === englishQuestions[5].answer.trim() ||
        this.value.trim() === englishQuestions[6].answer.trim() ||
        this.value.trim() === englishQuestions[7].answer.trim() ||
        this.value.trim() === englishQuestions[8].answer.trim() ||
        this.value.trim() === englishQuestions[9].answer.trim() ||
        this.value.trim() === englishQuestions[10].answer.trim()
      ) {
        alert("You got it very correct ✅✅✅");
        let currentScore = parseInt(localStorage.getItem("score"), 10) || 0;
        currentScore++;
        localStorage.setItem("score", currentScore.toString());
        if (currentScore === 10) {
          alert("hi its 18");
        }
        localStorage.setItem("score", currentScore.toString());
      } else {
        alert("hi");
      }
      // alert(statP.innerHTML);
    } else {
      statP.style.display = "none";
    }
  });
});

// submit reload button function
function submit() {
  let ff = (document.getElementById("detailsSection").open = false);
  if (ff === false) {
    let listener = document.querySelector(".quizContainer");
    listener.style.display = "none";
  } else {
    let listener = document.querySelector(".quizContainer");
    listener.style.display = "block";
  }

  function hideAll() {
    const displayScore = document.querySelector(".gettingscoretext2");
    const hidingGettingScore = document.querySelector(".sectionlast");
    if (hidingGettingScore) {
      hidingGettingScore.style.display = "block";
    } else {
      alert("hello");
    }
    displayScore.style.display = "flex";
    displayScore.style.background = "green";
    if (displayScore) {
      // displayScore.innerText = "Score: " + localStorage.getItem("score");
    }
  }
  hideAll();
  setTimeout(() => {
    hideAll();
  }, 1000);
}
// function to control details open and close
function detailsSection() {
  document.getElementById("detailsSection").open = true;
}
function detailsSection2() {
  document.getElementById("detailsSectionn").open = true;
}
// function to control details  close
function closeSection() {
  let ff = (document.getElementById("detailsSection").open = false);
  if (ff === false) {
    let listener = document.querySelector(".quizContainer");
    listener.style.display = "none";
  } else {
    let listener = document.querySelector(".quizContainer");
    listener.style.display = "block";
  }
}
function closeSection2() {
  let ff = (document.getElementById("detailsSectionn").open = false);
  if (ff === false) {
    let listener = document.querySelector(".FoundationOfNursingContainerr");
    listener.style.display = "none";
  } else {
    let listener = document.querySelector(".FoundationOfNursingContainerr");
    listener.style.display = "block";
  }
}

// function to control test display question
function takeTestCall() {
  let listener = document.querySelector(".quizContainer");
  listener.style.display = "block";
}
function takeTestCall2() {
  let bb = document.querySelector(".FoundationOfNursingContainerr");
  bb.style.display = "block";
}

// function to control test question cancellation
function cancelTestCall() {
  let listener = document.querySelector(".FoundationOfNursingContainer");
  listener.style.display = "none";
}

// immediate loader

window.addEventListener("load", function () {
  setTimeout(() => {
    const loadergetter1 = document.querySelector(".loadersection");
    const loadergetter2 = document.querySelector(".loadertext");
    const loadergetter3 = document.querySelector(".displaythings");

    if (loadergetter1 && loadergetter2 && loadergetter3) {
      loadergetter1.style.display = "none";
      loadergetter2.style.display = "none";
      loadergetter3.style.display = "block";
    } else {
      // alert("hh");
    }
  }, 3000);
});

// function pageloader() {
//   const loaderpage = document.querySelector(".loaderarea");
//   loaderpage.style.display = "block";
// }

// setTimeout(() => {
//   pageloader();
// }, 3000);

// / const checboxChecker = document.querySelector(".checker");
// const statusss = document.querySelector(".stater");

// checboxChecker.addEventListener("change", function () {
//   if(this.checked){
//     console.log('yes',  this.value);

//   }
//   // if (checboxChecker.checked) {
//   //   document.querySelector(".stater").style.display = "block";
//   //   let storage = localStorage.setItem("Checkboxstorage", "storage");
//   //   if (checboxChecker.checked) {
//   //     storage++;
//   //   } else {
//   //     console.log("Error");
//   //   }
//   //   console.log("Checkbox is checked and value stored");
//   //   let stiredisplay = localStorage.getItem("Checkedboxstorage", "storage");
//   //   console.log(stiredisplay);

//   //   statusss.innerHTML = "Checkbox is checked";
//   // } else {
//   //   statusss.style.display = "none";
//   // }
//   console.log(statusss);
// });
