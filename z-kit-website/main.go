package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
)

func main() {
	// 站点根目录
	root := "../"
	langs := readLangs()
	if langs == nil {
		panic("读语言列表失败。")
	}
	for _, lang := range langs {
		switch lang.(type) {
		case map[string]interface{}:
			langName, _ := lang.(map[string]interface{})["lang"].(string)
			langDir, _ := lang.(map[string]interface{})["langDir"].(string)
			fmt.Println("生成：", langName, "，目录：", langDir)

			makeSite(root, langName, langDir, langs)
		}
	}
}

func readLangs() []interface{} {
	var data interface{}
	bs, err := ioutil.ReadFile("./langs.json")
	if err != nil {
		return nil
	}
	if json.Unmarshal(bs, &data) != nil {
		return nil
	}
	if res, ok := data.([]interface{}); ok {
		return res
	}
	return nil
}

func makeSite(root string, langName, langDir string, langs []interface{}) {
	if langName == "" {
		log.Println("未找到语言名。")
	}
	bs, err := ioutil.ReadFile(langPath + langName + ".json")
	if err != nil {
		log.Fatalln(err)
	}
	var datas interface{}
	err = json.Unmarshal(bs, &datas)
	if err != nil {
		log.Fatalln(err)
	}
	dataMap := datas.(map[string]interface{})
	pages := dataMap["pages"].([]interface{})
	if len(pages) > 0 {
		for _, page := range pages {
			switch page.(type) {
			case map[string]interface{}:
				pg := page.(map[string]interface{})
				pg["lang"] = langName
				pg["langDir"] = langDir
				pg["langs"] = langs
				makeHtmlPage(root, pg)
			}
		}
	}
}
