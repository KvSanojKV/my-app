
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
            string(credentialsId: 'dockerhub-token', variable: 'DOCKER_TOKEN')
        ]) {
    
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
