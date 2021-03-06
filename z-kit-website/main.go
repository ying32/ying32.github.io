package main

import (
	"bytes"
	"encoding/json"
	"errors"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"
)

var (
	debug = flag.Bool("debug", false, "")
)

const (
	domain = "https://z-kit.cc/"
)

type TCase struct {
	Title string `json:"title"`
	Image string `json:"image"`
	URL   string `json:"url"`
}

func main() {
	flag.Parse()

	// 站点根目录
	root := "../"

	updateSite := func() {
		langs := readLangs()
		if langs == nil {
			panic("读语言列表失败。")
		}
		cases := readCases()

		siteMap := bytes.NewBuffer(nil)
		siteMap.WriteString(`<?xml version="1.0" encoding="UTF-8"?>`)
		siteMap.WriteByte(10)
		siteMap.WriteString(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`)
		siteMap.WriteByte(10)
		addToSiteMap := func(pageURL string) {
			siteMap.WriteString(`<url>`)
			siteMap.WriteByte(10)
			// loc
			siteMap.WriteString(`<loc>`)
			siteMap.WriteString(domain)
			siteMap.WriteString(pageURL[3:])
			siteMap.WriteString(`</loc>`)
			siteMap.WriteByte(10)
			// lastmod
			siteMap.WriteString(`<lastmod>`)
			siteMap.WriteString(time.Now().Format(time.RFC3339)) //"2006-01-02 15:04:05"))
			siteMap.WriteString(`</lastmod>`)
			siteMap.WriteByte(10)
			// changefreq
			siteMap.WriteString(`<changefreq>daily</changefreq>`)
			siteMap.WriteByte(10)
			siteMap.WriteString(`</url>`)
			siteMap.WriteByte(10)
		}

		for _, lang := range langs {
			switch lang.(type) {
			case map[string]interface{}:
				langName, _ := lang.(map[string]interface{})["lang"].(string)
				langDir, _ := lang.(map[string]interface{})["langDir"].(string)
				fmt.Println("生成：", langName, "，目录：", langDir)

				makeSite(root, langName, langDir, langs, cases, addToSiteMap)
			}
		}

		siteMap.WriteString(`</urlset>`)

		// 保存map
		ioutil.WriteFile(root+"sitemap.xml", siteMap.Bytes(), 0664)
	}

	if !*debug {
		updateSite()
	}

	if *debug {

		go func() {
			files := map[string]time.Time{}
			haveMod := errors.New("有修改")
			lfirst := true
			for {
				if err := filepath.Walk("./", func(path string, info os.FileInfo, err error) error {

					if !info.IsDir() {
						ext := filepath.Ext(info.Name())
						if ext != ".html" && ext != ".md" && ext != ".json" {
							return nil
						}
						//if ext == ".go" || ext == ".exe" || ext == ".js" {
						//	return nil
						//}
					} else {
						if info.Name() == "cndocs" {
							return nil
						}
					}

					if !info.IsDir() {
						if v, ok := files[path]; ok {
							if v != info.ModTime() {
								files[path] = info.ModTime()
								return haveMod
							}
						} else {
							files[path] = info.ModTime()
							if !lfirst {
								return haveMod
							}
						}
					}
					return nil
				}); err == haveMod {
					updateSite()
				}
				lfirst = false
				// 2秒检测一次
				time.Sleep(time.Second * 1)
			}
		}()
		http.Handle("/", http.FileServer(http.Dir("../")))

		http.ListenAndServe(":8081", nil)
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

func readCases() []interface{} {
	var data interface{}
	bs, err := ioutil.ReadFile("./cases.json")
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

func makeSite(root string, langName, langDir string, langs, cases []interface{}, addToSiteMap func(page string)) {
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
				pg["year"] = time.Now().Year()
				pg["cases"] = cases
				makeHtmlPage(root, pg, addToSiteMap)
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
