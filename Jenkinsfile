pipeline {
    agent any

    environment {
        KUBECONFIG = '/home/jenkins/.kube/config'
        DOCKER_IMAGE = 'sanjayy8790/sanji-image'
        DOCKER_TAG   = 'v1'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-app:latest .'
            }
        }

        
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh """
                  kubectl apply -f k8s/
                  kubectl rollout status deployment/my-app
                """
            }
        }
    }
}
