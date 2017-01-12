HTML5

In this lab you learn the basics of HTML5 (Hypertext Markup Language), which is the language for describing the structure and content of a web page.

HTML5 is the most fundamental language in web programming. In subsequent labs, several new technologies are introduced to facilitate styling and dynamic content, but HTML5 remains the starting point and centerpoint of web programming techniques.

Note: When we reference to HTML in this and upcoming labs, we always mean HTML5, which is the latest version of the markup language.

Task list

In the lab you do the following tasks:

Use basic HTML5 markup in a web page and verify the page's correctness.
Use tables in a web page.
Include audio and video and use semantic markup.
This lab takes approximately 2 hours.

1 Basic HTML5 markup

In this task you learn to create a HTML5 document with basic markup.

Creating a document in C9

In C9, create a new document and name it to computers80.html. Get a HTML5 template (for example) from w3Schools.com-pages.

The resulting HTML5 document contains the definition of an empty web page. First, pay attention to the overall structure of the web page defined in the document. There is a correspondence between a file and a web page. Each static web page corresponds to one HTML5 file.

The page consists of elements, separated by a start tag and end tag. For example, the root element html starts with a start tag <html> and ends with an end tag </html>.

Elements are nested: for instance, the body element is inside the html element.

The elements follow the HTML5 syntax. The syntax dictates, for example, that:

Each HTML5 page contains an html root element. All the markup for a web page goes inside this element.
Inside the html element, there are head and body elements in this order. In head element, there is background information for showing the web page, usually consumed by browsers. In the example file, there is one piece of information, the title of the page, indicated in title element.
The content is within body element.
Writing content and structure

Fill the title element with the text you want to appear in the top of the browser window (or as a label in browser tab). It is also a good practice to enter the meta element used for character encoding:

<head>
    <title>1980's home computers</title>
    <meta charset="utf-8" />
</head>
Above, meta is an empty element with an attribute. It is an exception of the start tag / end tag rule. We return to these later.

Once the head element is ready, add some markup inside the body element of the web page:

<body>
    <article>
    <h1>1980's Home Computers</h1>
    <p>In early 1980's, home computers became mainstream. For the first time, computers could be
        purchased by an average family household.</p>

    <h2>Clever uses</h2>
    <p>The main usage for a home computer was, of course, games. As cool games may not be a valid reason
        for purchasing an expensive gadget, a wide variety of potential uses were invented to satisfy those
        family members who might otherwise be sceptical.</p>

    <h2>Legendary computers</h2>
    <p>The best known computer of the eighties was Commodore 64, but there are other computers that gained popularity.</p>

    <h2>Key concepts</h2>
    <p>The hardware charateristics of a home computer could be defined by its graphics and sound capabilities, CPU, and amount of memory.</p>
    </article>
</body>
Open the file in a browser by selecting *Preview -> Live Preview File *. The page is displayed using the browser´s built-in style settings. We can later change how the page looks using CSS (Cascaded Style Sheets).

Later, when you amend your code, just hit Refresh button in your browser (F5 in many browsers) to show the updated content.
