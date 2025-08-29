Q1 : What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans :  the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll 

getElementById                    getElementsByClassName                        querySelector                                      querySelectorAll 


returns a single element          returns an HTMLCollection, live, by class     returns the first element matching a CSS selector  returns a static NodeList of all matches by its unique id
 





Q2 : How do you create and insert a new element into the DOM?

Ans : To create a new element :  document.createElement('element name');
      To insert a new element : 'the parent element'.appenchild('new element name');




Q3 : What is Event Bubbling and how does it work?

Ans : event bubbling means if an event triggered the child node  then it goes like bubble to the parent and also triggered it.
      mechanism : The first executed handler is on the target
      Then its parent's, and its parent's, etc. 




Q4: What is Event Delegation in JavaScript? Why is it useful?

Ans : event delegation is way to where a single event listener on a parent element
      manages event to it's child element, leveraging event bubbling and reduce memory 
      usage compile the code in short time. 
    
    it is usful because :

    i. it handle dynamically elements efficiently.
    ii. don't need to write the same code again and again. shorten codes.
    iii. reduce time and reduce memory usage.



Q5: What is the difference between preventDefault() and stopPropagation() methods?

Ans : to stop event bubbling we use stopPropagation() .this stops the event to go upwoards to trigger parent elements.
      and preventDefault() stops the browser from executing the default action of a event.