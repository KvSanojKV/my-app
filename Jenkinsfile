pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-app:latest"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/KvSanojKV/my-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                  kubectl apply -f k8s/deployment.yaml
                  kubectl apply -f k8s/service.yaml
                '''
            }
        }
    }
}

