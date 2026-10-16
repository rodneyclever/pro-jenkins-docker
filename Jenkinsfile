pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t pro-github-image .'
            }
        }
        stage('Run Docker Container') {
            steps {
                // returnStatus: true tells Jenkins to ignore the error if the container doesn't exist yet
                bat returnStatus: true, script: 'docker rm -f pro-web-app'
                bat 'docker run -d -p 9000:80 --name pro-web-app pro-github-image'
            }
        }
    }
}