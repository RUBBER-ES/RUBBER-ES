# RUBBER-ES
## Installation
1.  Install [turbowarp desktop](https://desktop.turbowarp.org) on your computer. This is necessary due to cors policy on fetching local servers.
2.  Install nodejs.
3.  Download a local clone of the reposotory.
4.  In a terminal open the subdirectory server of this repo.
5.  Run `npm install` and then run `node .`
6.  Open the file mobile-ui-with-os.sb3 on turbowarp desktop. When it requests to load an extension tick the run extension without sandbox tickbox and press okay.
7.  Press the green flag. The code is 0000.
## Roadmap for first release
- [x] Create Lockscreen
- [x] Create login page with typed number dots
- [x] create taskbar renderer
- [x] Render sb3 file with scaffolding api
- [x] Render custom icons
- [x] Create nodejs filesystem server to remove the necessity for the files extension
- [x] Fetch nodejs server
- [x] Home button
- [ ] WiFi, Bluetooth and wired connections manager through nodejs
- [ ] Installation dialog for custom apps
- [ ] Docs repo complete
- [ ] Home screen renderer
- [x] Detect app crashing and return to home screen
