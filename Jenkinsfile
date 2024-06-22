pipeline {
    //The agent section specifies where the entire Pipeline, or a specific stage, 
    //will execute in the Jenkins environment depending on where the agent section is placed.
    agent { 
        label 's12-agent'
     }
    
    //The environment directive specifies a sequence of key-value pairs which will be defined
    //as environment variables for all steps, or stage-specific steps, depending on where the environment directive is located within the Pipeline.
    environment {
        BUILD_USER = 'BUILD'
    }
    
    //The parameters directive provides a list of parameters that a user should provide when triggering the Pipeline.
    //The values for these user-specified parameters are made available to Pipeline steps via the params object, see
    //the Parameters, Declarative Pipeline for its specific usage.
    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/features/**/*.feature', description: 'Enter script path you want to execute')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your features')
    }
    
    //The options directive allows configuring Pipeline-specific options from within the Pipeline itself.
    //Pipeline provides a number of these options, such as buildDiscarder, but they may also be provided by
    //plugins, such as timestamps. Ex: retry on failure
    options {
        ansiColor('xterm')
    }

    //The stage directive goes in the stages section and should contain a steps section, an optional agent section, 
    //or other stage-specific directives. Practically speaking, all of the real work done by a Pipeline will be wrapped
    //in one or more stage directives.
    stages {
        
        stage('Build'){
            //The steps section defines a series of one or more steps to be executed in a given stage directive.
            steps {
                echo "Building the application"

                echo "Deleting previous reports"
                bat "npm run allure:clear"
            }
        }
        
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC} --env allure=true,allureReuseAfterSpec=true"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }

    post {
        always {
            //The script step takes a block of Scripted Pipeline and executes that in the Declarative Pipeline. 
            //For most use-cases, the script step should be unnecessary in Declarative Pipelines, but it can provide
            //a useful "escape hatch." script blocks of non-trivial size and/or complexity should be moved into Shared Libraries instead.

                
            echo "Generating Reports"
            //bat "npm run allure:report"
            /*
                TODO : Fix 'allure' is not recognized as an internal or external command, error in Jenkins.
            */
                  

            // script {
            //     BUILD_USER = getBuildUser()
            // }
            
            // slackSend channel: '#jenkins-example',
            //     color: COLOR_MAP[currentBuild.currentResult],
            //     message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n Tests:${SPEC} executed at ${BROWSER} \n More info at: ${env.BUILD_URL}HTML_20Report/"

            //publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: './', reportFiles: 'cucumber-report.html', reportName: 'HTML Report', reportTitles: ''])            
            // emailext body: 'Check console output at $BUILD_URL to view the results. \n\n ${CHANGES} \n\n -------------------------------------------------- \n${BUILD_LOG, maxLines=100, escapeHtml=false}', 
            // subject: 'Jenkins build is back to normal: $PROJECT_NAME - #$BUILD_NUMBER', 
            // to: 'test12@test.com'
            //emailext body: 'Check console output at $BUILD_URL to view the results. \\n\\n ${CHANGES} \\n\\n -------------------------------------------------- \\n${BUILD_LOG, maxLines=100, escapeHtml=false}', subject: 'Build Success in Jenkins: $PROJECT_NAME - #$BUILD_NUMBER', to: 'test@gmail.com'
            cucumber failedFeaturesNumber: -1, failedScenariosNumber: -1, failedStepsNumber: -1, fileIncludePattern: '**/cucumber-report.json', hideEmptyHooks: true, pendingStepsNumber: -1, skipEmptyJSONFiles: true, skippedStepsNumber: -1, sortingMethod: 'ALPHABETICAL', undefinedStepsNumber: -1
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            //deleteDir()
        }

        // success {
        //     echo 'This will run only if successful' 
        //     emailext body: 'Check console output at $BUILD_URL to view the results. \n\n ${CHANGES} \n\n -------------------------------------------------- \n${BUILD_LOG, maxLines=100, escapeHtml=false}', 
        //     to: "test@gmail.com", 
        //     subject: 'Build Success in Jenkins: $PROJECT_NAME - #$BUILD_NUMBER'
        // }
        
        // failure {
        //     emailext body: 'Check console output at $BUILD_URL to view the results. \n\n ${CHANGES} \n\n -------------------------------------------------- \n${BUILD_LOG, maxLines=100, escapeHtml=false}', 
        //     to: "test2002@mailinator.com", 
        //     subject: 'Build failed in Jenkins: $PROJECT_NAME - #$BUILD_NUMBER'
        // }
               
        // changed {
        //     emailext body: 'Check console output at $BUILD_URL to view the results.', 
        //     to: "test2002@mailinator.com", 
        //     subject: 'Jenkins build is back to normal: $PROJECT_NAME - #$BUILD_NUMBER'
        // }
    }
}