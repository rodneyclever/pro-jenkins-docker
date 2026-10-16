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
                bat 'docker rm -f pro-web-app || exit 0'
                bat 'docker run -d -p 9000:80 --name pro-web-app pro-github-image'
            }
        }
    }
}