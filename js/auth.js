// Authentication functions for Sentinel Command - FIXED

function signup(e) {
    e.preventDefault();
    
    // Get values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const fullname = document.getElementById('fullname')?.value || username;
    
    // Simple validation
    if (!username || !password) {
      alert('All fields required!');
      return false;
    }
    
    // Create user object - SIMPLE AND CONSISTENT
    const user = {
      username: username,
      password: password,
      fullname: fullname
    };
    
    // Store in localStorage
    localStorage.setItem('sentinelUser', JSON.stringify(user));
    
    // Also store a simple flag for testing
    console.log('User saved:', user);
    
    alert('Account Created! You can now login.');
    window.location.href = 'index.html';
    return false;
  }
  
  function login(e) {
    e.preventDefault();
    
    // Get login values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Get saved user
    const savedUser = localStorage.getItem('sentinelUser');
    
    if (!savedUser) {
      alert('No account found. Please sign up first.');
      return false;
    }
    
    // Parse the saved user
    const user = JSON.parse(savedUser);
    
    // Debug - check what we're comparing
    console.log('Login attempt:', { entered: username, saved: user.username });
    console.log('Password match:', password === user.password);
    
    // Check credentials - DIRECT COMPARISON
    if (user && user.username === username && user.password === password) {
      // Set login flag
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('currentUser', user.username);
      
      // Also store full user data for profile
      localStorage.setItem('currentUserData', JSON.stringify(user));
      
      console.log('Login successful!');
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid Credentials. Access Denied.');
      console.log('Login failed - credentials mismatch');
    }
    
    return false;
  }
  
  function checkAuth() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn || loggedIn !== 'true') {
      console.log('Not authenticated, redirecting to login');
      window.location.href = 'index.html';
      return false;
    }
    return true;
  }
  
  function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserData');
    console.log('Logged out');
    window.location.href = 'index.html';
  }
  
  // For testing - clear everything
  function resetAll() {
    localStorage.clear();
    console.log('All data cleared');
    alert('System reset complete');
    window.location.href = 'index.html';
  }