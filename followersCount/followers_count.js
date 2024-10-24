let count = 0; // Initialize count to 0
let milestonesReached = {}; // Store the reached milestones

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue(); // Check count value and display messages
}

function checkCountValue() {
  if (count === 10 && !milestonesReached[10]) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
    milestonesReached[10] = true; // Mark the milestone as reached
  } else if (count === 20 && !milestonesReached[20]) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
    milestonesReached[20] = true; // Mark the milestone as reached
  }
}

function displayCount() {
  console.log(`Followers: ${count}`); // Replace this with your actual display logic
}
