function saveToLocalStorage() {
  const inputValue = document.getElementById('candidateName').value;
  const candidateNo = document.getElementById('candidateNo').value;
  const grade = document.getElementById('grade').value;
  const arm = document.getElementById('arm').value;

  localStorage.setItem('storedValue', inputValue);
  localStorage.setItem('candidateNo', candidateNo);
  localStorage.setItem('grade', grade);
  localStorage.setItem('arm', arm);
  retrieveFromLocalStorage(); // Call it again after saving
  // alert('Value saved to local storage!'); // Optional feedback
}

function retrieveFromLocalStorage() {
  const storedValue = localStorage.getItem('storedValue');
  const outputParagraph = document.getElementById('resultCandidateName');
  const candidateNo = localStorage.getItem('candidateNo');
  const candidateId = document.getElementById('resultCandidateNo');
  const grade = localStorage.getItem('grade');
  const resultGrade = document.getElementById('resultGrade');
  const arm = localStorage.getItem('arm');
  const resultArm = document.getElementById('resultArm');

  if (storedValue) {
    outputParagraph.textContent = storedValue.toUpperCase();
    candidateId.textContent = candidateNo.toUpperCase();
    resultGrade.textContent = grade.toUpperCase();
    resultArm.textContent = arm.toUpperCase();
  } else {
    outputParagraph.textContent = "No value stored yet.";
    candidateId.textContent = "No value stored yet.";
    resultGrade.textContent = "No value stored yet.";
    resultArm.textContent = "No value stored yet.";
  }
}

// Call retrieveFromLocalStorage when the page loads
window.onload = retrieveFromLocalStorage;