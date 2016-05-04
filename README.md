# cloudfiles-cli
Simple command-line interface to upload or download files using Rackspace Cloud Files.

####Installation

```
npm install -g cloudfiles-cli
```

####Supported Options
```
    -u --username Rackspace username (Required)
    -k --apiKey Rackspace apiKey (Required)
    -c --container Cloud Files container (Required)
    -f --file filepath (Required)
    -r --region Cloud Files Region (Required)
    -o --output Output filepath (Optional)
```

####Supported Commands
```
cloudfiles-upload -u myuser -k somehash -c mycontainer -f ./file.txt -r ORD

cloudfiles-download -u myuser -k somehash -c mycontainer -f file.txt -r ORD
```
