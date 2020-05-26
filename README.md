# Code Examples that show how to architecture and coding concepts in LWC

1. If you haven't already done so, authorize with your hub org and provide it with an alias (**myhuborg** in the command below):

   ```
   sfdx force:auth:web:login -d -a myhuborg
   ```

1. Create a scratch org and provide it with an alias (**architecture-and-coding-examples** in the command below):

   ```
   sfdx force:org:create -s -f config/project-scratch-def.json -a architecture-and-coding-examples
   ```

1. Push the app to your scratch org:

   ```
   sfdx force:source:push
   ```

1. Assign the **architecture_and_coding** permission set to the default user:

   ```
   sfdx force:user:permset:assign -n architecture_and_coding
   ```

1. Open the scratch org:

   ```
   sfdx force:org:open
   ```
