 
 
**If you want, you can help me translate the language of the official homepage.**  
 
 ### step:
 
* 1, Clone the repository `git clone https://github.com/ying32/ying32.github.io`

* 2, Edit the `z-kit-website/langs.json` file to add the language in the original format.

* 3, Copy `z-kit-website/langs/en-US.json` and change the file name to the language name defined in langs.json.

* 4, Compile and generate a static html file.
```bash
go build&&z-kit-website

// or preview
go build&&z-kit-website --debug
```

* 5, PullRequests to `https://github.com/ying32/ying32.github.io`.