const logout = async function() {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
      alert('You have successfully logged out!')
    } else {
      alert('Unable to logout!');
    }
  };
  
  document.querySelector('').addEventListener('click', logout);