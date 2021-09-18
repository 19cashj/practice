//Single selectors work fine on their own when referencing, but multi selectors put elements into a list even if there is only one element.
//These lists look like arrays but they cant use array methods


document.querySelector("#id") //Combination of single dom selectors like getElementById.
document.querySelectorAll(".class") //Combination of multi dom selectors like getElementsByClassName.
//Both these need prefixes to tell what to reference
//They also work with css styles ex: document.querySelectorAll("p.intro"); reference all p elements with a class of intro

document.getElementById("id") //Single selector that selects one element of an id
document.getElementsByClassName("class") //Multi selector that selects all elements of a class.
document.getElementsByTagName("p"); //Find all elements by HTML tag name

element.innerHTML =  	//Change the inner HTML of an element
element.textContent = //Change the text content of an HTML element
element.attribute =  	//Change a current existing attribute value of an element
element.style.property = "" 	//Change the style of an element
element.value //Gets the current value of an element like text

element.setAttribute(attribute, value) 	//Add and set a new attribute of an element

document.createElement("p") 	//Create an HTML element
document.removeChild(element) 	//Remove an HTML element
document.appendChild(element) 	//Add an HTML element to another
document.replaceChild(new, old) 	//Replace an HTML element
document.write(text) 	//Write into the HTML output stream

document.querySelector('[name=item]') //Object collection, finds elements with an attribute of name with a value of item