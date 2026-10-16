pipeline {
    agent any
    environment {
        DOCKER_HUB_USER = 'reaganclever'
        IMAGE_NAME = 'pro-web-app'
        // This automatically tags your image with the Jenkins build number (e.g., 1, 2, 3)
        IMAGE_TAG = "${env.BUILD_NUMBER}" 
    }
    stages {
        stage('Build Docker Image') {
            steps {
                // We build two versions: one with the specific build number, and one tagged 'latest'
                bat "docker build -t %DOCKER_HUB_USER%/%IMAGE_NAME%:%IMAGE_TAG% ."
                bat "docker build -t %DOCKER_HUB_USER%/%IMAGE_NAME%:latest ."
            }
        }
        stage('Push to Docker Hub') {
            steps {
                // This securely unlocks the 'docker-hub-credentials' ID we just made
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    // Login, push both tags, and securely logout
                    bat 'echo %DOCKER_PASS%| docker login -u %DOCKER_USER% --password-stdin'
                    bat "docker push %DOCKER_HUB_USER%/%IMAGE_NAME%:%IMAGE_TAG%"
                    bat "docker push %DOCKER_HUB_USER%/%IMAGE_NAME%:latest"
                    bat 'docker logout'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                bat returnStatus: true, script: 'docker rm -f pro-web-app'
                bat "docker run -d -p 9000:3000 --name pro-web-app %DOCKER_HUB_USER%/%IMAGE_NAME%:latest"
            }
        }
    }
}