function generateReadMe(data) {
  return `
    # <${data.title}>

    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
    ---
    ## Description
    ---
    ${data.description}
    ---
    ## Table of Contents
    ---
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    ---
    ## Installation
    ---
    These dependencies are need in order to run the app successfully:
    ${data.installation}
    ---
    ## Usage
    ---
    To make app run: 
    ${data.usage}
    ---
    ## License
    ---
    ${data.license}
    ---
    ## Contributing
    ---
    ${data.contributing}
    ---
    ## Tests
    ---
    ${data.tests}
    ---
    ## Questions
    ---
    How to reach me:
    ${data.questions}
    ---
    
    `
  }
  
module.exports = generateReadMe