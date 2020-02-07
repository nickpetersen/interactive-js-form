window.onload = function fadeForm() {
  var form = document.getElementById('regForm');

  form.style.opacity = 1;
}

$(document).ready(function() {	
	
	// Random Alert shown for the fun of it
	function randomAlert() {
		var min = 5,
			max = 20;
		var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 20
		// post time in a <span> tag in the Alert
		$("#time").html('Next alert in ' + rand + ' seconds');
		$('#timed-alert').fadeIn(500).delay(3000).fadeOut(500);
		setTimeout(randomAlert, rand * 1000);
	};
	randomAlert();
});

$('.btn').click(function(event) {
    event.preventDefault();
    var target = $(this).data('target');
	// console.log('#'+target);
	$('#click-alert').html('data-target= ' + target).fadeIn(50).delay(3000).fadeOut(1000);
	
});

// Multi-Step Form
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var tab = document.getElementsByClassName("tab");
  tab[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (tab.length - 1) && n != 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var tab = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  tab[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= tab.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

var pathSelection = document.querySelectorAll(".path-selector");

for (i = 0; i < pathSelection.length; i++) {
  pathSelection[i].addEventListener("click", servePath);
}

var primaryResidencePath = document.getElementById('primaryResidencePath');
var secondVacationHomePath = document.getElementById('secondVacationHomePath');
var investmentPropertyPath = document.getElementById('investmentPropertyPath');

var primaryResidenceTabs = document.getElementsByClassName('primary-residence-child');
var secondVacationHomeTabs = document.getElementsByClassName('second-vacation-home-child');
var investmentPropertyTabs =  document.getElementsByClassName('investment-property-child');

function servePath() {

  // On click reset all
  resetTabs();

  if (this.id == 'primaryResidence') {
    primaryResidencePath.style.display = 'block';
    for (i = 0; primaryResidenceTabs.length; i++) {
      if (!primaryResidenceTabs[i].classList.contains('tab')) {
        primaryResidenceTabs[i].classList.add('tab');
      }
    }
  }

  if (this.id == 'secondVacationHome') {
    secondVacationHomePath.style.display = 'block';
    for (i = 0; secondVacationHomeTabs.length; i++) {
      if (!secondVacationHomeTabs[i].classList.contains('tab')) {
        secondVacationHomeTabs[i].classList.add('tab');
      }
    }
  }

  if (this.id == 'investmentProperty') {
    investmentPropertyPath.style.display = 'block';
    for (i = 0; investmentPropertyTabs.length; i++) {
      if (!investmentPropertyTabs[i].classList.contains('tab')) {
        investmentPropertyTabs[i].classList.add('tab');
      }
    }
  }
  
}

function resetTabs() {

  primaryResidencePath.style.display = 'none';
  secondVacationHomePath.style.display = 'none';
  investmentPropertyPath.style.display = 'none';

  for (i = 0; i < primaryResidenceTabs.length; i++) {
    if (primaryResidenceTabs[i].classList.contains('tab')) {
      primaryResidenceTabs[i].classList.remove('tab');
    }
  }

  for (i = 0; i < secondVacationHomeTabs.length; i++) {
    if (secondVacationHomeTabs[i].classList.contains('tab')) {
      secondVacationHomeTabs[i].classList.remove('tab');
    }
  }

  for (i = 0; i < investmentPropertyTabs.length; i++) {
    if (investmentPropertyTabs[i].classList.contains('tab')) {
      investmentPropertyTabs[i].classList.remove('tab');
    }
  }
}