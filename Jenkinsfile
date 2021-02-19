pipeline {
 agent { label 'master' }
  triggers {
    githubPush()
  }
    options {
    disableConcurrentBuilds()
    buildDiscarder (logRotator(numToKeepStr: '10', artifactNumToKeepStr: '10'))
     }
  stages {
        stage('Windows') {
		steps {
			
			withCredentials([
            		usernamePassword(credentialsId: 'aws-s3-teststatic', usernameVariable: 'AccessKeyTest', passwordVariable: 'SecretKeyTest'),
                	usernamePassword(credentialsId: 'aws-s3', usernameVariable: 'AccessKeyProd', passwordVariable: 'SecretKeyProd')
					])
			{
	
			bat 'powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File deploy.ps1'
			bat 'powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File jenkins_notifier.ps1'
                      							
      	}
      }
    }
  }
}
