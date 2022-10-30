(function(){
    const scriptTageName = "script";
    const loadEventName = "load";
    const functionType = "function";
    
    var WCPConsentBinder = (function() {
        //wait for 200ms before trying to find WCP again
        const waitToRetryInterval = 100;
        //try for 3 seconds
        const waitToRetryTimes = 60;
        //all non essential cookies
        const nonEssentialCookies = [
            "__atuvc",
            "__atuvs",
            "__CT_Data",
            "_cs_c",
            "_cs_s",
            "_cs_id",
            "_CT_RS_",
            "_mkto_trk",
            "_uetsid",
            "_uetvid",
            "AADAuth",
            "AADAuthCode",
            "AADSID",
            "AADState",
            "aam_uuid",
            "aamoptsegs",
            "ak_bmsc",
            "AMCV_EA76ADE95776D2EC7F000101 % 40AdobeOrg",
            "ANON",
            "bm_sv",
            "ClicktaleReplayLink",
            "ctm",
            "datr",
            "fr",
            "loc",
            "LPVID",
            "mbox",
            "MicrosoftApplicationsTelemetryDeviceId",
            "MicrosoftApplicationsTelemetryFirstLaunchTime",
            "msresearch",
            "na_id",
            "NAP",
            "optimizelyEndUserId",
            "RT",
            "s_fid",
            "sb",
            "uid",
            "uvc",
            "WRUIDAWS",
            "WRUIDCD03072018",
            "X - FD - FEATURES"
        ];
        const undefinedType = "undefined";

        /**
         * Returns a promise that will resolve once it finds the WCP window object.
         * It will reject if the WCP window object isn't found before the timeout
         * @returns {Promise} Promise that will resolve or reject.
         * */
        function waitUntilWcpLoads() {
            return new Promise(function(resolve, reject) {
                var retryTimes = 0;
                var intervalHandle = setInterval(function() {
                    if (retryTimes < waitToRetryTimes) {
                        if (typeof WcpConsent !== undefinedType && typeof window.siteConsent !== undefinedType) {
                            clearInterval(intervalHandle);
                            resolve();
                        } else if (window.BannerLoadedFunc !== undefinedType && window.NeedsBannerLoadedFunc) {
                            window.BannerLoadedFunc = function() {
                                resolve();
                            }
                            clearInterval(intervalHandle);
                        } else {
                            retryTimes++;
                        }
                    } else {
                        clearInterval(intervalHandle);
                        reject();
                    }
                }, waitToRetryInterval);

                window.BannerLoadedFunc = function() {
                    resolve();
                    clearInterval(intervalHandle);
                }
            });
        }

        /**
         * Returns a promise that will resolve if the blueprint query argument is found and the legacy cookie compliance window object isn't.
         * It will reject if either are false.
         *
         * @returns {Promise} Promise that will resolve or reject.
         * */
        function checkForBlueprint() {
            return new Promise(function(resolve, reject) {
                if (typeof utf_event !== functionType) {
                    resolve();
                } else {
                    reject();
                }
            });
        }

        /**
         * Returns a promise that will resolve if consent is required or rejects if not.
         *
         * @returns {Promise} Promise that will resolve or reject.
         * */
        function checkToSeeIfConsentIsRequired() {
            return new Promise(function(resolve, reject) {
                var userConsent = siteConsent.getConsent();

                if (userConsent.Required && siteConsent.isConsentRequired) {
                    resolve();
                } else {
                    reject();
                }
            });
        }

        /**
         * Checks to see that all areas of consent have been given
         * @param {any} consentObj The consent object from the WCP Object
         * @returns {boolean} True if consent is given for all categories, false otherwise.
         */
        function checkConsent(consentObj) {
            return consentObj.Analytics && consentObj.SocialMedia && consentObj.Advertising;
        }

        /**
         * Returns a promise that resolves if the user has given consent before page load. Rejects otherwise.
         *
         * @returns {Promise} Promise that will resolve or reject.
         * */
        function checkInitialConsent() {
            return new Promise(function(resolve, reject) {
                if (window.siteConsent) {
                    var userConsent = siteConsent.getConsent();

                    if (checkConsent(userConsent)) {
                        resolve();
                    } else {
                        reject();
                    }
                }
            });
        }

        /**
         * Expires the cookie referenced by the passed in name
         * @param {String} cookiename name of the cookie to delete
         */
        function deleteCookie(cookiename) {
            var expires = ";max-age=-1";
            var name = cookiename;
            var value = "ok";

            document.cookie = name + "=" + value + expires + ";domain=.microsoft.com;path=/";
        }

        /**
         * Deletes all non-essential cookies
         * @param {string[]} cookieList List of cookies to delete
         */
        function deleteNonEssentialCookies(cookieList) {
            return new Promise(function(resolve) {
                for (var i = 0, len = cookieList.length; i < len; i++) {
                    var cookieName = cookieList[i];

                    deleteCookie(cookieName);
                }

                resolve();
            });
        }

        /**
         * Returns a promise that binds the WCP onConsentChange event to a function that checks whether or not cookies need to be deleted on consent change
         *
         * @returns {Promise} Promise that will resolve or reject.
         * */
        function bindToConsentChange() {
            return new Promise(function(resolve) {
                WcpConsent.onConsentChanged(function() {
                    var userConsent = siteConsent.getConsent();

                    if (!checkConsent(userConsent)) {
                        deleteNonEssentialCookies(nonEssentialCookies);
                    }
                });

                resolve();
            });
        }

        return {
            /**
             * Initializes the cookie compliance behavior needed on the page
             *
             * @param {Promise} Promise to execute before running the cookie compliance check.
             * */
            init: function() {
                return new Promise(function(resolve, reject) {
                    beforeConsent().then(function() {
                        checkForBlueprint().then(function() {
                            waitUntilWcpLoads().then(function() {
                                checkToSeeIfConsentIsRequired().catch(function() {
                                    resolve();
                                }).then(function() {
                                    checkInitialConsent().then(function() {
                                        bindToConsentChange().then(function() {
                                            var userConsent = siteConsent.getConsent();

                                            if (checkConsent(userConsent)) {
                                                resolve();
                                            } else {
                                                reject();
                                            }
                                        }).catch(function() {
                                            reject();
                                        });
                                    }).catch (function() {
                                        deleteNonEssentialCookies(nonEssentialCookies);

                                        bindToConsentChange().then(function() {
                                            var userConsent = siteConsent.getConsent();

                                            if (checkConsent(userConsent)) {
                                                resolve();
                                            } else {
                                                reject();
                                            }
                                        }).catch(function() {
                                            reject();
                                        });
                                    });
                                });
                            }).catch(function (e) {
                                if (shouldLegacyCodeBeSkipped()) {
                                    reject();
                                } else {
                                    resolve();
                                }
                            });
                        })
                        .catch(function() {
                            resolve();
                        });
                    });
                });
            }
        }
    })();

    /**
     * Executes the container script code
     * Note: The reason this is encapsulated is because we lost the unminified source for this.
     * */
    function executeOaCode() {
        const blueprintCookieHeader = "bp_";

        return new Promise(function(resolve) {
            window.oa = window.oa || { load: true };

            (function(doc, options) {
                if (!window.oa.container) {

                    window.oa.container = true;

                    !(function(opt, docu, win, callback) {
                        var scriptElement = docu.getElementsByTagName(scriptTageName);

                        for (var i = 0; i < opt.length; i++) {
                            var isAnOverrideSpecified = callback(win.location.search.toLowerCase(), docu.cookie);
                            var option = opt[i];

                            if (Array.prototype.indexOf.call(scriptElement, docu.location.protocol + option[1]) === -1 && option[6] && option[0].test(docu.location.href)) {
                                if ((isAnOverrideSpecified !== option[5] && null !== option[5]) || getCookieValue(blueprintCookieHeader + option[7].split(" ").join("_"))) {
                                    option[1] = getCookieValue(blueprintCookieHeader + option[7].split(" ").join("_"));
                                }

                                addScript(option, docu);
                            }
                        }
                    })(options, doc, window, function (t, e) {
                        return -1 !== t.indexOf("blueprint=1") || -1 !== e.indexOf("cfDebug=");
                    });
                }

                function getCookieValue(cookieName) {
                    var cookieHeader = cookieName + "=";
                    var cookieArray = decodeURIComponent(doc.cookie).split(";");


                    for (var i = 0; i < cookieArray.length; i++) {
                        //remove spaces from the front of cookie name value pairs
                        for (var j = cookieArray[i]; " " === j.charAt(0);) j = j.substring(1);

                        //if the cookie name matches the name value pair, return the value.
                        if (0 === j.indexOf(cookieHeader)) return j.substring(cookieHeader.length, j.length);
                    }

                    //else return nothing.
                    return "";
                }

                function addScript(option, docum) {

                    if (functionType === typeof option[3]) {
                        option[3](option);
                    }

                    var scriptElem = docum.createElement(scriptTageName);

                    scriptElem.type = "text/javascript";
                    scriptElem.src = option[1];
                    scriptElem.async = option[2];
                    scriptElem.addEventListener(loadEventName, function() {
                        option[4](option);
                        resolve();
                    });
                    scriptElem.addEventListener('readystatechange', function() {
                        "complete" === this.readyState && option[4](option);
                    });

                    if (option[8]) option[8]();

                    docum.getElementsByTagName("head")[0].appendChild(scriptElem);
                }
            })(document, [
                [
                    new RegExp(/^((?!(marketplace\.visualstudio\.com)|(teams\.microsoft\.com)).)*$/i),
                    "//assets.adobedtm.com/launch-ENc0cbffaf0f8248c3a934a56818d7737e.min.js",
                    //containerScriptUrl,
                    true,
                    function() { },
                    function(t) {
                        window.oa.launchLoaded = t[7];
                    },
                    !1,
                    true,
                    "production",
                    function() {
                        //this is needed to allow another launch property to load.
                        //without this, the property that loads after this will simply just not execute.
                        window.__satelliteLoaded = false;
                        //in order to avoid a null reference error, we shuffle the existing global to another.
                        //the reference occurs from a function with in the object, so it just needs to be kept from being garbage collected.
                        window._satellite2 = window._satellite;
                        window._satellite = null;
                    }
                ],
            ]);
        });

    }

    var preConScript = (document.URL.indexOf("blueprint=1") !== -1) ? "//assets.adobedtm.com/5ef092d1efb5/d6d76b37b476/launch-17f30cff1fdb-staging.min.js" : "//assets.adobedtm.com/5ef092d1efb5/d6d76b37b476/launch-41185cd0b005.min.js";

    /**
     * Returns a promise that is ran before cookie compliance is even checked
     *
     * @returns {Promise} Promise that will resolve or reject.
     * */
    function beforeConsent() {
        return new Promise(function(resolve) {
            var head = document.head || document.getElementsByTagName('head')[0];
            var script = document.createElement(scriptTageName);

            script.src = preConScript;
            script.addEventListener(loadEventName, resolve);

            head.insertBefore(script, head.firstChild);
        });
    }

    /**
     * Returns true if the page is flagged to skip the legacy behavior if no WCP object is found.
     *
     * @returns {Boolean} True if it is set to "true" (case-insensitive). False otherwise.
     */
    function shouldLegacyCodeBeSkipped() {
        var metaTag = document.querySelector("meta[name='SkipLegacyForWcpConsent']");
        var ret = false;

        if (metaTag) {
            var content = metaTag.getAttribute("content");

            if (content && content.toLowerCase() === "true") {
                ret = true;
            }
        }

        return ret;
    }

    /**
    * Initializes the binder, then executes the code needed after the cookie compliance has succeeded or not succeeded
    * */
    function onPageLoad() {
        WCPConsentBinder.init().then(function () {
            //code for when cookie consent is needed and given or when cookie consent is not needed.
            //Post consent code loads here
            waitForSattelite().then(function() {
                executeOaCode();
            }).catch(function() {
                executeOaCode();
            });

            addComscoreScript();

        });
    }

    /**
    * Loads in the comscore script asynchronously and adds it to the bottom of the document body
    */
     function addComscoreScript() {
        var script = document.createElement('script');
        script.src = "https://www.microsoft.com/library/svy/broker.js";
        script.async = true;
        document.body.appendChild(script);
    }

    /**
     * Runs an interval function until the _satellite global is no longer null
     * */
    function waitForSattelite() {
        return new Promise(function(resolve, reject) {
            var retried = 1;
            var intervalHandle = setInterval(function () {
                if (retried < 100) {
                    if (_satellite) {
                        clearInterval(intervalHandle);
                        resolve();
                    }
                    retried++;
                } else {
                    reject();
                }
            }, 100);
        });
    }

    /**
     * Waits for the promise shim to load.
     * @param {any} callback Function to call once the promise shim is loaded.
     * @param {any} errorCallback Function to call if the wait times out.
     */
    function waitForPromises(callback, errorCallback) {
        var retried = 1;
        var intervalHandle = setInterval(function () {
            if (retried < 100) {
                if (typeof Promise === "function") {
                    clearInterval(intervalHandle);
                    callback();
                }
                retried++;
            } else {
                clearInterval(intervalHandle);
                errorCallback();
            }
        }, 100);
    }

    /**
     * Checks to see if the Promise shim is needed. If yes, then it will wait for it to load before kicking off the script.
     * If no, then it just kicks off the script.
     * */
    function checkForPromiseThenLoad() {
        if (typeof Promise !== "function") {
            // the define function already present on the page completely borks the open source library for a lot of these shims
            // so it has to be moved away temporarily before loading in the shim.
            if (typeof define === "function") {
                window.defineBackup = define;
                window.define = null;
            }

            //If the browser doesn't natively support promises, load them in.
            var script = document.createElement("script");

            script.src = "https://cdn.jsdelivr.net/npm/bluebird@3.7.2/js/browser/bluebird.min.js";
            document.body.appendChild(script);

            waitForPromises(function () {
                //restore define function
                if (typeof window.defineBackup === "function") {
                    window.define = window.defineBackup;
                    window.defineBackup = null;
                }

                onPageLoad();
            }, function () {});
        } else {
            onPageLoad();
        }
    }

    //this just sets the script to load on page load
    if (document.readyState === "complete" || document.readyState === "interactive") {
        checkForPromiseThenLoad();
    } else {
        document.addEventListener("DOMContentLoaded", checkForPromiseThenLoad, false);
    }
})();

