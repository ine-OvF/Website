FROM golang:1.19.4-alpine

ENV GO111MODULE=on

RUN apk update && \
    apk add emacs curl git && \
    go install github.com/pilu/fresh@latest
