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

func readWiki(lang string) []byte {
	bs, err := ioutil.ReadFile(fmt.Sprintf("./langs/wiki.%s.txt", lang))
	if err != nil {
		return nil
	}
	return bs
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
	// 主页或者其他页生成
	pages := dataMap["pages"].([]interface{})
	if len(pages) > 0 {
		for _, page := range pages {
			switch page.(type) {
			case map[string]interface{}:
				pg := page.(map[string]interface{})

				if val, ok := pg["enabled"]; ok {
					if !val.(bool) {
						continue
					}
				}

				pg["lang"] = langName
				pg["langDir"] = langDir
				pg["langs"] = langs
				pg["footer"] = dataMap["footer"]
				pg["menubar"] = dataMap["menubar"]
				makeHtmlPage(root, pg)
			}
		}
	}
	// wiki生成
	//wikiConfig := readWiki(langName)
	//if len(wikiConfig) > 0 {
	//	var wikiPage = make(map[string]interface{})
	//	wikiPage["lang"] = langName
	//	wikiPage["langDir"] = langDir
	//	wikiPage["langs"] = langs
	//	wikiPage["footer"] = dataMap["footer"]
	//	wikiPage["menubar"] = dataMap["menubar"]
	//	wikiPage["markdown"] = true
	//	wikiPage["iswiki"] = true
	//
	//	type wikiItem struct {
	//		Categroy string
	//		Subs     []string
	//	}
	//
	//	first := make([]wikiItem, 0)
	//	subs := make([]wikiItem, 0)
	//	arr := bytes.Split(wikiConfig, []byte{'\n'})
	//	var idx int
	//	for _, line := range arr {
	//		line = bytes.TrimSpace(line)
	//		if bytes.HasPrefix(line, []byte{'#'}) {
	//			first = append(first, string(line[1:]))
	//		} else {
	//			if idx == 0 {
	//				// 主页
	//
	//			}
	//			idx++
	//		}
	//		//fmt.Println(idx, string(line))
	//	}
	//	wikiPage["page"] = first
	//	fmt.Println(first)
	//}

}
