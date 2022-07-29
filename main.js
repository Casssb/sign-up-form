function checkMatch() {
    const pass = document.querySelector('#password');
    const confirmPass = document.querySelector('#confirm-password');
    if (confirmPass.value === pass.value) {
      confirmPass.setCustomValidity('');
    } else {
      confirmPass.setCustomValidity('Passwords do not match');
    }
  }