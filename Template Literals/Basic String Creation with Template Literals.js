// Create a string using template literals
const letterTemplate = `
Dear ${recipient},

I hope this letter finds you well.

Sincerely,
${sender}
`;

// Traditional string concatenation method
const letterTemplateConcatenation = "Dear " + recipient + ",\n\n" +
    "I hope this letter finds you well.\n\n" +
    "Sincerely,\n" +
    sender;
