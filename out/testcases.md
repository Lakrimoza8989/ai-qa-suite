# User Registration and Login Requirements

## User Stories
- **As a user**, I want to register with my email and password so that I can create an account.
- **As a user**, I want to receive a confirmation link via email after registration so that I can verify my account.
- **As a user**, I want to log in to my account using my email and password so that I can access my profile.

## Functional Requirements
1. **Registration**
   - Users must provide a unique email address and a password.
   - Password must be between 8 and 32 characters long and include at least one digit.
   - Upon successful registration, a confirmation link must be sent to the user's email address.

2. **Email Confirmation**
   - The confirmation link must be valid for a specified duration (e.g., 24 hours).
   - Users must be able to click the confirmation link to verify their email address.

3. **Login**
   - Users must be able to log in using their registered email and password.
   - If the email or password is incorrect, an appropriate error message must be displayed.

## Constraints
- **Password Requirements**
  - Length: 8-32 characters
  - Must contain at least 1 digit

- **Email Requirements**
  - Must be unique across all user accounts

- **Rate Limiting**
  - Limit registration attempts to 5 per minute per IP address.

## Acceptance Criteria
- [ ] User can successfully register with a valid email and password.
- [ ] User receives a confirmation email after registration.
- [ ] User can confirm their email via the link provided.
- [ ] User can log in with valid credentials.
- [ ] Appropriate error messages are displayed for invalid login attempts.
- [ ] Registration attempts are limited to 5 per minute.