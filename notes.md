# Donor management (Bountiful Children's)

"Pitch: A donor management app that allows for donor communication tracking and easy user sign up.

MVP: Board members can log in and see a list of donors and the time they were last contacted. User can log in and add a donor, their contact info, a list of their past donations, location they allocated their donation to (optional) and update the date and method of last communication.

Stretch: ??

## Data

- User
  - Username/pw
  - Name: str
  - Email: str
- Campaign
  - Title: str
  - Cause: str
  - Description: long str
  - Beneficiary: str
  - Goal: int
- Donor
  - Name: str
  - Email: str
  - Causes: str (to keep it simple)
  - Last contact: datetime
  - Donations: Donation
- Donation
  - Pledged?: bool
  - Campaign: Campaign
  - Donor: Donor
  - Amount: int
  - Notes: long str

## Stories

- A user can create a new user account
- A user can login
-
- A user can see a summary of all donations
- A user can see a list of donors
- A user can add/update/delete a donor
- A user can see/add/update/delete a donation for a donor
- A user can mark a pledge as complete, convert to donation
- A user can log the last time and method a donor was contacted

# Routes

- /
- /login
- /register
- /logout
- /donors
- /donors/:donorId
- /donors/new
- /404

# Components

AppRouter

- App
  - MainNav
  - HomePage
  - LoginFormPage
  - RegisterFormPage
  - DashboardPage
    - DashNav
    - DonorsListPage
    - CampaignsListPage
    -
  - Footer
