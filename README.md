# Search locations

Search some locations on the map, using latitude and longitude.

## Description

This project leverages the power of the open-source JavaScript library `Leaflet` and the vast resources of [OpenStreetMap](https://www.openstreetmap.org/) to help you search for locations effortlessly.

You can also choose to share your current location on the map (optional).

Simply adjust the circle on the map's radius using the scrollbar or text input field. The circle's radius is measured in meters.

### Technologies Used

- JS Libraries: [Leaflet](https://leafletjs.com/)
- Programming Language: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Font: [Archivo by Omnibus-Type](https://fonts.google.com/specimen/Archivo)
- Build tool: [Vite](https://vitejs.dev/)
- Hosting: [GitHub Pages](https://pages.github.com/)
- Dev Environment: [VSCode](https://code.visualstudio.com/) with [dev containers](https://code.visualstudio.com/docs/remote/containers) in [Zorin OS](https://zorinos.com/)

### Demo

You can see the demo here: <https://jhordyess.github.io/search-locations>

## How to use

1. Clone the repository.

```bash
git clone git@github.com:jhordyess/search-locations.git
```

2. Open the project folder.

```bash
cd search-locations
```

3. Install the dependencies.

```bash
yarn
```

4. Run the project.

```bash
yarn dev
```

5. Open the browser on [http://localhost:5173/search-locations](http://localhost:5173/search-locations).

## How to use with VSCode dev containers

You can use the VSCode dev containers to run the project in a containerized environment.

You need to have installed [Docker](https://www.docker.com/) and [VSCode](https://code.visualstudio.com/), and the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.

1. Clone the repository.

```bash
git clone git@github.com:jhordyess/search-locations.git
```

2. Open the project with VSCode:

```bash
code search-locations
```

3. Open the command palette and select the option `Dev Containers: Reopen in Container`.

4. Wait for the container to be built and the project to be started.

5. Open the terminal in VSCode and run the project:

```bash
yarn dev
```

6. Open the browser at <http://localhost:5173/search-locations>

## To-Do

- Use SI units in the radius input field.
- Use ReactJS. 🤓

## License

© 2021 [Jhordyess](https://github.com/jhordyess). Under the [MIT](https://choosealicense.com/licenses/mit/) license. See the [LICENSE](./LICENSE) file for more details.

---

Made with 💪 by [Jhordyess](https://www.jhordyess.com/)
