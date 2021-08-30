switch(BRANCH_NAME) {
	case "test.new":
		region="us-east-1"
		FindNameBucket="new.avs4you.com"
		CloudFrontID="E27SY1BHFO3J2K"
		OriginName="S3-Website-new.avs4you.com.s3-website-us-east-1.amazonaws.com"
		CHAT_ID="-1001346473906" // Dep. Automation & Operation
		MESSAGE="new.avs4you.com is deployed to amazon."
		break
	case "test.teststatic":
		region="us-east-1"
		FindNameBucket="teststatic.avs4you.com"
		CloudFrontID="E5Z32JPP5GABL"
		OriginName="S3-teststatic.avs4you.com"
		CHAT_ID="-378391550" //dev avs4you
		MESSAGE="teststatic.avs4you.com is deployed to amazon."
		break
	case "production.avs4you":
		region="us-east-1"
		FindNameBucket="www.avs4you.com"
		CloudFrontID="E21GNZRPS0AW6N"
		OriginName="S3-Website-www.avs4you.com.s3-website-us-east-1.amazonaws.com"
		CHAT_ID="-378391550" //dev avs4you
		MESSAGE="www.avs4you.com is deployed to amazon."
		break
	default:
		println("Branch: ${BRANCH_NAME} do not for deploy.")
		break
}

/*
if ("${BRANCH_NAME}" == 'test.new') {
	region="us-east-1"
	FindNameBucket="new.avs4you.com"
	CloudFrontID="E27SY1BHFO3J2K"
	OriginName="S3-Website-new.avs4you.com.s3-website-us-east-1.amazonaws.com"
	CHAT_ID="-1001346473906" // Dep. Automation & Operation
	MESSAGE="new.avs4you.com is deployed to amazon."
	}

if ("${BRANCH_NAME}" == 'test.teststatic') {
	region="us-east-1"
	FindNameBucket="teststatic.avs4you.com"
	CloudFrontID="E5Z32JPP5GABL"
	OriginName="S3-teststatic.avs4you.com"
	CHAT_ID="-378391550" //dev avs4you
	MESSAGE="teststatic.avs4you.com is deployed to amazon."
	}

if ("${BRANCH_NAME}" == 'production.avs4you') {
	region="us-east-1"
	FindNameBucket="www.avs4you.com"
	CloudFrontID="E21GNZRPS0AW6N"
	OriginName="S3-Website-www.avs4you.com.s3-website-us-east-1.amazonaws.com"
	CHAT_ID="-378391550" //dev avs4you
	MESSAGE="www.avs4you.com is deployed to amazon."
	}
*/

pipeline {
	agent { label 'ubuntu' }
	triggers {
		githubPush()
	}
    options {
		disableConcurrentBuilds()
		buildDiscarder (logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
	}
	stages {
        stage('deploy') {
			when { 
				anyOf { branch 'test.new'; branch 'test.teststatic'; branch 'production.avs4you' }
			}
			environment {
				region = "${region}"
				FindNameBucket = "${FindNameBucket}"
				CloudFrontID = "${CloudFrontID}"
				OriginName = "${OriginName}"
				CHAT_ID = "${CHAT_ID}"
				MESSAGE = "${MESSAGE}"
			}
			steps {
				withCredentials([
								string(credentialsId: 'token_bot_jenkins_notifier', 
								variable: 'TEL_TOKEN'), 
								usernamePassword(credentialsId: 'aws-s3', 
								usernameVariable: 'AccessKeyProd', 
								passwordVariable: 'SecretKeyProd')
								]) {
					sh '''
						echo "Deploy from ${BRANCH_NAME} is starting."
						
						bash $WORKSPACE/.jenkins/deploy.sh "$AccessKeyProd" "$SecretKeyProd" "$FindNameBucket" "$CloudFrontID" "$region" "$OriginName" "$TEL_TOKEN" "$CHAT_ID" "$MESSAGE"
					'''	          							
				}
			}
		}
	}
}
