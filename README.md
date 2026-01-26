# Disclaimer

This software is based on the [OHDSI AtlasVisualizations Project](https://github.com/OHDSI/AtlasVisualizations). It is an archived snapshot, provided AS-IS, and is not actively maintained.

This software uses the OHDSI AtlasVisualizations code as a starting point, and upgrades it to current versions (as of 12/1/2025) of all dependencies, including D3.

# Visualizations

Visualizations is a JavaScript module to support D3 visualizations in web-based applications. Built with d3 v7.

## Getting Started

Clone a copy of the main repo by running:

```bash
git clone git://github.com/CareEvolution/AtlasVisualizationsPublic
```

Point a local HTTP server to the root of the repository (vite, serve, Node Express, etc.)

Open a browser to the examples under the /examples folder.

## Developing and Debugging

The examples are configured using RequireJS and reference the node_modules directory for library dependencies (D3, jQuery, etc.). To run the examples, just open one of the examples, set breakpoints and edit-reload to see changes.

There are no development dependencies required for updating code, although npm is used to version and publish the package.

## Running the Optimizer and Publishing to NPM Registry

### Build Steps

**Note: building this libary depends on node >= 24 and npm >= 11.6.2 **

In order to minify/optimize the javascript libary, you will need to perform an npm install:

```bash
npm ci
```

The package.json file contains scripts to build the files. To run the build scripts, execute:

```bash
npm run build
```

This will build and minify the library. The files will be generated in dist: atlascharts.js and atlascharts.min.js. The min.js file is the concatinated libary that has been run throguh the google closure compiler.

### Publishing

Increment the version number in the package.json file.

Commit all changes and push to github.

In the root directory, run:

```bash
git tag x.y.z
git push --tags
```

This will trigger Github to build, package, and publish the library.

## Libary Contents

### Modules

The following plots are supported by the visualization library:

- aster
- line
- boxplot
- histogram
- barchart
- doughnut (piechart)
- areachart
- trellisline
- treemap
