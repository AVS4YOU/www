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
					]){
			bat 'deploy.bat'
			powershell(''' 
			get-psdrive
				   echo $WORKSPACE
				   $bucketName = "new.avs4you.com"
				   echo $bucketName 
			''') 
	}
      }
    }
  }
}
