// Tagged template literal function to escape HTML special characters
function htmlEscape(strings, ...values) {
    let result = '';
    strings.forEach((string, i) => {
      result += string + (values[i] ? escapeHtml(values[i]) : '');
    });
    return result;
  }
  
  function escapeHtml(str) {
    return str.replace(/[<>&]/g, (c) => ({
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;'
    }[c]));
  }
  
  // Example usage
  const name = "<script>alert('XSS');</script>";
  const escapedName = htmlEscape`Hello, ${name}!`;
  console.log(escapedName);
  