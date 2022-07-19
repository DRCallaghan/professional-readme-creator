// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string (license was made a required field, so this is unnecessary)
function renderLicenseBadge(license) {
  let licenseTag = license.replace(/ /g, "_");
  let licenseUrl = `https://img.shields.io/badge/license-${licenseTag}-blue`;
  return licenseUrl;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  [![license](${renderLicenseBadge(data.license)})](${renderLicenseBadge(data.license)})

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

  ## Outside Resources:
  ${data.collaborators}
  ${data.thirdParties}
  ${data.tutorials}

  ## Contribution
  ${data.contribution}

  ## Additional Info
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}`;
}

module.exports = generateMarkdown;
