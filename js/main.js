// Main JavaScript for Sentinel Command - FIXED

window.onload = function() {
    // Get current user data
    const userData = localStorage.getItem('currentUserData');
    const loggedIn = localStorage.getItem('loggedIn');
    
    console.log('Main.js loaded:', { loggedIn, userData });
    
    if (userData) {
      const user = JSON.parse(userData);
      
      // Update all username display elements
      const usernameElements = document.querySelectorAll('#displayUser, #displayUsername, #displayUserShort, #displayUserFull, #displayUsername2');
      usernameElements.forEach(el => {
        if (el) {
          if (el.id === 'displayUserFull') {
            el.textContent = user.fullname || user.username;
          } else {
            el.textContent = user.username;
          }
        }
      });
      
      // Update welcome message
      const welcomeMsg = document.getElementById('welcomeMessage');
      if (welcomeMsg) {
        welcomeMsg.textContent = `Welcome back, ${user.username}`;
      }
      
      // Update profile name
      const profileName = document.getElementById('displayUserFull');
      if (profileName) {
        profileName.textContent = user.fullname || user.username;
      }
      
      // Update callsign
      const callsign = document.getElementById('displayCallsign');
      if (callsign) {
        callsign.textContent = `CALLSIGN: ${user.username}`;
      }
    } else {
      // If no user data but logged in, try to get from sentinelUser
      const sentinelUser = localStorage.getItem('sentinelUser');
      if (sentinelUser && loggedIn === 'true') {
        const user = JSON.parse(sentinelUser);
        localStorage.setItem('currentUserData', JSON.stringify(user));
        location.reload(); // Reload to apply
      }
    }
  
    // Update current time
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      timeElement.textContent = `${year}.${month}.${day} ${hours}:${minutes}`;
    }
  
    // Add active class to current nav item
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
  };
  
  // Dashboard functions
  function loadDashboard() {
    console.log('Loading dashboard...');
    // Any dashboard-specific loading
  }
  
  function showDetails(type) {
    console.log('Showing details for:', type);
    if (type === 'alerts') {
      alert('⚠ HIGH PRIORITY ALERT: Sector 7 intrusion detected');
    } else if (type === 'missions') {
      window.location.href = 'missions.html';
    }
  }
  
  function openComms() {
    alert('📡 Opening secure comms channel...');
  }
  
  function runDiagnostic() {
    alert('🔧 Running system diagnostic...\nAll systems nominal (98.7%)');
  }
  
  function viewFullLog() {
    alert('Opening full activity log...');
  }
  
  // Mission functions
  function createMission() {
    alert('🎯 Opening mission planner...');
  }
  
  // Profile functions
  function loadProfile() {
    console.log('Loading profile...');
  }
  
  function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
    });
    
    // Remove active from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
      selectedTab.classList.add('active');
    }
    
    // Activate button
    event.target.classList.add('active');
  }
  
  // Intel functions
  function viewReport(reportId) {
    console.log('Viewing report:', reportId);
  }
  
  // Reset function for testing
  function testReset() {
    if (confirm('Reset all data? This will clear all users.')) {
      localStorage.clear();
      alert('System reset. Redirecting to login.');
      window.location.href = 'index.html';
    }
  }