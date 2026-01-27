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

        stage('Push Docker Image') {
            steps{
                withCredentials([usernamePassword(credentialsId:"dockerhub-credentials",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                    sh "docker tag node-app-test-new ${env.dockerHubUser}/sanoj-image:latest"
                    sh "docker push ${env.dockerHubUser}/sanoj-image:latest" 
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
