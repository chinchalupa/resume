# Resume
This is the professional resume of Jeremy Wright which is available at https://resume.jeremywright.codes. Additionally, this repository also contains the npm packaging, gitlab testing, and gcp cloud build process used to deploy the resume. The styling conversion, schema and testing is provided by [resume-cli](https://github.com/jsonresume/resume-cli).

## Testing
Testing can be performed locally and in automation via `npm test`.

## Deployment
Continuous deployment is handled via gcp cloud build via npm and gsutil is used to copy html resources. Local builds can be generated via `npm run build`.

## Changing Theme
To change the theme, update the theme in the package json. Ensure a revision version bump if styling is changed.

## Semantic Versioning
Versioning for the resume is defined as such.
- Major - Update when new information is no longer applicable to the information which was once present (e.g. new job information, new interests, etc.)
- Minor - Update when structural or wording changes are made
- Revision - Update when fixing typos, changing style, or updating CI