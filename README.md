# Front End for Donor Management

> You will use your skills to be responsible for the Front End Architecture of this project. You will work directly with the UI Developer and the Back End Developer to ensure that all React components are wired up in proper fashion.

Lambda School build week, March 11th 2091

Project deployed at [https://donor-management-lambda.netlify.com/](https://donor-management-lambda.netlify.com/)

## Minimum viable product

> Board members can log in and see a list of donors and the time they were last contacted. User can log in and add a donor, their contact info, a list of their past donations, location they allocated their donation to (optional) and update the date and method of last communication.

## Implemented features

- A user can create a new account or log in to an existing one
- A user see a dashboard with important metrics like amount raised, number of donors, and number of campaigns
- A user can see a list of their donors sorted but how long ago they were contacted
- A user can see at a glance which donors have gone stale (are due to be contacted)
- A user can add a new donor, delete a donor, or mark a donor as newly contacted
- A user can record a gift from a donor and associate the gift with a campaign
- A user can see a list of campaigns, along with their funding goals and current funding
- A user can add and delete campaigns

## Built with React

- Global app state with hooks and the context API
- Client side routing with `react-router-dom`
- Authentication using JSON Web Tokens
- Protected routes
- CRUD resources from multiple endpoints
- CSS-in-JS with `styled-components`

## Takeaways

- For something seemingly so simple, this project sure did take a lot of code to get it to where it is!
- I tend to get bogged down in the details. I enjoy getting the code just right but I need to keep in mind that the user-facing bits of the product are most important. I wrote hundreds of lines of clever code but I don't think the UI I ended up with is particularly good.
- I tried to avoid Redux and use React's built in context API and hooks for global state. While there is less boilerplate, the code is probably just as complex as if I had used Redux. Hooks are so new I couldn't really find any patterns for what I wanted to accomplish. With three days to build this, I felt so pressed for time that I didn't really have time to do proper research. My implementation works quite well and could be improved further with some effort,
- I learned A LOT about React in general. The experience reaffirmed that there is no better way to learn than to roll up your sleeves and build something.
- I officially enjoy working with JavaScript.
- I'm eager to learn about testing. Testing every little action and UI element after each change to the code quickly becomes a chore.
