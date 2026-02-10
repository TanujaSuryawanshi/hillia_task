let selectedLifeStage = null;

function goToStep(stepNumber) {
  document.querySelectorAll(".step").forEach((step) => {
    step.classList.remove("active");
  });
  document.getElementById(`step-${stepNumber}`).classList.add("active");
}

function selectOption(value) {
  selectedLifeStage = value;
  console.log("Selected option:", selectedLifeStage);
  goToStep(3);
}
