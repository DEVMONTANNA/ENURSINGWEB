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
    question: "Which of the following is a correct sentence?",
    options: [
      "She go to the hospital everyday.",
      "She goes to the hospital every day.",
      "She going to the hospital every day.",
      "She gone to the hospital every day.",
    ],
    answer: "She goes to the hospital every day.",
  },
  {
    question: "Choose the correct meaning of the word 'empathy':",
    options: [
      "Feeling sorry for someone",
      "Understanding and sharing another person's feelings",
      "Ignoring someone’s feelings",
      "Explaining your emotions to others",
    ],
    answer: "Understanding and sharing another person's feelings",
  },
  {
    question: "Which sentence is in the past tense?",
    options: [
      "The nurse is checking the patient's blood pressure.",
      "The nurse checks the patient's blood pressure.",
      "The nurse checked the patient's blood pressure.",
      "The nurse will check the patient's blood pressure.",
    ],
    answer: "The nurse checked the patient's blood pressure.",
  },
  {
    question: "What is the antonym of the word 'accurate'?",
    options: ["Precise", "Correct", "Wrong", "Exact"],
    answer: "Wrong",
  },
  {
    question:
      "Which of the following is a question tag for: 'The nurse is on duty,'?",
    options: ["isn't she?", "does she?", "wasn't she?", "didn't she?"],
    answer: "isn't she?",
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
htmlOutput += `<button style="background-color:#7fb0f1; float:right; color:white; border:none " onClick="reloadPage()">Submit</button>`;

pharm.innerHTML = htmlOutput;

let htmlOutputEnglish = "";
const container = document.querySelector(".quizContainer");
englishQuestions.forEach((q, index) => {
  htmlOutputEnglish += `<p>Q${index + 1}: ${q.question}</p>`;
  htmlOutputEnglish += "<ul>";
  q.options.forEach((op) => {
    htmlOutputEnglish += `<li style="list-style-type: none">
    <label>
    <input class="checker" type="checkbox" value="${op} "> ${op} 
     </label>
      <p class="staterv" style="display:none"></p>
      </li>`;
  });
  htmlOutputEnglish += "</ul>";
});
htmlOutputEnglish += `<button style="background-Color:#7fb0f1; color:white; border:none "   onClick="closeSection()">Back</button>`;
htmlOutputEnglish += `<button  style=" background-color:#7fb0f1; float:right; color:white; border:none   " onClick="reloadPage()">Submit</button>`;
container.innerHTML = htmlOutputEnglish;

document.querySelectorAll(".checker").forEach((checkbox) => {
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
      if (this.value === englishQuestions[0].answer) {
        alert("You got it very correct ✅✅✅");
      }
      // alert(statP.innerHTML);
    } else {
      statP.style.display = "none";
    }
  });
});
// const checboxChecker = document.querySelector(".checker");
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

// submit reload button function
function reloadPage() {
  window.location.reload();
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
