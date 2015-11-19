function setupResume () {
	// Define coustom elemnts here
	var ContactDataElement = document.registerElement('r-contact-data', {
		prototype: Object.create(HTMLButtonElement.prototype),
		extends: 'div'
	});

	var EmailProto = Object.create(HTMLElement.prototype);
	EmailProto.createdCallback = function () {
		// Test if visable
		if(! (this.offsetParent === null))
			this.innerHTML = "<i class=\"fa fa-envelope-o\"></i>\t" + this.innerHTML;
	}

	var PhoneProto = Object.create(HTMLElement.prototype);
	PhoneProto.createdCallback = function () {
		// Test if visable
		if(! (this.offsetParent === null))
			this.innerHTML = "<i class=\"fa fa-mobile\"></i>\t" + this.innerHTML;
	}

	var AddressProto = Object.create(HTMLElement.prototype);
	AddressProto.createdCallback = function () {
		// Test if visable
		if(! (this.offsetParent === null))
			this.innerHTML = "<i class=\"fa fa-home\"></i>\t" + this.innerHTML;
	}

	var GithubProto = Object.create(HTMLElement.prototype);
	GithubProto.createdCallback = function () {
		// Test if visable
		if(! (this.offsetParent === null))
			this.innerHTML = "<i class=\"fa fa-github\"></i>\t" + this.innerHTML;
	}

	var TwitterProto = Object.create(HTMLElement.prototype);
	TwitterProto.createdCallback = function () {
		// Test if visable
		if(! (this.offsetParent === null))
			this.innerHTML = "<i class=\"fa fa-twitter\"></i>\t" + this.innerHTML;
	}

	var LinkedInProto = Object.create(HTMLElement.prototype);
	LinkedInProto.createdCallback = function () {
		// Test if visable
		if(! (this.offsetParent === null))
			this.innerHTML = "<i class=\"fa fa-linkedin-square\"></i>\t" + this.innerHTML;
	}

	var EmailElement = document.registerElement('r-email', {
		prototype: EmailProto,
	});

	var PhoneElement = document.registerElement('r-phone', {
		prototype: PhoneProto,
	});

	var AddressElement = document.registerElement('r-address', {
		prototype: AddressProto,
	});

	var GithubElement = document.registerElement('r-github', {
		prototype: GithubProto,
	});

	var TwitterElement = document.registerElement('r-twitter', {
		prototype: TwitterProto,
	});

	var LinkedInElement = document.registerElement('r-linkedin', {
		prototype: LinkedInProto,
	});

	var ContactFieldProto = Object.create(HTMLElement.prototype);
	ContactFieldProto.createdCallback = function () {
		this.innerHTML = document.getElementsByTagName('r-contact-data')[0].innerHTML;
	}

	var ContactFieldElement = document.registerElement('r-contact-field', {
		prototype: ContactFieldProto,
	});

	var NameFieldProto = Object.create(HTMLElement.prototype);
	NameFieldProto.createdCallback = function () {
		this.innerHTML = document.getElementsByTagName('r-author')[0].outerHTML  + "<hr/>" + document.getElementsByTagName('r-subtitle')[0].outerHTML ;
	}

	var NameFieldElement = document.registerElement('r-name-field', {
		prototype: NameFieldProto,
	});

	var PersonalDataProto = Object.create(HTMLElement.prototype);
	PersonalDataProto.createdCallback = function () {
		this.insertBefore(document.createElement("r-section-heading"), this.firstChild);
		this.firstChild.innerHTML = "Personal Data"
	}

	var PersonalDataElement = document.registerElement('r-personal-data', {
		prototype: PersonalDataProto
	});

	var EntryProto = Object.create(HTMLElement.prototype);
	EntryProto.createdCallback = function () {
		var caption = this.childNodes[0].nodeValue;
		if(typeof(caption) == 'undefined')
			return;

		var without_caption = this.innerHTML.substring(caption.length);
		this.innerHTML = "<r-entry-caption>" + caption + "</r-entry-caption>" + without_caption;
	}

	var EntryElement = document.registerElement('r-entry', {
		prototype: EntryProto,
	});

	var TitleProto = Object.create(HTMLElement.prototype);
	TitleProto.createdCallback = function () {
		var delimiter_pos = this.innerHTML.indexOf(",");

		if(delimiter_pos != -1)
			this.innerHTML = "<strong>" + this.innerHTML.substring(0, delimiter_pos) + "</strong><i>" + this.innerHTML.slice(delimiter_pos) + "</i>";
		else
			this.innerHTML = "<strong>" + this.innerHTML + "</strong>";
		this.parentNode.insertBefore(document.createElement("br"), this.nextSibling);
	}

	var TitleElement = document.registerElement('r-title', {
		prototype: TitleProto,
	});
}
