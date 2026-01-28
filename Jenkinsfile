post {
    always {
        cleanWs()
    }
}
pipeline {
    agent any

    environment {
        KUBECONFIG   = '/home/jenkins/.kube/config'
        DOCKER_IMAGE = 'sanjayy8790/sanoj-image'
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
            docker login -u sanjayy8790 --password-stdin 
              docker push sanjayy8790/sanoj-image:latest
            '''
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
