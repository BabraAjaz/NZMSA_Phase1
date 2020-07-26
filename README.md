# Queen for NZMSA Phase 1 2020
Submited by Babra Ajaz

Hello everyone, welcome to [Queeen](https://babra-makeup-app.azurewebsites.net/)!

This is a website made for my Microsoft Student Accelertor Phase 1 2020 program, and is somewhere you can find all the products a makeup company has ever launched.
Just select your favorite makeup company from the dropdown list, click the Submit button and there you are! It's that simple!

The website is hosted on:
https://babra-makeup-app.azurewebsites.net/
If you encounter any difficulties please run the web-app locally by following the steps in the web-app README.

Queeen makes use of the Makeup [API](http://makeup-api.herokuapp.com/) by herokuapp.

Write a short description of your build and release pipelines in your project README (this is your change to explain ot us what you have implemented for your build and release pipeline and why)

## Continuous Deployement
This service makes use of a Continuous Deployement from Azure DevOps by making use of piplines to make sure that I am deploying reliable code. Azure pipelines automates many tedious processes for me, such as running builds, deploying code and in the future if I want to it can perform tests for me.

Build Pipeline: My build pipeline "builds" to take care of tasks such as handling dependencies, compiling code, etc, when I make new commits to the devop and master branches. This triggers a build artifact.

Release Pipeline: I use the release pipline to take the artifact that my build pipeline triggers and then deploys it to my Azure Web App, Babra-Makeup-App. It is used to automate the release/publishing of the changes made.
