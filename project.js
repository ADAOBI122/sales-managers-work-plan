document.getElementById("date").value = new Date().toLocaleDateString();

document.getElementById("workPlanForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get form values
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var region = document.getElementById("region").value;
  var activity = document.getElementById("activity").value;
  
  // Update submission count
  var submissionCount = parseInt(document.getElementById("submissionCount").innerText);
  submissionCount++;
  document.getElementById("submissionCount").innerText = submissionCount + " people have submitted their work plans.";
  
  // Update time stamp
  var timeStamp = new Date().toLocaleString();
  document.getElementById("timeStamp").innerText = "Last submission: " + timeStamp;
  
  // Reset form
  document.getElementById("workPlanForm").reset();
});