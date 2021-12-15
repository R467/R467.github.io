---
title: 'Monitoring an API with jq'
date: '2021-12-15'
---

Say you have an API that returns an array of JSON objects and you want to know when a certain value changes

You could sit there and refresh your browser or hammer the send key in Postman. Or you use a simple curl script to do the work for you

### Given an API that returns JSON in a format like this:
```
{
    "results" : [
        {
            "key" : "one",
            "value": "aaa"
        },
        ...
        {
            "key" : "nine",
            "value": "iii"
        }
    ]
}
```

We can use this command to poll the API and show the value of a certain key:
```
while :; do clear;  curl -s {apiEndpoint} | jq '.results[] | select(.key=="{key we want to find}").value' | tail -c +2 | head -c -2 | toilet | lolcat; sleep 5; done
```

### A breakdown of the different components:
```
while :; do clear; ... ; sleep 5; done
```
This is a simple single line infinite loop. There will be a 5 second delay before each iteration and the terminal will be cleared


```
curl -s {apiEndpoint}
```
Call the API. [-s ](https://curl.se/docs/manpage.html#-s) makes the command silent i.e. you won't see the download process as it pulls down the json


```
| jq '.results[] | select(.key=="{key we want to find}").value' 
```
Use jq to parse the json. Grab everything in the results array and then select the value based on the key
If we pass a key of "nine" we will receive "iii" as the result


```
| tail -c +2 | head -c -2 
```
Strip the leading and tailing quote from the text


```
| toilet
```
[Toilet](https://delightlylinux.wordpress.com/2015/11/13/colored-text-with-toilet/) is used to format the text so it larger and more readable
There are many optional parameters that you can use to change the style of the text. Figlet is another option you can use

```
| lolcat
```
Add some colour so it looks [fancy](https://www.tecmint.com/lolcat-command-to-output-rainbow-of-colors-in-linux-terminal/)