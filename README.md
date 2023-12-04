# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


#### for installing sever 
npm install json-server concurrently

#### added the following line in the package.json file
 "proxy": "http://localhost:6001",
 "scripts": {
 "server": "json-server --watch db.json --port 6001",
 "devserver": "concurrently \"npm run server\" \"npm run dev\""
 }
### for social media install
 npm install react-share 

#### how to use it
npm run devserver
