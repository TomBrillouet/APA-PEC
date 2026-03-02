# What is APA-PEC ?

> **Patient management** application for healthcare and adapted physical activity professionals.
> Treatment monitoring, assessments (initial, intermediate, and final), results visualization through charts, and report generation.

![License](https://img.shields.io/github/license/TomBrillouet/APA-PEC)
![Version](https://img.shields.io/github/package-json/v/TomBrillouet/APA-PEC)
![Last commit](https://img.shields.io/github/last-commit/TomBrillouet/APA-PEC)

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## Table of Contents

- [About](#about)
- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

**APA-PEC** is a web application designed for physical therapists and adapted physical activity (APA) instructors.
It centralizes patient monitoring by allowing users to create and manage treatment plans, perform assessments (initial, intermediate, and final) using standardized tests, and view results in graph form to track progress over time.
The application also generates printable reports, facilitating communication between practitioners and their patients.

---

## Demo

<!--![Dashboard](lien-vers-image-ou-gif)-->

🔗 [Live Demo](https://apa-pec.vercel.app)

> ⚠️ The application interface is currently available in French only.

---

## Features

### Patient Management

- Add patients with full identity, contact details, and medical information
- Assign standardized tests at creation to generate an automatic initial assessment
- Update contact information at any time
- Archive patients by closing their treatment plan

### Assessments

- Create **initial, intermediate, and final** assessments
- Dynamic result sections based on assigned tests
- Track weight, height and BMI over time
- Add free-text fields: patient feedback, problem progression, plan adjustments

### Results & Charts

- Visualize test results and physical data evolution through **interactive charts**
- Compare results across multiple assessments for each patient

### Reports

- Generate and save **printable reports**
- Download assessments as **PDF** including patient data and practitioner information

### Practitioner Profile

- Edit practitioner information (name, profession, contact, company, website)
- Practitioner details automatically included in generated PDFs
- Each practitioner manages their own isolated patient data

## Technologies

| Technology         | Version | Usage                       |
| ------------------ | ------- | --------------------------- |
| React              | 19.2    | UI framework                |
| React Router       | 7.13    | Client-side routing         |
| Styled Components  | 6.3     | Component styling           |
| Firebase Auth      | 12.9    | User authentication         |
| Firebase Firestore | 12.9    | Real-time database          |
| Recharts           | 3.7     | Charts & data visualization |
| React Select       | 5.10    | Custom select inputs        |
| React Toastify     | 11.0    | Notifications               |
| React Icons        | 5.5     | Icon library                |
| React Spinners     | 0.17    | Loading indicators          |
| React To Print     | 3.3     | PDF generation & printing   |
| Vite               | 7.3     | Build tool & dev server     |
| ESLint             | 9.39    | Code linting                |

---

## Prerequisites

- [Node.js](https://nodejs.org/) >= **20.19**
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Firebase](https://firebase.google.com/) project with Authentication and Firestore enabled

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/TomBrillouet/APA-PEC.git

# 2. Navigate to the project folder
cd APA-PEC

# 3. Install dependencies
npm install

# 4. Configure environment variables
cp .env.example .env
```

Then fill in your Firebase credentials in the `.env` file (see [Environment Variables](#environment-variables)).

---

## Usage

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
APA-PEC/
├── public/
│   └── images/                 # Static assets (backgrounds, logos)
├── src/
│   ├── api/                    # Firebase configuration and Firestore queries
│   ├── components/
│   │   ├── pages/
│   │   │   ├── dashboard/      # Main app layout (Header, Menu, Main content)
│   │   │   ├── login/          # Authentication page
│   │   │   └── error/          # Error page
│   │   └── reusable/           # Shared UI components (Button, Input, Loader…)
│   ├── context/                # React contexts (Auth, Main app state)
│   ├── datas/                  # Static data and app configuration
│   ├── enums/                  # Enumerations and constants
│   ├── hooks/                  # Custom React hooks
│   ├── theme/                  # Styled Components global theme
│   ├── utils/                  # Utility functions (math helpers…)
│   ├── App.jsx
│   └── main.jsx
├── .env.example                # Environment variables template
├── .eslint.config.js
├── vercel.json
├── vite.config.js
├── package.json
└── README.md
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```env
VITE_API_KEY =
VITE_AUTH_DOMAIN =
VITE_PROJECT_ID =
VITE_STORAGE_BUCKET =
VITE_MESSAGING_SENDER_ID =
VITE_APP_ID =
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create your branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'feat: add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## License

Distributed under the **MIT** License. See [`LICENSE`](LICENSE) for more information.
