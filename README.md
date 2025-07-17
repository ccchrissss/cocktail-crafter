# Cocktail Crafter
Have you ever looked up a drink recipe only to be inundated with paragraphs upon paragraphs of flowery prose, aggressive popups urging you to strongly consider joining their newsletter _just in time_ for summer cocktail season, and a 5-paragraph essay about the author's unique qualifications to create such carefully-crafted recipes? 

Introducing **Cocktail Crafter**! A cocktail recipe web app without all the excess. This app lets you easily search for cocktails, or pick from a few hand-selected varieties if you're looking for something new. No popups, stories, or poetic waxings to be found.

**Link to project:** https://cocktailcrafter.netlify.app


<img width="1440" alt="Screenshot 2024-01-25 at 3 12 21 PM" src="https://github.com/ccchrissss/cocktail-crafter/blob/main/src/assets/pr-images/cocktail-crafter-50percent-landing-page.png">



## How It's Made:

**Tech used:** React, daisyUI, Tailwind CSS, TheCocktailDB API

I created **Cocktail Crafter** as a sleek, single page application to help users mix up delectable drinks. The landing page prominently displays the app's main feature: The Cocktail Picker. Users are prompted to enter their cocktail of choice in the input box. This triggers the getDrink() function which fetches a variety of data from TheCocktailDB API. A function called convertAndFilter() extracts the desired information from the ingredients and measures arrays, while also converting the data from metric to US customary units, if needed. Then, the ap renders the CocktailCard component with this data, providing the user with an image, official name, ingredients list, and instructions to craft their desired drink. 

Further down the page, we have a carousel of hand-selected cocktails to inspire the user to try something new. They can then click the caption inside a given image and they'll be brought back up to the recipe section which will dynamically update to show the new cocktail information.


## Lessons Learned:

One important lesson I learned in this project is 'test test test!' Using an API opens up the opportunity for many edge case issues that can be difficult to predict until they're staring right at you. One such issue I encountered was having 'null' appear as the unit measure inside the ingredients list for a chosen cocktail. This issue would only arise when there was an ingredient that did not require a specific measure, e.g. 'ice cubes' or 'salt.' Thoroughly testing the app with a wide variety of cocktails brought this specific issue to light and highlighted the importance of testing. 

## Future Improvements:

**Unit Switcher:** All cocktail measures are shown in US customary units, though some are initially in metric and must be converted before rendering. Adding a toggle to allow the user to choose the displayed units would increase usability of the app and widen its appeal.

**Cocktail Variations:** TheCocktailDB API includes many twists on classic cocktails. Currently, the user can only access these other recipes if they happen to know the name of the specific variation. An optimization here would provide a list of alternative recipes that are similar to the cocktail they've searched for in The Cocktail Picker, thus enhancing the user experience. 

