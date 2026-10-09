package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
)

// func homehandler(w http.ResponseWriter, r *http.Request) {

// 	fmt.Fprintln(w, "AI Resume Backend Running")
// }

// keywords returns unique lowercase tokens (len >= 3) after removing stopwords.
func keywords(text string) map[string]bool {
	stop := map[string]bool{
		"the": true, "and": true, "for": true, "with": true, "you": true,
		"are": true, "will": true, "have": true, "this": true, "your": true,
		"from": true, "that": true, "their": true, "they": true, "about": true,
		"work": true, "experience": true, "role": true, "team": true,
		"lookixng": true, "including": true, "required": true, "preferred": true,
		"also": true, "must": true, "new": true, "other": true,
	}
	out := make(map[string]bool)
	for _, tok := range strings.Fields(strings.ToLower(text)) {
		tok = strings.ReplaceAll(strings.ReplaceAll(tok, ".", " "), ",", " ")
		for _, w := range strings.Fields(tok) {
			w = strings.Trim(w, "(){}[]:;'\"!?")
			if len(w) >= 3 && !stop[w] {
				out[w] = true
			}
		}
	}
	return out
}

func analyzeHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	// check first get permisson
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	err := r.ParseMultipartForm(10 << 20) // // 10MB limit

	// if out of limit
	if err != nil {
		http.Error(w, "Error  parsing form ", http.StatusBadRequest)
		return
	}
	// get jobDescription
	jobDescription := r.FormValue("jobDescription")

	//get uploaded file
	file, fileHeader, err := r.FormFile("resume")

	if err != nil {
		http.Error(w, "Resume File Missing ", http.StatusBadRequest)
		return
	}

	defer file.Close()

	// dst is destination file
	dst, err := os.Create("uploads/" + fileHeader.Filename)

	// check if error occur file creation
	if err != nil {
		http.Error(w, "Error saving file", http.StatusInternalServerError)
		return
	}

	// copy the deatils data from upaloded file to saved File
	_, err = io.Copy(dst, file)
	if err != nil {
		http.Error(w, "Error copying file", http.StatusInternalServerError)
	}

	// print the all deatils in terminal
	fmt.Println("Job Description:", jobDescription)
	fmt.Println("File Name:", fileHeader.Filename)
	fmt.Println("File Size:", fileHeader.Size)

	// --- keyword extraction ---
	refKeywords := []string{
		"aws", "react", "typescript", "tailwind", "next.js",
		"docker", "postgresql", "node.js", "git", "rest api",
	}
	jdTokens := keywords(jobDescription)
	matched := []string{}
	missing := []string{}
	for _, kw := range refKeywords {
		if jdTokens[kw] {
			matched = append(matched, kw)
		} else {
			missing = append(missing, kw)
		}
	}
	keywordMatchRate := 0
	if len(refKeywords) > 0 {
		keywordMatchRate = len(matched) * 100 / len(refKeywords)
	}

	// Response JSON format
	response := map[string]interface{}{
		"score":            60,
		"keywordMatchRate": keywordMatchRate,
		"matchedKeywords":  matched,
		"missingKeywords":  missing,
		"suggestions": []interface{}{
			map[string]interface{}{"text": "Add AWS skills", "severity": "critical"},
			map[string]interface{}{"text": "Improve React projects", "severity": "warning"},
			map[string]interface{}{"text": "Use better metrics", "severity": "info"},
			map[string]interface{}{"text": "Add Docker experience", "severity": "warning"},
			map[string]interface{}{"text": "Include PostgreSQL projects", "severity": "warning"},
			map[string]interface{}{"text": "Consider adding TypeScript examples", "severity": "info"},
		},
	}
	// set header tells frontend the reponse is JSON
	w.Header().Set(
		"Content-Type",
		"application/json",
	)
	//  convert the response into JSON format
	json.NewEncoder(w).Encode(response)
}

func main() {
	// fmt.Println("AI Resume Backend Started")

	// http.HandleFunc("/", homehandler)

	// fmt.Println("Server started on port 8080")

	// http.ListenAndServe(":8080", nil)

	http.HandleFunc("/analyze", analyzeHandler)

	fmt.Println("Server Started on port 8080")

	http.ListenAndServe(
		":8080", nil,
	)
}
