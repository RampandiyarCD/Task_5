async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const user = await response.json();
    console.log("User data:", user);
  } catch (error) {
    console.log("Failed to fetch:", error);
  }
}

fetchUserData();