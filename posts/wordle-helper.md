---
title: 'Wordle helper'
date: '2022-01-27'
---

As an excuse to brush up on my React and Next.js skills I have created [web app](https://github.com/R467/wordle-helper) that can be used to solve [Wordle](https://www.powerlanguage.co.uk/wordle/)

You can see it in action [here](https://icy-ground-0b2064d10.1.azurestaticapps.net/)

![overview of the site](/images/wordle-helper/wordle-helper.png)

My main takeaways from this have been about managing state in React using hooks and context to share state between components in different branches of the tree

The key here has been identifying the lowest common parent and the minimum amount of state that needs to be shared between components

Also, when creating components it is much easier to keep an array of data in state as opposed to a component that is ready to render

For example, I originally had a createRow() function that returned a row component directly

```
function createRow() {
    return (
        <div key={index} data-row={index} className="presentLetterRow">     
            <PresentLetter index={index} order={0} tryCreateNewRow={tryCreateNewRow} letterUpdated={letterUpdated} />       
            <PresentLetter index={index} order={1} tryCreateNewRow={tryCreateNewRow} letterUpdated={letterUpdated} />
            <PresentLetter index={index} order={2} tryCreateNewRow={tryCreateNewRow} letterUpdated={letterUpdated} />
            <PresentLetter index={index} order={3} tryCreateNewRow={tryCreateNewRow} letterUpdated={letterUpdated} />
            <PresentLetter index={index} order={4} tryCreateNewRow={tryCreateNewRow} letterUpdated={letterUpdated} />
        </div>
    );
}

```


This worked OK at first but when it came time to manage the state of each PresentLetter I hit a wall

The solution was to keep the state of the row in an array
```
function tryCreateNewRow() {

        const lastRow = presentRows[presentRows.length - 1];

        const anyPopulated = lastRow?.letters.filter((l) => {
            return l.populated;
        })


        if(lastRow && anyPopulated.length == 0) {
            return null;
        }

        return {
            letters: [
                {
                    order : 0,
                    populated: false
                },
                {
                    order : 1,
                    populated: false
                },
                {
                    order : 2,
                    populated: false
                },
                {
                    order : 3,
                    populated: false
                },
                {
                    order : 4,
                    populated: false
                }
            ]
        }

    }

```

That array can then be used to render the component and the state of the child components can easily be updated


n.b. I know this code is far from optimised, it is a work in progress