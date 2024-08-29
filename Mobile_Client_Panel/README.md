To test your React web app on actual mobile devices (Android and iOS) without hosting it, you can use several methods to view and interact with your app directly on your phone. Here are some effective approaches:

### 1. **Local Network Access**

You can access your local development server from your mobile device if both your computer and phone are on the same Wi-Fi network.

#### Steps:

1. **Find Your Local IP Address:**
   - On your computer, run `ipconfig` (Windows) or `ifconfig` (macOS/Linux) in the terminal to find your local IP address. Look for the IPv4 address under your Wi-Fi or Ethernet connection.

2. **Start Your Development Server:**
   - Make sure your React development server is running. For most React projects created with Create React App, this is done with `npm start` or `yarn start`.

3. **Update the Development Server Host:**
   - By default, Create React App serves the app on `localhost`. You need to modify the start script to use your local IP address:
     ```sh
     HOST=0.0.0.0 npm start
     ```
   - This command makes the server listen on all network interfaces, making it accessible from other devices on your local network.

4. **Access from Mobile Device:**
   - Open a web browser on your phone and navigate to `http://<YOUR_LOCAL_IP>:3000`. Replace `<YOUR_LOCAL_IP>` with your actual IP address and `3000` with the port your development server is running on (if different).

### 2. **Use Tunneling Services**

Tunneling services allow you to expose your local development server to the internet, which can be accessed from any device with an internet connection. This is useful for testing on remote devices as well.

#### Popular Tunneling Tools:

1. **[ngrok](https://ngrok.com/):**
   - Download and install ngrok.
   - Run the following command to create a secure tunnel to your local server:
     ```sh
     ngrok http 3000
     ```
   - ngrok will provide a public URL that you can open on your mobile device’s browser.

2. **[Localtunnel](https://localtunnel.github.io/www/):**
   - Install Localtunnel globally:
     ```sh
     npm install -g localtunnel
     ```
   - Run Localtunnel to expose your local server:
     ```sh
     lt --port 3000
     ```
     
   - Localtunnel will generate a URL that you can use to access your local app.

### 3. **Deploy to a Temporary Hosting Service**

If you prefer not to use local network or tunneling, you can use a temporary or free hosting service for testing.

#### Services:

1. **[Netlify](https://www.netlify.com/):**
   - You can deploy your app to Netlify for free with a simple drag-and-drop upload or through Git integration. Netlify provides a live URL for your app.

2. **[Vercel](https://vercel.com/):**
   - Similar to Netlify, Vercel offers free hosting with simple deployment options. Deploy your app through Vercel’s interface or connect it to a Git repository.

3. **[GitHub Pages](https://pages.github.com/):**
   - If your project is hosted on GitHub, you can use GitHub Pages for free hosting. Follow the instructions in the GitHub Pages documentation to deploy your app.

### 4. **Use Mobile Emulators**

While not testing on physical devices, using emulators can be a good alternative for initial testing.

#### Emulators:

1. **Chrome DevTools Device Mode:**
   - Open your app in Chrome.
   - Open DevTools (F12 or right-click and select "Inspect").
   - Click the device toolbar icon (Toggle device toolbar) to simulate different mobile devices and screen sizes.

2. **BrowserStack or Sauce Labs:**
   - These services offer cross-browser testing on real devices and emulators. They are paid services but offer comprehensive testing environments.

### Summary

To test your React web app on mobile devices without hosting it, you can use local network access, tunneling services like ngrok or Localtunnel, or temporary hosting services like Netlify or Vercel. Additionally, emulators and cross-browser testing services can be used for broader testing scenarios. Each method provides different benefits, so choose the one that best fits your needs for testing and development.