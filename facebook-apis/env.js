// How to use environment variables to configure your Angular application without a rebuild
// https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/#
(function (window) {
    window.__env = window.__env || {};

    // Production enviroment
    window.__env.production = false;

    // Application domain
    window.__env.domain = 'localhost';

    // Whether or not to enable debug mode
    // Setting this to false will disable console output
    window.__env.enableDebug = true;
}(this));