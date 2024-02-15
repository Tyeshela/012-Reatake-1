// Assume fetching user data from an API
const userData = {
    name: 'Alice',
    age: 30
  };
  
  // Use optional chaining to safely access properties and provide default values
  const twitterHandle = userData.social?.twitter ?? "No Twitter handle";
  const linkedInHandle = userData.social?.linkedIn ?? "No LinkedIn handle";
  