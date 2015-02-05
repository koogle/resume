# HTML Resume

Write a beautiful resume just with HTML. You only need the *resume.js* and *resume.css* files and define your document structure. The custom elements care for the styling and alignment:

## Personal data

```html
  <r-meta-data>
		<r-author>Your name</r-author>
		<r-subtitle>Resume</r-subtitle>
		<r-contact-data>
			<r-email>email@sample.com</r-email>
			<r-phone>xxx-xxxxxx</r-phone><br>
			<r-address>Some address</r-address>
		</r-contact-data>
	</r-meta-data>
```

You can show the personal data by just including `<r-contact-field></r-contact-field>` somewhere in your html page:

```html
  <header>
		<r-contact-field></r-contact-field>
	</header>
```

## Sections

```html

    <r-section>
		<r-section-heading>Section heading</r-section-heading>
		<r-entry>Left description<r-content><r-title>Entry title</r-title>Some information about the entry</r-content></r-entry>
		<r-entry>...</r-entry>
		...
		<r-entry>...</r-entry>
	</r-seciton>	

```

## Javascript 

To make it work you just have to setup the `setupResume()` in your page. For example `onload`:

```html
  <body onload="setupResume()">
```

Have fun and check out my [sample page](http://koogle.github.io/resume)
