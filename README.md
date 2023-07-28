[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/nj7iw4Wb)

# A Simple Node.js Project Run in Docker Container

This week assignment from PT. Revolusi Cita Edukasi is "running a simple Node.js Project in Docker Container". These are 3 main steps to do:
1. Docker Installations
2. Create Files in Visual Studio Code
3. Create Docker Image, Run Image(Container), and Test Localhost

First thing first, Here are some general steps to do that :

#### Docker Installations
1. Download **docker installer** and then install it. Do not forget to install or update **Windows Subsystem Linux (WSL)** especially WSL2 for Windows user, unless the docker cannot be run after installation is done.
2. After docker and WSL2 installations are done, consider to install **windows terminal** for windows user to assist in creating node.js project image and creating container in docker.
3. Download node.js installer as a **Back up** and install it if it is needed. Because, somehow author cannot get _package-lock.json_ file generated if author does not do an npm install first which needs Node.js. Personally author try to not use npm install outside a docker container. Nevertheless, it is not succeded because there is no _package-lock.json_ file in the docker container and then localhost and "Hello World" greetings does not appear in the browser.
#### Create Files in Visual Studio Code
4. After all installations are done. The next step is to create files in VS code. Files needed to be created are Javascript file, Dockerfile and JSON file. After those 3 files are created, please run npm install on the same folder directory with those three files and then package-lock.json will be created. Lastly, create .dockerignore file to prevent node_modules folder to be copied into docker container.
#### Create Docker Image, Run Image(Container), and Test Localhost
5. last step is create docker build image and run docker container then check localhost port ot test whether a simple node.js project can be run in the browser or not.

That's the general steps for run a simple node.js project in a docker container. Readme.md or this dok=cument will be updated if there is time left. Thank you.

contact author at andalanaldi@gmail.com

## Documentation Update 1: Docker Installations

1. Download Docker installer.
![Download Docker installer ]
(https://)
()
()
2. Run Docker installer.
![Install Docker]
() 
()
3. Wait for the installation process
![Wait for the process]
()
4. Read and accept Docker Subscription Service Agreement
![Install Docker]
()
5. Wait for Docker Engine to start
![Start Docker Engine]
()
6. Download and update Windows Subsystem Linux kernel version for windows user
![Windows Subsystem Linux]
()
()
()
()
()
7. Get windows terminal from Microsoft Store for windows user if needed and run the terminal.
![Windows Terminal]
()
()
8. Set WSL2 as Default in the terminal
![Set Windows Subsystem Linux 2 as default]
()
()




