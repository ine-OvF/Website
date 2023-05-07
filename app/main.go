package main

import(
	"net/http"
    "github.com/labstack/echo"


)

func public(c echo.Context) error {
    return c.String(http.StatusOK, "Hello, Public!")
}

func private(c echo.Context) error {
    return c.String(http.StatusOK, "Hello, Private!")
}
func hello(c echo.Context) error {
    return c.String(http.StatusOK, "Hello, World!")
}

func main () {
     e := echo.New()
     e.GET("/", hello)
     e.GET("/public", public)
     e.GET("/private", private)
     e.Logger.Fatal(e.Start(":8082"))
}

