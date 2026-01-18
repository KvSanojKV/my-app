pipeline {
    agent any

    environment {
        KUBECONFIG = '/home/jenkins/.kube/config'
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

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                  kubectl config current-context
                  kubectl get nodes
                  kubectl apply -f k8s/
                '''
            }
        }
    }
}

