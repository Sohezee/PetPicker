# PetPicker <img src="resources/images/PetPickerLogo.png"  width="70" height="70" align="center">

Website for finding pets compatible with your preferences :dog: :cat:

## Inspiration
My family and I have considered buying a pet on multiple occasions. What has always prevented us
from getting one though, is the process of finding the right one. In general, I've been unable to
find high-quality resources for finding pets, so I made this. This was also created as a submission
to a programming competition.
## What it does
Pet Picker is a unique website built to provide users with pets compatible with their preferences
entered through an easy-to-understand control panel. The metrics which users can input their preferred qualities for include maintenance, social Level, life span, and vegan diet compatibility.
It supports screen dimensions of all sizes and is mobile-friendly. It contains accurate data on 25+ pets.
## How I built it
Pet Picker was built using HTML5, CSS, and JavaScript. No frameworks were utilized, and no templates
were used for the UI. Pet Picker is built entirely from scratch, and I learned these languages through
Codecademy.
## Challenges I ran into
Throughout the development of Pet Picker, since this is the first website I've made, countless problems
were encountered. Here are the most notable ones
- ### Problem: Determining metrics for pets is not exactly clear cut, and more nuanced than a simple Google search.
  - **Details:** For the categories of maintenance and social interaction, I opted for a scale ranging from 1 to 3. This choice aimed to simplify the pet profiles, making it easier for users to quickly grasp the information. However, this approach has its drawbacks. When metrics are set on an objective scale relative to all pet categories, the result can be nearly identical scores for certain types of pets. For example, using this methodology would mean that all fish would have both a social level and maintenance score of 1 when compared to other pet categories like dogs. Beyond these two metrics, other factors such as life span showed some variation, but the monthly cost for individual pets proved to be highly variable. During my research, I encountered instances where the monthly expenses for a single pet varied by over a thousand dollars. Even the vegan metric proved difficult. Many sources disagree on whether or not dogs can be vegan. I also contemplated whether or not I should consider bugs vegan for a pet.
  - **Solution:** Due to the restrictive nature of a 1 to 3 scale, I chose to assign maintenance and social levels for each animal relative to other pets of the same category. This allowed for more variety in metrics within a certain group of pets. For lifespan, I simply chose the average number, and for price per month, I chose a number that would be the required price for the animal to lead a healthy and happy life, so typically close to the low middle of price ranges. As for the vegan diet compatible metric, the only really tough decision was to consider dogs as vegan compatible since all sources agreed dogs *could* be vegan, but an omnivorous diet would suit them best

- ### Problem: Initially, users experienced several user interface discrepancies on specific screen dimensions.
  - **Details:** At particular widths, the logo interfered with the tagline, the pet grid was obscured, the footer text extended to two lines rather than a single line, and there were various other visual inconsistencies. On the about page, the text spread too wide on larger screens, and the sidebars made the site seem cramped on smaller screens.
  - **Solution:** The solution was largely media queries. Some solutions were easy to come across, like making the logo, sidebars, and certain disappear after the screen got small enough, but some of the solutions were more involved. For an example, the pet section getting obscured. My solution to this was to treat the entirety of main as a flexbox, containing a single row with 2 items, the input section, and the pet grid. Once the screen got small enough, the flex-direction of the "main" element would switch to "column", stacking the input section and the grid, allowing for both to be visible on smaller screens.

## Accomplishments that I'm proud of
One of my proudest achievements is the UI design.. The idea for this UI was created entirely by me, with almost no inspiration taken from anywhere else. And for my first website, I think it looks quite nice. There is a lot that may go unnoticed at first glance, like the drop shadow that was placed on the boxes of the pet cards that are colored green, yellow, and red. If you take a close look at the card of a pet with a maintenance or social level of 2 or less, you will notice the drop shadow is only present on the colored boxes, not the grey ones. On top of that, I'm also really proud of how the website looks on different screen sizes, and how responsive the design is in general, through the use of relative measurements and media queries.
## What I learned
This project has been a massive learning opportunity for me. This was my first project utilizing HTML, CSS, and JavaScript, there are countless things I've learned from this experience. One thing that I didn't have a firm grasp on prior to building this site was CSS flexboxes and grids. The vast amount of properties for each confused me when I learned about it, but only through implementation did I obtain a deeper understanding of their functionality. I'm a firm believer that the best way to learn is through hands-on experience, and I feel that my experience here proves that.
## What's next for PetPicker
The original plan for Pet Picker was to create a custom page for each pet in the program. The "See More" link of each pet, as well as the corresponding pets link in the "Animals" dropdown, was supposed to lead to these pages. However, due to time constraints and the fact that I'm a one-person team, I compromised to have the links lead to the animal's Wikipedia page. I can potentially add these pages for each animal, it would just take some time. I also plan to add any more animals, as well as host it with a custom domain. I also see potential in adding more metrics for the user to input as well as adding more categories of pets.

---

*Made From Scratch, No Templates, No Frameworks*

**Made by Soham Vij**