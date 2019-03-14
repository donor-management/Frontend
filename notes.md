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
