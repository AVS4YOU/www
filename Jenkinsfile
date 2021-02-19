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
		def scmVars = checkout([
        		$class: 'GitSCM'
      		])
		      // Display the variable using scmVars
	      echo "scmVars.GIT_COMMIT"
	      echo "${scmVars.GIT_COMMIT}"

	      // Displaying the variables saving it as environment variable
	      env.GIT_COMMIT = scmVars.GIT_COMMIT
	      echo "env.GIT_COMMIT"
	      echo "${env.GIT_COMMIT}"	
				
		bat 'powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File deploy.ps1'
		bat 'powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File jenkins_notifier.ps1'
                      							
      	}
      }
    }
  }
}
