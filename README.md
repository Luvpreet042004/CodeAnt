# CodeAnt
=======
# **Project Setup Guide**

This guide will help you set up and run the project locally. The project uses **Vite**, **React with TypeScript**, and **Tailwind CSS**.

---

## **Prerequisites**

Ensure you have the following installed on your machine:

1. **Node.js** (version 14 or higher)  
   Download and install from [Node.js official website](https://nodejs.org/).

2. **npm** or **yarn**  
   npm comes with Node.js. Alternatively, you can install Yarn by following the instructions [here](https://yarnpkg.com/).

3. **Git** (optional, if cloning the repository)  
   Download and install from [Git official website](https://git-scm.com/).

---

## **Clone the Repository**

Run the following command in your terminal to clone the repository:

```bash
git clone https://github.com/Luvpreet042004/CodeAnt
```

Replace `<repository-url>` with the URL of your project’s repository.

---

## **Navigate to the Project Directory**

Change into the project directory:

```bash
cd <project-name>
```

Replace `<project-name>` with the name of your project directory.

---

## **Install Dependencies**

Install the project dependencies using npm or yarn:

### Using npm:
```bash
npm install
```

### Using yarn:
```bash
yarn install
```

---

## **Run the Development Server**

Start the development server with the following command:

### Using npm:
```bash
npm run dev
```

### Using yarn:
```bash
yarn dev
```

The development server will start, and you can access the application in your browser at [http://localhost:5173](http://localhost:5173).

---

## **Build for Production**

To create a production build of the project, run:

### Using npm:
```bash
npm run build
```

### Using yarn:
```bash
yarn build
```

This will generate the production-ready files in the `dist` directory.

---

## **Preview the Production Build**

To preview the production build locally, run:

### Using npm:
```bash
npm run preview
```

### Using yarn:
```bash
yarn preview
```

---

## **Scripts**

The following scripts are available in the `package.json`:

| Script         | Description                                     |
| -------------- | ----------------------------------------------- |
| `dev`          | Runs the development server.                   |
| `build`        | Creates a production build.                    |
| `preview`      | Serves the production build locally.           |
| `lint`         | Lints the code (if ESLint is configured).       |
| `format`       | Formats code (if Prettier is configured).       |

---
# Thank You
