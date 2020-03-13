 
 
 # 如果你愿意，可以帮助我翻译官方主页的语言。
 
 ### 步骤： 
 
 * 1. Clone the repository `git clone https://github.com/ying32/ying32.github.io`
 * 2. Edit the `z-kit-website/langs.json` file to add the language in the original format.
 ```json
[
    {
        "lang": "zh-CN",
        "title": "简体中文",
        "langDir": ""
    },
    {
        "lang": "en-US",
        "title": "English",
        "langDir": "en"
    }

]
``` 

* 3. Copy `z-kit-website/langs/en-US.json` and change the file name to the language name defined in langs.json.

* 4. Compile and generate a static html file.
```bash
go build&&z-kit-website

// or preview
go build&&z-kit-website --debug
```

* 5. PullRequests to `https://github.com/ying32/ying32.github.io`.