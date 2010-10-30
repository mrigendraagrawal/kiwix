/* Start XUL page */
pref("toolkit.defaultChromeURI", "chrome://main/content/main.xul");

/* Default skin */
pref("general.skins.selectedSkin", "default");

/* Charset */
pref("intl.charset.default", "UTF-8");

/* Don't inherit OS locale */
pref("intl.locale.matchOS", true);

/* Choose own fallback locale; later it can be overridden by the user */
pref("general.useragent.locale", "chrome://global/locale/intl.properties");

/* Warn for http */
pref("network.protocol-handler.warn-external.http", false);

/* Debug preferences */
pref("javascript.options.showInConsole", true);
pref("browser.dom.window.dump.enabled", true);
pref("nglayout.debug.disable_xul_cache", true);
pref("nglayout.debug.disable_xul_fastload", true);
pref("javascript.options.strict", true);
pref("extensions.logging.enabled", true);
pref("dom.report_all_js_exceptions", true);

/* Caching strategy */
pref("browser.cache.disk.enable", false);
pref("browser.cache.memory.enable", true);
pref("browser.cache.memory.capacity", -1);

/* Privacy */
pref("kiwix.removeprofileonclose", false);
pref("kiwix.removeprofileonclose.confirm", true);

/* Tabs */
pref("kiwix.displayTabs", false);

/* Search */
pref("kiwix.defaultsearchbackend", "xapian");

/* Download Manager (for Save Page) */
pref("browser.download.manager.closeWhenDone", true);
pref("browser.download.manager.showWhenStarting", false);

/* History */
pref("browser.sessionhistory.max", -1);

/* Download dialog if Mimetype is not supported */
pref("browser.download.useDownloadDir", false);
pref("browser.helperApps.deleteTempFileOnExit", true);
pref("browser.download.folderList", 0);
pref("browser.download.manager.showAlertOnComplete", true);
pref("browser.download.manager.showAlertInterval", 2000);
pref("browser.download.manager.retention", 2);
pref("browser.download.manager.showWhenStarting", true);
pref("browser.download.manager.useWindow", true);
pref("browser.download.manager.closeWhenDone", true);
pref("browser.download.manager.openDelay", 0);
pref("browser.download.manager.focusWhenStarting", false);
pref("browser.download.manager.flashCount", 2);
pref("alerts.slideIncrement", 1);
pref("alerts.slideIncrementTime", 10);
pref("alerts.totalOpenTime", 4000);
pref("alerts.height", 50);
