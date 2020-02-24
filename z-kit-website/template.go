package main

import (
	"bytes"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"os"
	"strings"
	"time"
)

const (
	templatePath = "./templates/"
	langPath     = "./langs/"
)

// 棋板渲染

func templateHtml(text string) template.HTML {
	return template.HTML(text)
}

func templateFormatdatetime(t time.Time) string {
	return t.Format("2006-01-02 15:04:05")
}

func templateFormatdate(t time.Time) string {
	return t.Format("2006-01-02")
}

func templateInclude(filename string, data map[string]interface{}) template.HTML {
	var buf bytes.Buffer
	t := template.New(filename) //filename[strings.LastIndex(filename, "/")+1:])
	t, err := t.ParseFiles(templatePath + filename)
	if err != nil {
		log.Fatalln(err)
	}
	err = t.Execute(&buf, data)
	if err != nil {
		log.Fatalln(err)
	}
	return template.HTML(buf.Bytes())
}

var templateFuncMaps = template.FuncMap{
	"html":           templateHtml,
	"trim":           strings.Trim,
	"formatdate":     templateFormatdate,
	"formatdatetime": templateFormatdatetime,
	"include":        templateInclude}

func makeHtmlPage(root string, datas map[string]interface{}) {

	file, ok := datas["name"].(string)
	if !ok {
		log.Println("没有找到页面文件名")
		return
	}
	var buf bytes.Buffer
	t := template.New(file).Funcs(templateFuncMaps)
	bs, err := ioutil.ReadFile(templatePath + "_base.html")
	if err != nil {
		log.Println(err)
		return
	}
	t, err = t.Parse(string(bs))
	if err != nil {
		log.Println(err)
		return
	}
	err = t.Execute(&buf, datas)
	if err != nil {
		log.Println(err)
		return
	}
	if !strings.HasSuffix(root, "/") {
		root += "/"
	}
	if langDir, ok := datas["langDir"].(string); ok && langDir != "" {
		if !strings.HasSuffix(langDir, "/") {
			langDir += "/"
		}
		root += langDir
	}

	if path, ok := datas["path"].(string); ok && path != "" {
		if !strings.HasSuffix(path, "/") {
			path += "/"
		}
		root += path
	}

	fmt.Println("--------", root)
	if _, err := os.Stat(root); err != nil {
		os.MkdirAll(root, 0775)
	}

	ioutil.WriteFile(root+file+".html", buf.Bytes(), 0777)
}
