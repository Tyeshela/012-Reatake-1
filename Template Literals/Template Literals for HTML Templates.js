// Function to generate HTML markup using template literals
function generateHTMLLinks(links) {
    return `
      <ul>
        ${links.map(link => `<li><a href="${link.url}">${link.text}</a></li>`).join('')}
      </ul>
    `;
  }
  
  // Example usage
  const links = [
    { url: 'https://example.com', text: 'Example' },
    { url: 'https://google.com', text: 'Google' }
  ];
  console.log(generateHTMLLinks(links));
  