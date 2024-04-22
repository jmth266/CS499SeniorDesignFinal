const { firefox } = require('playwright');
const url = 'http://127.0.0.1:5173/'; // Replace with your app's URL
(async () => {
  const browser = await firefox.launch();

  try {
    const context = await browser.newContext();
    // Launch your Vite React app in laptop/desktop view
    const pageLaptop = await context.newPage();
    await pageLaptop.setViewportSize({ width: 1366, height: 768 });
    await pageLaptop.goto(url);
    await pageLaptop.screenshot({ path: 'screenshot/laptop_view.png' });
    await pageLaptop.close();
    // Launch your Vite React app in tablet view
    const pageTablet = await context.newPage();
    await pageTablet.setViewportSize({ width: 810, height: 850 });
    await pageTablet.goto(url);
    await pageTablet.screenshot({ path: 'screenshot/tablet_view.png' });
    // Launch your Vite React app in mobile view
    const pageMobile = await context.newPage();
    await pageMobile.setViewportSize({ width: 412, height: 720 });
    await pageMobile.goto(url);
    await pageMobile.screenshot({ path: 'screenshot/mobile_view.png' });
    await pageMobile.close();
    
  } finally {
    await browser.close();
  }
})();
