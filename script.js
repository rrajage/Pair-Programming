function navigateTo(screenId) {
    // Hide all screens
    var screens = document.getElementsByClassName('screen');
    for (var i = 0; i < screens.length; i++) {
      screens[i].style.display = 'none';
    }
    
    // Show the target screen
    document.getElementById(screenId).style.display = 'block';
  }