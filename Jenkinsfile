
pipeline {
    agent any

    environment {
        KUBECONFIG   = '/home/jenkins/.kube/config'
        DOCKER_IMAGE = 'sanojkv/jenkins-build'
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
            sh '''
              echo "$DOCKER_TOKEN" | docker login -u sanojkv --password-stdin

              docker push sanojkv/jenkins-build:latest
            '''
         }
     }
 }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                  kubectl apply -f k8s/
                  kubectl rollout status deployment/my-jenkins-app
                '''
            }
        }
    }
}
