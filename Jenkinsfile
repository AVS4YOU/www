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
            		usernamePassword(credentialsId: 'aws-s3-teststatic', usernameVariable: 'AccessKey', passwordVariable: 'SecretKey')
					])
			{
		final scmVars = checkout(scm)
		echo "scmVars: ${scmVars}"
		echo "scmVars.GIT_COMMIT: ${scmVars.GIT_COMMIT}"
		echo "scmVars.GIT_BRANCH: ${scmVars.GIT_BRANCH}"
				
		bat 'powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File deploy.ps1'
		bat 'powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File jenkins_notifier.ps1'
                      							
      	}
      }
    }
  }
}
