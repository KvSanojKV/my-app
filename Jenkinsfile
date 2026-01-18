stage('Deploy to Kubernetes') {
    environment {
        KUBECONFIG = '/home/jenkins/.kube/config'
    }
    steps {
        sh '''
          kubectl config current-context
          kubectl get nodes
          kubectl apply -f k8s/
        '''
    }
}

