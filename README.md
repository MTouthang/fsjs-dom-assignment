# Dom Manipulation Assignment

1. Webiste Name: [Dev To](https://dev.to/)

### Topics

    - Query Selctory, Inner HTML

### Sample Image

![Sample One](./Pic1.png)

### Tasks

        Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

```javascript
document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").innerHTML = "iNeuron"
// and 
document.querySelector(".side-bar .crayons-card .color-base-70").innerHTML = "I Write Code"
```

### Output

![Output](./Pic2.png)

2. Website Name: [Apple](https://support.apple.com/en-in)

### Task

![Store](./Picture_3.png)

### Fetch all the product name and store in an array

### Output

```javascript
// get list of the products items -
const products = document.querySelectorAll(".row .as-imagegrid-item .as-imagegrid-item-title ")

// extract the inner text element and filter them out ---
productNames = []
products.forEach((e) => productNames.push(e.innerText.replace("\nSupport", "")))
```

['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

### Topics

    - Get Element By Id, Create Element, Create Text Node, Append Child

### Sample Image

![Sample One](./Pic4.png)

### Tasks

     Add another FAQ 'My New FAQ' to the list

```javascript
// ans -
// selecting the parent element 
let parent = document.querySelector(".accordion-homepage")

// creating the sub-section 
let secParent = document.createElement("section")
secParent.className = "parent"
// creating the element -
let newH3 = document.createElement("h3")
newH3.textContent = "My New FAQ"

// child appending -
parent.appendChild(secParent)
secParent.appendChild(newH3)

```

### Output

![Output](./Pic5.png)

4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

### Topics

     Query Selector, InnerText

### Sample Image

![Sample One](./Pic6.png)

### Tasks

      Change the contact number

```javascript
// ans --
document.querySelector(".customer-support .one-tel-number").innerText = "+91 6366256689"
```

### Output

![Output](./Pic7.png)

5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

### Topics

       getElementById, createElement, InnerText, append, setAttribute

### Sample Image

![Sample One](./Pic8.png)

### Tasks

     Target the main div of card and change the Button text to Check out

```javascript
document.querySelector(".listing .mytabs .diwali-deals-product-sale-pro .diwali-deals-product-sale-btn").innerText = "Check out"
```

### Output

![Output](./Pic9.png)

6. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Topics

    -   Query Selector, Event listeners, Changing Styles

### Sample Image

![Sample One](./Pic10.png)

### Tasks

     Target the search box and on hover change thebackground color to red.

```javascript
// ans --
document.querySelector(".searchinput___19uW0").addEventLIstener("mouseover", document.querySelector(".searchinput___19uW0").style.backgroundColor="red")
```

### Output

![Output](./Pic11.png)

7. Webiste Name: [MDN Web Docs](https://developer.mozilla.org/en-US/)

### Topics

       Form, Value, Submit

### Sample Image

![Sample One](./Pic12.png)

### Tasks

     To Search a topic in the MDN Search bar.
     First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

```javascript
// ans - 
// target the input id -
document.querySelector("#hp-search-input").value = "Css"

// form submit
document.querySelector("#hp-search-form").submit()

```

### Output

![Output](./Pic13.png)

8. Webiste Name: [Google](https://www.google.com/)

### Topics

       Remove Elements

### Sample Image

![Sample One](./Pic14.png)

### Tasks

     Remove alternate languages from the home page languages listed

```javascript
// iterate and remove
document.querySelectorAll("#SIvCob a").forEach((e) => e.remove())
```

### Output

![Output](./Pic15.png)

9. Webiste Name: [Code Wars](https://www.codewars.com/)

### Topics

       Change Font Family, Color of Text.

### Sample Image

![Sample One](./Pic16.png)

### Tasks

    Change the font family of the text to monospace and text color to the logo’s background color.

```javascript
// change font family--
document.querySelector(".display-heading-1").style.fontFamily = "Monospace"

// change font color ---
document.querySelector(".display-heading-1").style.color = "red"
```

### Output

![Output](./Pic17.png)

10. Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)

### Topics

       querySelector, mouseover, click eventListener,  callback function, style,

### Sample Image

![Sample One](./Pic18.png)

### Tasks

    Target the button and change background colour on mouseover

```javascript
document.querySelector(".login-btn-text").addEventListener("mouseover", document.querySelector(".login-btn-text").style.backgroundColor="red")
```

### Output

![Output](./Pic19.png)

11. Webiste Name: [realme](https://www.realme.com/in/)

### Topics

       querySelector,style,background-image

### Sample Image

![Sample One](./Pic20.png)

### Tasks

    change the realme logo to ineuron logo

```javascript
document.querySelector(".logo .icon-logo").style.backgroundImage = "url('https://ineuron.ai/images/ineuron-logo.png')";
```

### Output

![Output](./Pic21.png)

12. Webiste Name: [Github](https://github.com/)

### Topics

       querySelector,style,background-Color

### Sample Image

![Sample One](./Pic22.png)

### Tasks

     change the background colour of the button to blue.

```javascript
// for some reason new button is available inplace create new button in my account --
// so i have target the new button and change the color to blue
document.querySelector(".d-md-flex .btn").style.backgroundColor = "blue"
```

### Output

![Output](./Pic23.png)

13. Webiste Name: [Hackerrank](https://www.hackerrank.com/)

### Topics

       querySelector,innerHtml

### Sample Image

![Sample One](./Pic24.png)

### Tasks

Target the top description and change “Matching developers with great companies” to ‘JSBOOTCAMP“.

```javascript
// ans - 
document.querySelector(".fl-module .fl-module-content .fl-heading .fl-heading-text").innerText = "JSBOOTCAMP"
```

### Output

![Output](./Pic25.png)

14. Webiste Name: [Asus](https://www.asus.com/in/)

### Topics

      querySelector,style,font-size

### Sample Image

![Sample One](./Pic26.png)

### Tasks

       change the fontsize of “Hot Deals” to 80px

```javascript
// ans --
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize="80px"
```

### Output

![Output](./Pic27.png)

15. Webiste Name: [Dell](https://www.dell.com/en-in/shop/deals/laptop-deals?gacd=10415953-9016-5761040-285981356-0&dgc=ST&gclid=Cj0KCQjwguGYBhDRARIsAHgRm4-XUDMhhVNyHXb3s1gY4ZBzORr_d9Se-buhJwy7asyUe7YdqEA11eEaAt6UEALw_wcB&gclsrc=aw.ds&nclid=BxjBlpBQsX6pjSHh-L8YYSU77EpfXRkG1AGMB5Wbeu386ykspfrPDnfx_DdFau20)

### Topics

      querySelector,style.textAlign

### Sample Image

![Sample One](./Pic28.png)

### Tasks

       Convert the text “G15 Gaming Laptop” from left to right

```javascript
document.querySelector("#d560823win9b .ps-top .ps-title").style.textAlign="right"
```

### Output

![Output](./Pic29.png)

16. Webiste Name: [Vercel](https://vercel.com/)

### Topics

     querySelector,innerHTMl

### Sample Image

![Sample One](./Pic30.png)

### Tasks

      change the heading “Start with the developer” to “Start with Scratch”

```javascript
document.querySelector(".section-title_title__VEDfK").innerText = "Start with Scratch"
```

### Output

![Output](./Pic31.png)

17. Webiste Name: [Sony](https://www.sony.co.in/)

### Topics

    querySelector,innerHTMl

### Sample Image

![Sample One](./Pic33.png)

### Tasks

     change the button text To current Date.

```javascript
// ans --
document.querySelector(".btn-container").innerHTML = new Date()
```

### Output

![Output](./Pic32.png)

18. Webiste Name: [Philips](https://www.philips.co.in/)

### Topics

     querySelector,style,backgroundcolor

### Sample Image

![Sample One](./Pic34.png)

### Tasks

    change the background colour blue to orange

```javascript
// ans -- 
document.querySelector(".p-footer .p-grid").style.backgroundColor = "orange"
```

### Output

![Output](./Pic35.png)

19. Webiste Name: [Canon](https://in.canon/)

### Topics

          querySelector,src

### Sample Image

![Sample One](./Pic36.png)

### Tasks

    extract the canon logo

```javascript
// ans--
document.querySelector(".navbar-header .navbar-brand .logo").src
```

### Output

![Output](./Pic37.png)

20. Webiste Name: [Oppo](https://www.oppo.com/in/)

### Topics

          querySelector,style,color

### Sample Image

![Sample One](./Pic38.png)

### Tasks

      Change the description colour black to orange

```javascript
//ans --
document.querySelector(".section-box .desc").style.color = "orange"
```

### Output

![Output](./Pic39.png)
