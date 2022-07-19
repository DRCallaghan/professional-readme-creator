// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseTag = license.replace(/ /g, "_");
  let licenseUrl = (`[![license](https://img.shields.io/badge/license-${licenseTag}-blue)](https://img.shields.io/badge/license-${licenseTag}-blue)`);
  return licenseUrl;
}

// Creating a function to generate markdown for README
function generateMarkdown(data) {
  // using a string literal and info from the user input to create the whole README
  return `# ${data.title}

  ## Licensing:
  ${renderLicenseBadge(data.license)}
  See the licensing file for more information about this project's copyright information.

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:
  - ${data.reason}
  - ${data.problem}
  - ${data.lesson}
  - ${data.uniqueness}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Outside Resources
  ${data.collaborators}
  ${data.thirdParties}
  ${data.tutorials}

  ## Contribution
  ${data.contribution}

  ## Additional Info
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}

  If you would like to reach me for additional questions on this project, you can send me an email at the address listed above. Please title your email "${data.title} - Additional Questions" so I know to reply.`;
}

// exporting the markdown function
module.exports = generateMarkdown;
