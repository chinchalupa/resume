# Resume
`Resume` contains my professional resume in JSON format as well as the tools to generate new resumes via CI/CD pipelines. The repository is designed to be lightweight and portable so that others can benefit from the tools as well by forking the project.

## Continuous Integration
Every commit is validated via `resume test` which is supplied by [resume-cli](https://github.com/jsonresume/resume-cli).

## Continuous Deployment
Commits to the master branch will generate a new resume.html artifact. The resume can be controlled by passing in one of the environment variables below:
- `RESUME_THEME` controls the theme used from the list available [here](https://jsonresume.org/themes/)