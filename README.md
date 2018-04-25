# 2018 Rails Survey
Rebuilt this year in React.

## Description
Almost ten years ago, Planet Argon invited the Rails community to participate in a survey about the state of hosting Ruby on Rails applications. Over the years, it has evolved to include questions about tools, frameworks, and workflows in order to see how the environment is changing.

The 2018 Survey is a snapshot of the highlights from this year's results, and also compares data from the past 4 Rails Hosting survey results, from 2009, 2012, 2014, and 2016. There is a download for the full 2018 survey results for interested users.

## Setup Instructions

### Clone Repository

In terminal, run $`git clone git@bitbucket.org:planetargon/2018-rails-survey-site.git` to clone repository to your local machine.

In the project directory, run these commands to launch the app:

### `npm install`

### `npm run watch-css`

Builds the CSS/SCSS styles for the app for production.

It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Hosting Info
Rails Hosting Survey is hosted on Amazon S3 servers.

Staging:
`http://rails-survey.s3-website-us-west-2.amazonaws.com/`

Production:
`#`

## Deployment
This app utilizes `s3cmd` to deploy the application.

You should install it for your command line:
```
brew install s3cmd
```

Then you will need to configure s3cmd - only parts we need to worry about are the s3 keys here.
Configure with S3 keys (find secure keys from PA team member):
```
s3cmd --configure
```

Then you should be able to deploy with this command:

```
npm run build-and-deploy
```
