# WordPress Development Template: wp-env-starter

This repository provides a starter template for WordPress theme development using modern tools like Vite and TypeScript, integrated with `wp-env` for a seamless local development environment.

## Features

- **Vite**: A fast and modern build tool for frontend development.
- **TypeScript**: Type-safe development for scalable and maintainable code.
- **SASS**: Efficient styling with support for glob imports.
- **Live Reload**: Real-time updates during development.
- **Static Copy Plugin**: Automates copying static assets during the build process.
- **wp-env**: A Docker-based WordPress local development environment.

## Requirements

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (version 16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (required for `wp-env`)

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-repo/wp-env-starter.git
   cd wp-env-starter
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development environment**:

   ```bash
   npm run wp-env start
   ```

   This command sets up a WordPress environment using `wp-env`.

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   The Vite development server will start, providing live reloading and other modern development features.

5. **Build the project for production**:

   ```bash
   npm run build
   ```

   This will output optimized assets in the `dist` directory.

6. **Preview the production build**:

   ```bash
   npm run preview
   ```

   This command previews the production build locally.

## Scripts

The `package.json` includes the following scripts:

- **`dev`**: Start the Vite development server.
- **`build`**: Compile TypeScript and build assets with Vite.
- **`preview`**: Preview the production build.
- **`wp-env`**: Manage the WordPress local development environment.

## Configuration

### wp-env

Customize the `.wp-env.json` file to configure the WordPress environment. Example:

```json
{
  "core": "https://ja.wordpress.org/latest-ja.zip",
  "plugins": ["https://downloads.wordpress.org/plugin/all-in-one-wp-migration.7.84.zip"]
}
```

### Vite

Modify `vite.config.ts` to customize the build process, plugins, or other configurations.

## Troubleshooting

- Ensure Docker is running before starting the `wp-env` environment.
- Check for correct Node.js and npm versions if you encounter dependency errors.
- Refer to the [wp-env documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) for environment-specific issues.

## License

This project is licensed under the [MIT License](./LICENSE).

## Contributing

Feel free to open issues or submit pull requests to enhance this template. Contributions are welcome!

Happy Coding!

