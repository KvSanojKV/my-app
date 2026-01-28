pipeline {
    agent any

    environment {
        KUBECONFIG   = '/home/jenkins/.kube/config'
        DOCKER_IMAGE = 'sanjayy8790/sanji-image'
        DOCKER_TAG   = 'latest'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([
                    string(credentialsId: 'dockerhub-credentials', variable: 'DOCKER_TOKEN')
                ]) {
                    sh """
                      echo "$DOCKER_TOKEN" | docker login -u sanjayv8790 --password-stdin
                      docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                    """
                }
            }
        }


        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                  kubectl apply -f k8s/
                  kubectl rollout status deployment/my-app
                '''
            }
        }
    }
}
